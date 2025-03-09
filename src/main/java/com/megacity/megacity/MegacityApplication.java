package com.megacity.megacity;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories(basePackages = "com.megacity.megacity.repository")  // Ensure this line is present
public class MegacityApplication {
	public static void main(String[] args) {
		SpringApplication.run(MegacityApplication.class, args);
	}
}

