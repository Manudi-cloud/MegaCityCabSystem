package com.megacity.megacity.controller;

import com.megacity.megacity.entity.Customer;
import com.megacity.megacity.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/login")
    public ResponseEntity<?> loginCustomer(@RequestBody Customer loginRequest) {
        Customer customer = customerRepository.findByUsername(loginRequest.getUsername())
                .orElse(null);

        if (customer == null) {
            return ResponseEntity.status(401).body("User not found");
        }

        if (!passwordEncoder.matches(loginRequest.getPassword(), customer.getPassword())) {
            return ResponseEntity.status(401).body("Invalid password");
        }

        return ResponseEntity.ok("Login successful");
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerCustomer(@RequestBody Customer customer) {
        if (customerRepository.findByUsername(customer.getUsername()).isPresent()) {
            return ResponseEntity.status(400).body("Username already exists");
        }
        customer.setPassword(passwordEncoder.encode(customer.getPassword()));
        customerRepository.save(customer);
        return ResponseEntity.ok("Customer registered successfully");
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> getCustomer(@PathVariable String id) {
        return customerRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}