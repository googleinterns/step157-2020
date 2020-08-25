// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.database.ChildEventListener;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;
import com.google.gson.Gson;
import com.google.sps.data.Skill;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.lang.Math;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CountDownLatch;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet to test set-up */
@WebServlet("/skillsearch")
public class SearchServlet extends HttpServlet {
  private ArrayList<Skill> searchResults;
  private String query;

  private void initializeDatabase() {
    // To set the default application credentials you must run the following command:
    // GOOGLE_APPLICATION_CREDENTIALS="path/to/firebase-key.json"
    // and add that file to the .gitignore if its location is different than the one that's
    // currently there.
    // You must do this for every session because the value will be deleted on session end.
    try {
      FirebaseOptions options = new FirebaseOptions.Builder()
                                    .setCredentials(GoogleCredentials.getApplicationDefault())
                                    .setDatabaseUrl("https://step-xchange.firebaseio.com")
                                    .build();

      if (FirebaseApp.getApps().isEmpty()) {
        FirebaseApp.initializeApp(options);
      }
    } catch (IOException e) {
      System.err.println(e);
    }
  }

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    query = request.getParameter("query");

    CountDownLatch doneSignal = new CountDownLatch(1);

    doSearch(doneSignal);

    try {
      doneSignal.await();
    } catch (InterruptedException e) {
      System.err.println(e);
    }

    Gson gson = new Gson();
    response.setContentType("application/json;");
    response.getWriter().println(gson.toJson(searchResults));
  }

  private void doSearch(CountDownLatch doneSignal) {
    initializeDatabase();

    final FirebaseDatabase database = FirebaseDatabase.getInstance();
    DatabaseReference ref = database.getReference("skills");
    searchResults = new ArrayList<>();

    ref.orderByKey()
        .equalTo(query.toLowerCase())
        .addListenerForSingleValueEvent(new ValueEventListener() {
          @Override
          public void onDataChange(DataSnapshot dataSnapshot) {
            if (dataSnapshot.hasChildren()) {
              for (DataSnapshot child : dataSnapshot.getChildren()) {
                Skill skill = child.getValue(Skill.class);
                searchResults.add(skill);
              }
              doneSignal.countDown();
            } else {
              System.err.println("\nno results");
              doneSignal.countDown();
            }
          }

          @Override
          public void onCancelled(DatabaseError databaseError) {
            System.err.println("database error:\n" + databaseError);
            doneSignal.countDown();
          }
        });
  }
}
