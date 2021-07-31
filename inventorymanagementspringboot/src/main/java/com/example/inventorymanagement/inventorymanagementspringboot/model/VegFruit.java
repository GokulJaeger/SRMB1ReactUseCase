package com.example.inventorymanagement.inventorymanagementspringboot.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="vegfruit")
public class VegFruit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String pcode;

    private String pname;

    private String pdesc;

    private String pcatg;

    private double pqty;

    private double pprice;

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.DATE)
    private Date stockin;

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.DATE)
    private Date stockout;

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

    public Date getStockin() {
        return stockin;
    }

    public void setStockin(Date stockin) {
        this.stockin = stockin;
    }

    public Date getStockout() {
        return stockout;
    }

    public void setStockout(Date stockout) {
        this.stockout = stockout;
    }

    public OrderDetails getOrderdetails() {
        return orderdetails;
    }

    public void setOrderdetails(OrderDetails orderdetails) {
        this.orderdetails = orderdetails;
    }

    
}
