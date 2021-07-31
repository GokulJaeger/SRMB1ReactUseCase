package com.example.inventorymanagement.inventorymanagementspringboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import com.example.inventorymanagement.inventorymanagementspringboot.exception.ResourceNotFoundException;
import com.example.inventorymanagement.inventorymanagementspringboot.model.Admin;
import com.example.inventorymanagement.inventorymanagementspringboot.repository.AdminRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AdminController {


    private Logger log = LoggerFactory.getLogger(AdminController.class);

    @Autowired
    private AdminRepository adminrepo;

    @GetMapping("/admin")
    public List<Admin> getAllAdmins() {
        return adminrepo.findAll();
    }

    @GetMapping("/admin/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable(value = "id") Long adminLong)
            throws ResourceNotFoundException {
                Admin admin1 = adminrepo.findById(adminLong)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + adminLong));
        log.info("Data's fetched: ", admin1.toString());
        return ResponseEntity.ok().body(admin1);
    }

    @PostMapping("/admin")
    public Admin createAdmin(@Valid @RequestBody Admin admin2) throws ResourceNotFoundException {
        log.info("Inserted!...");
        return adminrepo.save(admin2);
    }

    @PutMapping("/admin/{id}")
    public ResponseEntity<Admin> updateAdmin(@PathVariable(value = "id") Long adminLong,
            @Valid @RequestBody Admin adminDetails) throws ResourceNotFoundException {
                Admin admin = adminrepo.findById(adminLong)
                .orElseThrow(() -> new ResourceNotFoundException("Employee cannot be found for this id :: " + adminLong));

                admin.setUsername(adminDetails.getUsername());
                admin.setPassword(adminDetails.getPassword());
                admin.setHint(adminDetails.getHint());
                admin.setPhone(adminDetails.getPhone());
                admin.setAadhar(adminDetails.getAadhar());
        final Admin updatedAdmin = adminrepo.save(admin);
        log.info("Updated!...");
        return ResponseEntity.ok(updatedAdmin);
    }

    @DeleteMapping("/admin/{id}")
    public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long adminLong)
            throws ResourceNotFoundException {
                Admin admin = adminrepo.findById(adminLong)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + adminLong));

                adminrepo.delete(admin);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        log.info("Deleted!....");
        return response;
    }
}
