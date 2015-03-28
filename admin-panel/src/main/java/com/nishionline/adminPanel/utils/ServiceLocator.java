package com.nishionline.adminPanel.utils;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

import java.util.Map;

/**
 * @author Alok
 * @since 01-03-2015
 */
@Component("ServiceLocator")
public class ServiceLocator implements ApplicationContextAware {

    private static ApplicationContext applicationContext;

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        ServiceLocator.applicationContext = applicationContext;
    }

    @SuppressWarnings(GlobalConstants.UNCHECKED)
    public <T> T getBean(String beanName) {
        return (T) applicationContext.getBean(beanName);
    }

    public static <T> T getBean(Class<T> clazz) {
        Map<String, T> beans = ServiceLocator.applicationContext.getBeansOfType(clazz);
        if(beans.size() == 1) {
            return beans.get(clazz.getSimpleName());
        } else {
            throw new IllegalArgumentException("More than one beans or no beans of given type are available.");
        }
    }

}
