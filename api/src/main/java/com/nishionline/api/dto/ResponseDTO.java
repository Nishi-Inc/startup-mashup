package com.nishionline.api.dto;

import com.nishionline.api.model.PersistentObject;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * @author Alok
 * @since 28-03-2015
 */
@Getter
@Setter
public abstract class ResponseDTO<T extends PersistentObject> {

    private List<T> searchResults;

}
