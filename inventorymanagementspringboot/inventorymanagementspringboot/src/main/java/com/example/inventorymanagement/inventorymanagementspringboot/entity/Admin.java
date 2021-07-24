package com.example.inventorymanagement.inventorymanagementspringboot.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "tbl_admin")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(length = 100)
    private String username;

    @Column(length = 100)
    private String password;

    private long phone;

    private long aadhar;

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public long getPhone() {
        return phone;
    }
    public void setPhone(long phone) {
        this.phone = phone;
    }
    public long getAadhar() {
        return aadhar;
    }
    public void setAadhar(long aadhar) {
        this.aadhar = aadhar;
    }
    public long getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    
}
