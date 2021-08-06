package com.example.inventorymanagement.inventorymanagementspringboot.repository;
import com.example.inventorymanagement.inventorymanagementspringboot.model.Grocery;

import org.springframework.data.jpa.repository.JpaRepository;

public interface GroceryRepository extends JpaRepository<Grocery, Long> {

    
}
