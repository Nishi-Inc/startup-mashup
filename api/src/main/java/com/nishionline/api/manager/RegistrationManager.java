package com.nishionline.api.manager;

import com.nishionline.api.dao.UserDAO;
import com.nishionline.api.dto.RegistrationDTO;
import com.nishionline.api.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Alok
 * @since 28-03-2015
 */
@Service
public class RegistrationManager {

    @Autowired
    private UserDAO userDAO;

    public void save(RegistrationDTO registrationDTO) {
        User user = new User(registrationDTO);
        this.userDAO.save(user);
    }

}
