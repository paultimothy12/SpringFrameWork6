package com.timothy.console;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@Slf4j
@SpringBootApplication
@ComponentScan(basePackages = {"com.timothy"})
public class Main {

    public static void main(String[] args) {
        SpringApplication.run(Main.class,args);
    }
}
