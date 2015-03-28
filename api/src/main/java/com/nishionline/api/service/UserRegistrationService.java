package com.nishionline.api.service;

import com.nishionline.api.dto.RegistrationDTO;

import javax.jws.WebService;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * @author Alok
 * @since 28-03-2015
 */
@WebService
@Path("/")
@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
@Produces(MediaType.APPLICATION_JSON)
public interface UserRegistrationService {

    @POST
    @Path("register")
    public void register(RegistrationDTO registrationDTO);

}
