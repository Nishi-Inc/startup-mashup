package com.nishionline.api.dao;

import com.mongodb.DBCursor;
import com.nishionline.api.dto.UserResponseDTO;
import com.nishionline.api.model.User;
import org.springframework.stereotype.Repository;

/**
 * @author Alok
 * @since 28-03-2015
 */
@Repository("UserDAO")
public class UserDAO extends DAOSupport {

    public void save(User user) {
        this.getCollection(User.class).save(this.convertToDBObject(user));
    }

    public UserResponseDTO getAll() {
        UserResponseDTO userResponseDTO = new UserResponseDTO();
        DBCursor dbCursor = this.getCollection(User.class).find();
        userResponseDTO.setSearchResults(this.fromDbCursor(User.class, dbCursor));
        return userResponseDTO;
    }
}
