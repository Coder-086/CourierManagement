package com.example.Hello.controller;

import com.example.Hello.dto.UserDTO;
import com.example.Hello.model.User;
import com.example.Hello.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    UserRepo userRepo;

    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public void singup(@RequestBody UserDTO userparam) throws InterruptedException{
        User user = new User();

        System.out.println(">>>>>>>>>>>" + userparam.getUsername());
        user.setUsername(userparam.getUsername());
        user.setEmail(userparam.getEmail());
        user.setPassword(userparam.getPassword());

        userRepo.save(user);
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public void login(@RequestBody UserDTO user) throws  InterruptedException{
        System.out.println(">>>>>>>>>>>> " + user.getUsername());
        System.out.println("I am in Login");
    }
}
