package com.nishionline.api.service.impl;

import com.nishionline.api.dto.RegistrationDTO;
import com.nishionline.api.dto.UserResponseDTO;
import com.nishionline.api.service.UserService;

/**
 * @author Alok
 * @since 28-03-2015
 */
public class UserServiceImpl extends ServiceSupport implements UserService {


    @Override
    public void register(RegistrationDTO registrationDTO) {
        this.registrationManager.save(registrationDTO);
    }

    @Override
    public UserResponseDTO getUsers() {
        return this.registrationManager.search();
    }
}
