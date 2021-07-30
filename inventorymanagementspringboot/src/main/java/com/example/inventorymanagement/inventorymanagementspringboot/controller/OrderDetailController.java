package com.example.inventorymanagement.inventorymanagementspringboot.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;  
// import org.springframework.data.domain.Page;  
// import org.springframework.data.domain.Pageable;  
import org.springframework.http.ResponseEntity;  
import org.springframework.web.bind.annotation.*;  
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;

import com.example.inventorymanagement.inventorymanagementspringboot.model.OrderDetails;
import com.example.inventorymanagement.inventorymanagementspringboot.repository.OrderDetailsRepository;
import com.example.inventorymanagement.inventorymanagementspringboot.repository.VegFruitRepository;

import java.net.URI;
import java.util.List;
import java.util.Optional;

// import io.swagger.annotations.Api;
// import io.swagger.annotations.ApiOperation;
// import io.swagger.annotations.ApiResponse;
// import io.swagger.annotations.ApiResponses;

// @Api(value="StudentController", description = "API Service that manages the different payment modes support by SwiftPayment API Project")
@RestController
@RequestMapping("/api/orderdetail")
public class OrderDetailController {  
    private final VegFruitRepository vegfruitrepo;
    private final OrderDetailsRepository orderdetailrepo;
    private Logger logg = LoggerFactory.getLogger(OrderDetailController.class);

    @Autowired
    public OrderDetailController(VegFruitRepository vegfruitrepo, OrderDetailsRepository orderdetailrepo) {
        this.orderdetailrepo = orderdetailrepo;
        this.vegfruitrepo = vegfruitrepo;
    }

    @PostMapping
    public ResponseEntity<OrderDetails> create(@Valid @RequestBody OrderDetails orderdetail1) {
        OrderDetails savedorderdetail = orderdetailrepo.save(orderdetail1);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
            .buildAndExpand(savedorderdetail.getOrdercode()).toUri();
        logg.info("Created!....");
        return ResponseEntity.created(location).body(savedorderdetail);
    }

    // @ApiOperation(value="Creation of Customer Details", response = Iterable.class, tags = "regiserCustomer")
    // @ApiResponses(value={ 
    //     @ApiResponse(code = 200, message = "RSC-Success|OK"),
    //     @ApiResponse(code = 401, message = "RSC-not authorized!"), 
    //     @ApiResponse(code = 403, message = "RSC-forbidden!!!"),
    //     @ApiResponse(code = 404, message = "RSC-not found!!!") })
    @PutMapping("/{id}")
    public ResponseEntity<OrderDetails> update(@PathVariable Integer id, @Valid @RequestBody OrderDetails orderdetail2) {
        Optional<OrderDetails> optionalOrderDetail = orderdetailrepo.findById(id);
        if (!optionalOrderDetail.isPresent()) {
            logg.info("Updated Failed!....");
            return ResponseEntity.unprocessableEntity().build();
        }

        orderdetail2.setOrdercode(optionalOrderDetail.get().getOrdercode());
        orderdetailrepo.save(orderdetail2);
        logg.info("Updated!....");
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<OrderDetails> delete(@PathVariable Integer id) {
        Optional<OrderDetails> optionalOderDetails = orderdetailrepo.findById(id);
        if (!optionalOderDetails.isPresent()) {
            logg.info("Deletion Failed!....");
            return ResponseEntity.unprocessableEntity().build();
        }

        orderdetailrepo.delete(optionalOderDetails.get());
        logg.info("Deleted!....");
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderDetails> getById(@PathVariable Integer id) {
        Optional<OrderDetails> optionalOrderDetails = orderdetailrepo.findById(id);
        if (!optionalOrderDetails.isPresent()) {
            logg.info("Fetch Failed!....");
            return ResponseEntity.unprocessableEntity().build();
        }
        logg.info("Fetched!....");
        return ResponseEntity.ok(optionalOrderDetails.get());
    }

    @GetMapping
    public ResponseEntity<List<OrderDetails>> getAll(OrderDetails orderdetail3) {
        logg.info("Fetched!....");
        return ResponseEntity.ok(orderdetailrepo.findAll());
    }
}
