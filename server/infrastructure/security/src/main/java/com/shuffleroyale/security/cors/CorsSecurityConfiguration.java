package com.shuffleroyale.security.cors;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@EnableWebSecurity
@Configuration
class CorsSecurityConfiguration {

    @ConfigurationProperties(prefix = "spring.security.cors")
    record CorsConfigurationProperties(List<String> origins) {
    }

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http, CorsConfigurationSource corsConfigurationSource) throws Exception {
        return http.cors(configurer -> configurer.configurationSource(corsConfigurationSource))
                .authorizeHttpRequests(registry -> registry.anyRequest().permitAll())
                .csrf(AbstractHttpConfigurer::disable)
                .build();
    }

    @Bean
    CorsConfiguration corsConfiguration(CorsConfigurationProperties properties) {
        var configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(properties.origins());
        configuration.applyPermitDefaultValues();
        configuration.addAllowedMethod(HttpMethod.OPTIONS);
        configuration.setAllowCredentials(true);
        return configuration;
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource(CorsConfiguration corsConfiguration) {
        var source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration);
        return source;
    }

}
