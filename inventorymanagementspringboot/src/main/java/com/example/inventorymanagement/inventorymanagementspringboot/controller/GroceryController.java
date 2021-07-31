package com.example.inventorymanagement.inventorymanagementspringboot.controller;

import org.springframework.beans.factory.annotation.Autowired;  
// import org.springframework.data.domain.Page;  
// import org.springframework.data.domain.Pageable;  
import org.springframework.http.ResponseEntity;  
import org.springframework.web.bind.annotation.*;  
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;

import com.example.inventorymanagement.inventorymanagementspringboot.model.Grocery;
import com.example.inventorymanagement.inventorymanagementspringboot.model.OrderDetails;
import com.example.inventorymanagement.inventorymanagementspringboot.repository.GroceryRepository;
import com.example.inventorymanagement.inventorymanagementspringboot.repository.OrderDetailsRepository;


import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/grocery")
public class GroceryController {  
    private final GroceryRepository groceryrepo;
    private final OrderDetailsRepository orderdetailrepo;

    @Autowired
    public GroceryController(GroceryRepository groceryrepo, OrderDetailsRepository orderdetailrepo) {
        this.groceryrepo = groceryrepo;
        this.orderdetailrepo = orderdetailrepo;
    }

    @PostMapping("/grocery")
    public ResponseEntity<Grocery> create(@RequestBody @Valid Grocery grocery1) {
        Optional<OrderDetails> optionalOrderdetails = orderdetailrepo.findById(grocery1.getOrderdetails().getId());
        if (!optionalOrderdetails.isPresent()) {
            return ResponseEntity.unprocessableEntity().build();
        }

        grocery1.setOrderdetails(optionalOrderdetails.get());

        Grocery savedvegfruit = groceryrepo.save(grocery1);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
            .buildAndExpand(savedvegfruit.getId()).toUri();

        return ResponseEntity.created(location).body(savedvegfruit);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Grocery> update(@RequestBody @Valid Grocery grocery2, @PathVariable Integer id) {
        Optional<OrderDetails> optionalOrderdetails = orderdetailrepo.findById(grocery2.getOrderdetails().getId());
        if (!optionalOrderdetails.isPresent()) {
            return ResponseEntity.unprocessableEntity().build();
        }

        Optional<Grocery> optionalBook = groceryrepo.findById(id);
        if (!optionalBook.isPresent()) {
            return ResponseEntity.unprocessableEntity().build();
        }

        grocery2.setOrderdetails(optionalOrderdetails.get());
        grocery2.setId(optionalBook.get().getId());
        groceryrepo.save(grocery2);

        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Grocery> delete(@PathVariable Integer id) {
        Optional<Grocery> optionalVegfruit = groceryrepo.findById(id);
        if (!optionalVegfruit.isPresent()) {
            return ResponseEntity.unprocessableEntity().build();
        }

        groceryrepo.delete(optionalVegfruit.get());

        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<Grocery>> getAll(Grocery grocery3) {
        return ResponseEntity.ok(groceryrepo.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Grocery> getById(@PathVariable Integer id) {
        Optional<Grocery> optionalVegfruit = groceryrepo.findById(id);
        if (!optionalVegfruit.isPresent()) {
            return ResponseEntity.unprocessableEntity().build();
        }

        return ResponseEntity.ok(optionalVegfruit.get());
    }
}
