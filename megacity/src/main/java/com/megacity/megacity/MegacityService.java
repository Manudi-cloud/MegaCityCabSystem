package com.megacity.megacity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MegacityService {

    @Autowired
    private MegacityRepository megacityRepository;


    public List<Megacity> allReservations() {
        return megacityRepository.findAll();
    }
}