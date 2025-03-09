package com.megacity.megacity.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "customers")
public class Customer {

    @Id
    private String id;
    private String name;
    private String address;
    private String nic;
    private String phoneNumber;
}