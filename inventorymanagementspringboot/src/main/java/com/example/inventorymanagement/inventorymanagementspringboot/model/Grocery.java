package com.example.inventorymanagement.inventorymanagementspringboot.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class Grocery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    @NotBlank 
    @NotEmpty
    @Size(min = 5, message = "Product code must have atleast 5 characters")
    private String pcode;

    @NotNull
    @NotBlank 
    @NotEmpty
    private String pname;

    @NotNull
    @NotBlank 
    @NotEmpty
    private String pdesc;

    @NotNull
    @NotBlank 
    @NotEmpty
    private String pcatg;

    @NotNull
    @NotBlank 
    @NotEmpty
    private double pqty;

    @NotNull
    @NotBlank 
    @NotEmpty
    private double pprice;

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.DATE)
    private Date manuDate;

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.DATE)
    private Date expDate;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "ordercode")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private OrderDetails orderdetails;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPcode() {
        return pcode;
    }

    public void setPcode(String pcode) {
        this.pcode = pcode;
    }

    public String getPname() {
        return pname;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }

    public String getPdesc() {
        return pdesc;
    }

    public void setPdesc(String pdesc) {
        this.pdesc = pdesc;
    }

    public String getPcatg() {
        return pcatg;
    }

    public void setPcatg(String pcatg) {
        this.pcatg = pcatg;
    }

    public double getPqty() {
        return pqty;
    }

    public void setPqty(double pqty) {
        this.pqty = pqty;
    }

    public double getPprice() {
        return pprice;
    }

    public void setPprice(double pprice) {
        this.pprice = pprice;
    }

    public Date getManuDate() {
        return manuDate;
    }

    public void setManuDate(Date manuDate) {
        this.manuDate = manuDate;
    }

    public Date getExpDate() {
        return expDate;
    }

    public void setExpDate(Date expDate) {
        this.expDate = expDate;
    }

    public OrderDetails getOrderdetails() {
        return orderdetails;
    }

    public void setOrderdetails(OrderDetails orderdetails) {
        this.orderdetails = orderdetails;
    }

    
    
}
