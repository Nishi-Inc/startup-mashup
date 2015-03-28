package com.nishionline.api.model;

import com.nishionline.api.dto.RegistrationDTO;
import lombok.Getter;
import lombok.Setter;

/**
 * @author Alok
 * @since 28-03-2015
 */
@Getter
@Setter
public class User extends PersistentObject {

    private String longitude;
    private String latitude;
    private String deviceId;
    private String name;

    public User() {
        super();
    }

    public User(RegistrationDTO registrationDTO) {
        this();
        this.name = registrationDTO.getUserName();
        this.deviceId = registrationDTO.getDeviceId();
        this.latitude = registrationDTO.getLatitude();
        this.longitude = registrationDTO.getLongitude();
    }

}
