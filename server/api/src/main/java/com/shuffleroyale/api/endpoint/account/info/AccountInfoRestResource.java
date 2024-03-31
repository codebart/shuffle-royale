package com.shuffleroyale.api.endpoint.account.info;

import com.shuffleroyale.api.Cookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
class AccountInfoRestResource {

    @GetMapping("/account")
    ResponseEntity<AccountInfoResponse> accountInfo(@CookieValue(Cookie.TOKEN) String token) {
        return ResponseEntity.ok().build();
    }

}
