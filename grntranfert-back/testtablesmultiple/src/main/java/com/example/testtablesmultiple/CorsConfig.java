package com.example.testtablesmultiple;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// Ce fichier permet de ne pas activer le CORS car sinon la communication entre le port 8080 (api) et 3000(react) ne pourrais pas ce faire
@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {

            @Override
            public void addCorsMappings(CorsRegistry registry){
                registry.addMapping("/**")
                        .allowedMethods("GET","POST","PUT","DELETE")
                        .allowedHeaders("*")
                        .allowedOrigins("http://localhost:3000");
            }

        };
    }
}
