package com.nishionline.api.utils;

import com.nishionline.api.dao.DAOSupport;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @author Alok
 * @since 02-03-2015
 */
@Component
public class ApplicationInitializer implements InitializingBean {
    @Autowired
    private DAOSupport daoSupport;

    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println("Initializing application.");
        try {
            GsonUtils.init();
            this.daoSupport.init();
            System.out.println("Application initialized successfully.");
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Application could not be initialized properly because of the previous errors.");
        }
    }
}
