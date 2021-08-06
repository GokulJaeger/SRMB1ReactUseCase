package com.example.inventorymanagement.inventorymanagementspringboot.repository;

import com.example.inventorymanagement.inventorymanagementspringboot.model.Manager;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ManagerRepository extends JpaRepository<Manager, Long>{
    
}
