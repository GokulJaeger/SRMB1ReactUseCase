package com.example.inventorymanagement.inventorymanagementspringboot.repository;

import com.example.inventorymanagement.inventorymanagementspringboot.entity.Admin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepo extends JpaRepository<Admin,Long> {
    
}
