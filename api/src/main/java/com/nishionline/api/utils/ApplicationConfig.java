package com.nishionline.api.utils;

import org.springframework.stereotype.Component;

/**
 * @author Alok
 * @since 28-03-2015
 */
@Component("ApplicationConfig")
public class ApplicationConfig {

    public static final boolean DEV_MODE = true;

    private final String databaseName = "startupMashup";

    private final String databaseHost = "localhost";

    private final int databasePort = 27017;

    public String getDatabaseName() {
        return databaseName;
    }

    public String getDatabaseHost() {
        return databaseHost;
    }

    public int getDatabasePort() {
        return databasePort;
    }
}
