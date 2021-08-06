package com.example.inventorymanagement.inventorymanagementspringboot.repository;

import com.example.inventorymanagement.inventorymanagementspringboot.model.OrderDetails;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Long>{
    
}
