package com.megacity.megacity;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MegacityRepository extends MongoRepository<Megacity, ObjectId> {
}