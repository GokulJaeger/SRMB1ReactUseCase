package com.example.inventorymanagement.inventorymanagementspringboot.repository;

import com.example.inventorymanagement.inventorymanagementspringboot.model.VegFruit;

import org.springframework.data.jpa.repository.JpaRepository;

public interface VegFruitRepository extends JpaRepository<VegFruit, Long>{
    
}
