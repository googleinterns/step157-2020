package com.google.sps.data;

import java.util.ArrayList;

public class Skill {
  
  private String category;
  private String desc;
  private ArrayList<String> users;

  public Skill() {}
  
  public Skill(String category, String desc, ArrayList<String> users) {
    this.category = category;
    this.desc = desc;
    this.users = users;
  }

  public ArrayList<String> getUsers() {
    return users;
  }

  public String getCategory() {
    return category;
  }

  public String getDesc() {
    return desc;
  }
}