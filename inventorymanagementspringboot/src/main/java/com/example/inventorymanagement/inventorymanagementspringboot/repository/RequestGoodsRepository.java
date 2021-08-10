package com.example.inventorymanagement.inventorymanagementspringboot.repository;

import com.example.inventorymanagement.inventorymanagementspringboot.model.RequestGoods;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestGoodsRepository extends JpaRepository<RequestGoods, Long> {
    
}
