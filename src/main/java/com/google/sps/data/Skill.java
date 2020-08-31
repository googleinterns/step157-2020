package com.google.sps.data;

import java.util.ArrayList;

public class Skill {
  private String key;
  private String category;
  private String desc;
  private ArrayList<String> users;

  public Skill() {}

  public Skill(String key, String category, String desc, ArrayList<String> users) {
    this.key = key;
    this.category = category;
    this.desc = desc;
    this.users = users;
  }

  public ArrayList<String> getUsers() {
    return users;
  }

  public String getKey() {
    return key;
  }

  public String getCategory() {
    return category;
  }

  public String getDesc() {
    return desc;
  }

  public void setKey(String key) {
    this.key = key;
  }

  @Override
  public boolean equals(Object object) {
    Skill other = (Skill) object;
    return this.key.equals(other.key) && this.category.equals(other.category)
        && this.desc.equals(other.desc) && this.users.equals(other.users);
  }

  @Override
  public String toString() {
    String str = "\"" + key + "\" \"" + category + "\" \"" + desc + "\" \"";
    for (String user : users) {
      str += user + " ";
    }
    return str + "\"";
  }
}