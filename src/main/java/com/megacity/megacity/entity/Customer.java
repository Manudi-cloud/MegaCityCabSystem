package com.megacity.megacity.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "customers")
public class Customer {

    // Getters and Setters
    @Setter
    @Getter
    @Id
    private String id;
    private String name;
    private String address;
    private String nic;
    private String phoneNumber;
    @Setter
    @Getter
    private String username;  // ✅ Added username
    @Setter
    @Getter
    private String password;  // ✅ Added password

}