package com.example.inventorymanagement.inventorymanagementspringboot.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class OrderDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    @NotBlank
    @NotEmpty
    @Size(min = 5, message = "Order Code must have atleast 5 characters")
    private int ordercode;

    @NotNull
    @NotBlank
    @NotEmpty
    @Size(min = 5, message = "Product Code must have atleast 5 characters")
    private String productcode;

    @NotNull
    @NotBlank
    @NotEmpty
    @Size(min = 2, message = "Product name must have atleast 2 characters")
    private String productname;

    @NotNull
    @NotBlank
    @NotEmpty
    private double orderprice;

    @NotNull
    @NotBlank
    @NotEmpty
    private String ordercatg;

    @NotNull
    @NotBlank
    @NotEmpty
    private double orderqty;

    @NotNull
    @NotBlank
    @NotEmpty
    private String suppliername;

    @NotNull
    @NotBlank
    @NotEmpty
    @Size(min = 10, message = "Supplier number must have atleast 10 digits")
    private String supplierphone;

    @NotNull
    @NotBlank
    @NotEmpty
    @Size(min = 12, max = 30, message = "Supplier mail must have atleast 12 characters")
    private String supplieremail;

    @NotNull
    @NotBlank
    @NotEmpty
    @Size(min = 30, max = 65, message = "Supplier address must have atleast 30 characters")
    private String supplieraddress;

    @NotNull
    @NotBlank
    @NotEmpty
    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date orderdate;

    @NotNull
    @NotBlank
    @NotEmpty
    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    
}
