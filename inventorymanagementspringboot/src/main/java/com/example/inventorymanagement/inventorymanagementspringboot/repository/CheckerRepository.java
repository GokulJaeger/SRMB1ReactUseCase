package com.example.inventorymanagement.inventorymanagementspringboot.repository;

import com.example.inventorymanagement.inventorymanagementspringboot.model.Checker;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CheckerRepository extends JpaRepository<Checker, Long> {
    
}
