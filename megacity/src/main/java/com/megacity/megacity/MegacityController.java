package com.megacity.megacity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/vehicleReservation")
public class MegacityController {

    @Autowired
    private MegacityService megacityService;


    @GetMapping
    public ResponseEntity<List<Megacity>> getallreservations() {
        return new ResponseEntity<List<Megacity>>(megacityService.allReservations(), HttpStatus.OK);
    }

}
