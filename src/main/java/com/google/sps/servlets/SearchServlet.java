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
import com.google.gson.Gson;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.ValueEventListener;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.ChildEventListener;
import com.google.firebase.database.DatabaseError;
import java.io.FileInputStream;
import java.io.IOException;
import java.lang.Math;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet to test set-up */
@WebServlet("/searchJava")
public class SearchServlet extends HttpServlet {

  private void initializeDatabase() {
    FileInputStream serviceAccount =
    new FileInputStream("../data/firebase-adminsdk-key.json");

    FirebaseOptions options = new FirebaseOptions.Builder()
    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
    .setDatabaseUrl("https://step-xchange.firebaseio.com")
    .build();

    FirebaseApp.initializeApp(options);
  }

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    ArrayList<String> list = new ArrayList<>();
    
    // initializeDatabase();
    // String queryString = request.getParameter("query");
    // final FirebaseDatabase database = FirebaseDatabase.getInstance();

    // DatabaseReference ref = database.getReference("test_skills");
    // ref.orderByChild("subskills").startAt(queryString).addListenerForSingleValueEvent(new ChildEventListener() {
    //   @Override
    //   public void onDataChange(DataSnapshot dataSnapshot) {
    //     if (dataSnapshot.hasChildren()) {
    //       for (DataSnapshot child : dataSnapshot.getChildren()) {
    //         list.add(child);
    //       }
    //     }
    //   }

    //   @Override
    //   public void onCancelled(DatabaseError databaseError) {

    //   }
    // });
    
    // Gson gson = new Gson();
    // response.setContentType("application/json;");
    response.getWriter().println(gson.toJson(list));
  }
}
