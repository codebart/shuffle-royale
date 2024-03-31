package com.shuffleroyale.api.endpoint.account.authenticate;

import com.shuffleroyale.api.Cookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
class AuthenticateAccountRestResource {

    @PostMapping("/account/authentication")
    ResponseEntity<?> authenticateAccount(@CookieValue(Cookie.TOKEN) String token) {
        return ResponseEntity.ok().build();
    }

}
