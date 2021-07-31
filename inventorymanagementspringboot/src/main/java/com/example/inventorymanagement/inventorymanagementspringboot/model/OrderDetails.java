package com.example.inventorymanagement.inventorymanagementspringboot.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "orderdetails")
public class OrderDetails {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    private int ordercode;

    private String productcode;

    private String productname;

    private double orderprice;

    private String ordercatg;

    private double orderqty;

    private String suppliername;

    private String supplierphone;

    private String supplieremail;

    private String supplieraddress;

    @Column(updatable = false)
    @Temporal(TemporalType.DATE)
    private Date orderdate;

    @Column(updatable = false)
    @Temporal(TemporalType.DATE)
    private Date deliverydate;

    @OneToMany(mappedBy = "orderdetails", cascade = CascadeType.ALL)
    private Set<VegFruit> vegfruit = new HashSet<>();

    public int getOrdercode() {
        return ordercode;
    }

    public void setOrdercode(int ordercode) {
        this.ordercode = ordercode;
    }

    public String getProductcode() {
        return productcode;
    }

    public void setProductcode(String productcode) {
        this.productcode = productcode;
    }

    public String getProductname() {
        return productname;
    }

    public void setProductname(String productname) {
        this.productname = productname;
    }

    public double getOrderprice() {
        return orderprice;
    }

    public void setOrderprice(double orderprice) {
        this.orderprice = orderprice;
    }

    public String getOrdercatg() {
        return ordercatg;
    }

    public void setOrdercatg(String ordercatg) {
        this.ordercatg = ordercatg;
    }

    public double getOrderqty() {
        return orderqty;
    }

    public void setOrderqty(double orderqty) {
        this.orderqty = orderqty;
    }

    public String getSuppliername() {
        return suppliername;
    }

    public void setSuppliername(String suppliername) {
        this.suppliername = suppliername;
    }

    public String getSupplierphone() {
        return supplierphone;
    }

    public void setSupplierphone(String supplierphone) {
        this.supplierphone = supplierphone;
    }

    public String getSupplieremail() {
        return supplieremail;
    }

    public void setSupplieremail(String supplieremail) {
        this.supplieremail = supplieremail;
    }

    public String getSupplieraddress() {
        return supplieraddress;
    }

    public void setSupplieraddress(String supplieraddress) {
        this.supplieraddress = supplieraddress;
    }

    public Date getOrderdate() {
        return orderdate;
    }

    public void setOrderdate(Date orderdate) {
        this.orderdate = orderdate;
    }

    public Date getDeliverydate() {
        return deliverydate;
    }

    public void setDeliverydate(Date deliverydate) {
        this.deliverydate = deliverydate;
    }

    public Set<VegFruit> getVegfruit() {
        return vegfruit;
    }

    public void setVegfruit(Set<VegFruit> vegfruit) {
        this.vegfruit = vegfruit;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

}
