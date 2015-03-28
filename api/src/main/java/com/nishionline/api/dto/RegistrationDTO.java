package com.nishionline.api.dto;

import lombok.Getter;
import lombok.Setter;

/**
 * @author Alok
 * @since 28-03-2015
 */
@Getter
@Setter
public class RegistrationDTO {

    private String userName;
    private String latitude;
    private String longitude;
    private String deviceId;
}
