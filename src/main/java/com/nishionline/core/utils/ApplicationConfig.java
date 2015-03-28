package com.nishionline.core.utils;

import lombok.Getter;

/**
 * @author Alok
 * @since 28-03-2015
 */
public class ApplicationConfig {

    private static final boolean DEV_MODE = true;

    @Getter
    private final String databaseName = "startupMashup";

    @Getter
    private final String databaseHost = "localhost";

    @Getter
    private final int databasePort = 27017;
}
