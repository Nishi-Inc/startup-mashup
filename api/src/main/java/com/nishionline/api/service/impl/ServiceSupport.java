package com.nishionline.api.service.impl;

import com.nishionline.api.manager.RegistrationManager;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @author Alok
 * @since 28-03-2015
 */
public abstract class ServiceSupport {

    @Autowired
    protected RegistrationManager registrationManager;

}
