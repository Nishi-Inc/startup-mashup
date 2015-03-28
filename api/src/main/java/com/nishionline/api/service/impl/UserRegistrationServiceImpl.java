package com.nishionline.api.service.impl;

import com.nishionline.api.dto.RegistrationDTO;
import com.nishionline.api.service.UserRegistrationService;

/**
 * @author Alok
 * @since 28-03-2015
 */
public class UserRegistrationServiceImpl extends ServiceSupport implements UserRegistrationService {


    @Override
    public void register(RegistrationDTO registrationDTO) {
        this.registrationManager.save(registrationDTO);
    }
}
