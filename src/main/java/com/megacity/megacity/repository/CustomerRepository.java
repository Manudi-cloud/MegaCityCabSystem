package com.megacity.megacity.repository;

import com.megacity.megacity.entity.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CustomerRepository extends MongoRepository<Customer, String> {
    Optional<Customer> findByNic(String nic);
    Optional<Customer> findByUsername(String username);  // 🔹 Add this
}
