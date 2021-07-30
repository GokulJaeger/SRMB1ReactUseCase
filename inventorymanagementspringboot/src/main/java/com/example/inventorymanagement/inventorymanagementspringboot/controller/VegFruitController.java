package com.example.inventorymanagement.inventorymanagementspringboot.controller;

import org.springframework.beans.factory.annotation.Autowired;  
// import org.springframework.data.domain.Page;  
// import org.springframework.data.domain.Pageable;  
import org.springframework.http.ResponseEntity;  
import org.springframework.web.bind.annotation.*;  
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;

import com.example.inventorymanagement.inventorymanagementspringboot.model.OrderDetails;
import com.example.inventorymanagement.inventorymanagementspringboot.model.VegFruit;
import com.example.inventorymanagement.inventorymanagementspringboot.repository.OrderDetailsRepository;
import com.example.inventorymanagement.inventorymanagementspringboot.repository.VegFruitRepository;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/vegfruit")
public class VegFruitController {  
    private final VegFruitRepository vegfruitrepo;
    private final OrderDetailsRepository orderdetailrepo;

    @Autowired
    public VegFruitController(VegFruitRepository vegfruitrepo, OrderDetailsRepository orderdetailrepo) {
        this.vegfruitrepo = vegfruitrepo;
        this.orderdetailrepo = orderdetailrepo;
    }

    @PostMapping
    public ResponseEntity<VegFruit> create(@RequestBody @Valid VegFruit vegfruit) {
        Optional<OrderDetails> optionalOrderdetails = orderdetailrepo.findById(vegfruit.getOrderdetails().getOrdercode());
        if (!optionalOrderdetails.isPresent()) {
            return ResponseEntity.unprocessableEntity().build();
        }

        vegfruit.setOrderdetails(optionalOrderdetails.get());

        VegFruit savedvegfruit = vegfruitrepo.save(vegfruit);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
            .buildAndExpand(savedvegfruit.getId()).toUri();

        return ResponseEntity.created(location).body(savedvegfruit);
    }

    @PutMapping("/{id}")
    public ResponseEntity<VegFruit> update(@RequestBody @Valid VegFruit vegfruit2, @PathVariable Integer id) {
        Optional<OrderDetails> optionalOrderdetails = orderdetailrepo.findById(vegfruit2.getOrderdetails().getOrdercode());
        if (!optionalOrderdetails.isPresent()) {
            return ResponseEntity.unprocessableEntity().build();
        }

        Optional<VegFruit> optionalBook = vegfruitrepo.findById(id);
        if (!optionalBook.isPresent()) {
            return ResponseEntity.unprocessableEntity().build();
        }

        vegfruit2.setOrderdetails(optionalOrderdetails.get());
        vegfruit2.setId(optionalBook.get().getId());
        vegfruitrepo.save(vegfruit2);

        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<VegFruit> delete(@PathVariable Integer id) {
        Optional<VegFruit> optionalVegfruit = vegfruitrepo.findById(id);
        if (!optionalVegfruit.isPresent()) {
            return ResponseEntity.unprocessableEntity().build();
        }

        vegfruitrepo.delete(optionalVegfruit.get());

        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<VegFruit>> getAll(VegFruit vegfruit3) {
        return ResponseEntity.ok(vegfruitrepo.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<VegFruit> getById(@PathVariable Integer id) {
        Optional<VegFruit> optionalVegfruit = vegfruitrepo.findById(id);
        if (!optionalVegfruit.isPresent()) {
            return ResponseEntity.unprocessableEntity().build();
        }

        return ResponseEntity.ok(optionalVegfruit.get());
    }
}

