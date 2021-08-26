package com.example.Hello.login;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class User {

    @RequestMapping("/")
    public String login(){
        return "login";
    }
}
