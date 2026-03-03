package com.cms.controller;

import com.cms.entity.User;
import com.cms.repository.UserRepository;
import com.cms.config.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {

        if(userRepository.findByEmail(user.getEmail()).isPresent()){
            return ResponseEntity.badRequest()
                    .body("User already registered.");
        }

        userRepository.save(user);
        return ResponseEntity.ok("User Registered Successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user){

        Optional<User> existing = userRepository.findByEmail(user.getEmail());

        if(existing.isPresent() &&
           existing.get().getPassword().equals(user.getPassword())){

            String token = jwtUtil.generateToken(user.getEmail());
            return ResponseEntity.ok(token);
        }

        return ResponseEntity.status(401)
                .body("Invalid Credentials");
    }
}
