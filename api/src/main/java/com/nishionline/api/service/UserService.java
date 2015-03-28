package com.nishionline.api.service;

import com.nishionline.api.dto.RegistrationDTO;
import com.nishionline.api.dto.UserResponseDTO;

import javax.jws.WebService;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

/**
 * @author Alok
 * @since 28-03-2015
 */
@WebService
@Path("/user")
@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
@Produces(MediaType.APPLICATION_JSON)
public interface UserService {

    @POST
    @Path("/register")
    public void register(RegistrationDTO registrationDTO);

    @GET
    @Path("/")
    public UserResponseDTO getUsers();


}
