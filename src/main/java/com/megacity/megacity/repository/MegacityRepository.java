package com.megacity.megacity.repository;

import com.megacity.megacity.entity.Megacity;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MegacityRepository extends MongoRepository<Megacity, ObjectId> {
}