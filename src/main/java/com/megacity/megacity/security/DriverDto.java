package com.megacity.megacity.security;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "drivers")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class DriverDto {

    private ObjectId driver_Id;
    private String driver_Name;
    private int age;
    private String gender;
    private String address;
    private String contact_number;
    private String email;
    private String license_number;
    private String licenseExpiry;
    private String insuranceNumber;
    private String insuranceProvide;
    private String insuranceExpiry;
    private String vehicle_registrationNumber;
    private String vehicle_model;
    private String vehicleType;
}


