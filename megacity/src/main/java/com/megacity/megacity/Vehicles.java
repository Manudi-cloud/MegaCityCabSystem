package com.megacity.megacity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "vehicleDetails")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Vehicles {

    @Id
    private ObjectId id;

    private String registrationNumber;

    private String model;

    private String type;

    private int capacity;

    private boolean availability;

    private int pricePerKm;

    private String imageUrl;

    private Object driver;

    private String name;

    private String licenseNumber;

    private String contact;



}

