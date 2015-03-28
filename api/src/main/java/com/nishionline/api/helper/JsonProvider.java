package com.nishionline.api.helper;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.stream.JsonReader;
import com.nishionline.api.dto.ResponseDTO;
import com.nishionline.api.utils.GsonUtils;
import lombok.Getter;
import lombok.Setter;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.ext.MessageBodyReader;
import javax.ws.rs.ext.MessageBodyWriter;
import javax.ws.rs.ext.Provider;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.lang.annotation.Annotation;
import java.lang.reflect.Type;
import java.util.Collection;
import java.util.Iterator;

/**
 * @author Alok
 * @since 01-07-2014
 * @version 0.1.0
 */
@Provider
public class JsonProvider implements MessageBodyReader<Object>, MessageBodyWriter<Object> {

    @Getter @Setter
    private Collection<String> fields;

    @Override
    public boolean isReadable(Class<?> aClass, Type type, Annotation[] annotations, MediaType mediaType) {
        return MediaType.APPLICATION_JSON_TYPE.equals(mediaType);
    }

    @Override
    public Object readFrom(Class<Object> objectClass, Type type, Annotation[] annotations, MediaType mediaType,
                           MultivaluedMap<String, String> stringStringMultivaluedMap, InputStream inputStream) throws IOException, WebApplicationException {
        return GsonUtils.gson.fromJson(new JsonReader(new InputStreamReader(inputStream)), type);
    }

    @Override
    public boolean isWriteable(Class<?> aClass, Type type, Annotation[] annotations, MediaType mediaType) {
        return mediaType.equals(MediaType.APPLICATION_JSON_TYPE);
    }

    @Override
    public long getSize(Object o, Class<?> aClass, Type type, Annotation[] annotations, MediaType mediaType) {
        return 1;
    }

    @Override
    public void writeTo(Object o, Class<?> aClass, Type type, Annotation[] annotations, MediaType mediaType,
                        MultivaluedMap<String, Object> stringObjectMultivaluedMap, OutputStream outputStream) throws IOException, WebApplicationException {
        if(o == null) {
            return;
        }

        if (this.fields == null) {
            outputStream.write(GsonUtils.gson.toJson(o).getBytes());
        } else {
            JsonObject object = GsonUtils.gson.toJsonTree(o, type).getAsJsonObject();
            JsonObject jsonObject = new JsonObject();

            if (ResponseDTO.class.isAssignableFrom(aClass)) {
                JsonArray searchResults = new JsonArray();
                JsonArray searchResultsArray = new JsonArray();
                jsonObject = object;
                searchResults.addAll(object.getAsJsonArray("searchResults"));
                Iterator<JsonElement> iterator = searchResults.iterator();
                jsonObject.remove("searchResults");
                while(iterator.hasNext()) {
                    JsonObject searchResult = new JsonObject();
                    for (String attribute : this.fields) {
                        searchResult.add(attribute, object.get(attribute));
                    }
                    searchResultsArray.add(searchResult);
                }
                jsonObject.add("searchResults", searchResultsArray);
            } else {
                for (String attribute : this.fields) {
                    jsonObject.add(attribute, object.get(attribute));
                }
            }

            outputStream.write(jsonObject.toString().getBytes());
        }
    }
}
