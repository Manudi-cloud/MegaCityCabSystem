package com.megacity.megacity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;


    @GetMapping
    public ResponseEntity<List<Vehicles>> getallVehicleDetails() {
        return new ResponseEntity<List<Vehicles>>(vehicleService.allVehicleDetails(), HttpStatus.OK);
    }

}

