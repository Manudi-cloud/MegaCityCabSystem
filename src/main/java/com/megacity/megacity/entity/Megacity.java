package com.megacity.megacity.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "reservations")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Megacity {

  @Id
  private ObjectId id;

  private String customerName;

  private String address;

  private String telephone;

  private String destination;

}

