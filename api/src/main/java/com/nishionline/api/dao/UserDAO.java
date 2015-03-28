package com.nishionline.api.dao;

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

}
