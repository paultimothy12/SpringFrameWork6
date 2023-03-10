package com.timothy.util.thymeleaf;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.thymeleaf.spring6.templateresolver.SpringResourceTemplateResolver;

import javax.annotation.PostConstruct;
@Slf4j
@Component
public class DecoupledLogicSetup {
    private final SpringResourceTemplateResolver templateResolver;

    public DecoupledLogicSetup(SpringResourceTemplateResolver templateResolver) {
        this.templateResolver = templateResolver;
    }

    @PostConstruct
    public void init(){
        templateResolver.setUseDecoupledLogic(true);
        log.info("decoupled enabled");
    }
}
