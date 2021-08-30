package com.example.Hello.controller;

import com.example.Hello.dto.UserDTO;
import com.example.Hello.model.User;
import com.example.Hello.repository.UserRepo;
import com.example.Hello.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    UserRepo userRepo;

    @Autowired
    UserService userService;

    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public ResponseEntity signup(@RequestBody UserDTO userparam) throws InterruptedException{
        User user = new User();
        user.setUsername(userparam.getUsername());
        user.setEmail(userparam.getEmail());
        user.setPassword(userparam.getPassword());

        if (!userService.isAccountExist(userparam)) {
            userRepo.save(user);
            return new ResponseEntity<>(HttpStatus.OK);
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User Already Registered!!!");

    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity login(@RequestBody UserDTO user) throws  InterruptedException{
        System.out.println("Am i coming here");
        if (userService.isValidUser(user)) {
            System.out.println("I am in valid user");
            return new ResponseEntity<>(HttpStatus.OK);
        }

        System.out.println("I am not in validuser");
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
