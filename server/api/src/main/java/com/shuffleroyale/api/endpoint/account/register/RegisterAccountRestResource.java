package com.shuffleroyale.api.endpoint.account.register;

import com.shuffleroyale.api.Cookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
class RegisterAccountRestResource {

    @PostMapping("/account")
    ResponseEntity<?> authenticateAccount(@CookieValue(Cookie.TOKEN) String token) {
        return ResponseEntity.ok().build();
    }

}
