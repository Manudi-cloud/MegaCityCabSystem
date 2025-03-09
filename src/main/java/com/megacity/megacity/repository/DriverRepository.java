package com.megacity.megacity.repository;

import com.megacity.megacity.entity.Driver;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DriverRepository extends MongoRepository<Driver, String> {
}

