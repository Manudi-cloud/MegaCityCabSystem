package com.megacity.megacity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    public List<Vehicles> allVehicleDetails() {
        return vehicleRepository.findAll();
    }
}