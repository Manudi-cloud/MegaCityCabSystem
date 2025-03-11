package com.megacity.megacity.service;

import com.megacity.megacity.entity.Customer;
import com.megacity.megacity.repository.CustomerRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

    @Service
    public class CustomUserDetailsService implements UserDetailsService {

        private final CustomerRepository customerRepository;

        public CustomUserDetailsService(CustomerRepository customerRepository) {
            this.customerRepository = customerRepository;
        }

        @Override
        public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
            Customer customer = customerRepository.findByUsername(username)
                    .orElseThrow(() -> new UsernameNotFoundException("User not found"));

            return new User(customer.getUsername(), customer.getPassword(), new ArrayList<>());
        }
    }


