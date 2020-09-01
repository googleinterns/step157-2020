package com.google.sps;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.google.sps.data.Skill;
import com.google.sps.servlets.SearchServlet;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.lang.ReflectiveOperationException;
import java.lang.reflect.Field;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

@RunWith(JUnit4.class)
public final class SkillSearchTest {
  HttpServletRequest request;
  HttpServletResponse response;

  StringWriter stringWriter;
  PrintWriter printWriter;

  Gson gson;

  @Before
  public void setUp() throws Exception {
    request = mock(HttpServletRequest.class);
    response = mock(HttpServletResponse.class);

    stringWriter = new StringWriter();
    printWriter = new PrintWriter(stringWriter);
    when(response.getWriter()).thenReturn(printWriter);

    // Sets the environment variable TESTING so the test database is used
    try {
      Map<String, String> env = System.getenv();
      Field field = env.getClass().getDeclaredField("m");
      field.setAccessible(true);
      ((Map<String, String>) field.get(env)).put("TESTING", "true");
    } catch (ReflectiveOperationException e) {
      System.out.println(e +);
    }
  }

  @Test
  public void returnsCorrectSkill() throws IOException, ServletException {
    when(request.getParameter("query")).thenReturn("biology");

    new SearchServlet().doGet(request, response);
    String jsonResult = stringWriter.getBuffer().toString().trim();

    Gson gson = new Gson();
    Type typeOfResults = new TypeToken<ArrayList<Skill>>() {}.getType();
    ArrayList<Skill> searchResults = gson.fromJson(jsonResult, typeOfResults);

    ArrayList<Skill> expected = new ArrayList<>();
    ArrayList<String> userList = new ArrayList<>();
    userList.add("u2");
    userList.add("u3");
    expected.add(new Skill("biology", "academics", "blah", userList));

    assertEquals(expected, searchResults);
  }

  @Test
  public void caseIsIgnored() throws IOException, ServletException {
    when(request.getParameter("query")).thenReturn("BIOLOGY");

    new SearchServlet().doGet(request, response);
    String jsonResult = stringWriter.getBuffer().toString().trim();

    Gson gson = new Gson();
    Type typeOfResults = new TypeToken<ArrayList<Skill>>() {}.getType();
    ArrayList<Skill> searchResults = gson.fromJson(jsonResult, typeOfResults);

    ArrayList<Skill> expected = new ArrayList<>();
    ArrayList<String> userList = new ArrayList<>();
    userList.add("u2");
    userList.add("u3");
    expected.add(new Skill("biology", "academics", "blah", userList));

    assertEquals(expected, searchResults);
  }

  @Test
  public void noMatchReturnsEmpty() throws IOException, ServletException {
    when(request.getParameter("query")).thenReturn("biolog");

    new SearchServlet().doGet(request, response);
    String jsonResult = stringWriter.getBuffer().toString().trim();

    Gson gson = new Gson();
    Type typeOfResults = new TypeToken<ArrayList<Skill>>() {}.getType();
    ArrayList<Skill> searchResults = gson.fromJson(jsonResult, typeOfResults);

    ArrayList<Skill> expected = new ArrayList<>();

    assertEquals(expected, searchResults);
  }
}