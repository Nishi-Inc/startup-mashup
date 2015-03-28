package com.nishionline.api.utils;

import com.google.gson.*;
import com.nishionline.api.model.MongoObjectId;
import org.bson.types.ObjectId;

import java.lang.reflect.Modifier;
import java.lang.reflect.Type;

/**
 * @author Alok
 * @since 28-03-2015
 */
public class GsonUtils {
    public static Gson gson;

    /**
     * To be called only from the {@link AppInitializer}.
     */
    public static void init() {
        GsonBuilder gsonBuilder = new GsonBuilder()
                .setFieldNamingPolicy(FieldNamingPolicy.IDENTITY)
                .setLongSerializationPolicy(LongSerializationPolicy.DEFAULT)
                .excludeFieldsWithModifiers(Modifier.TRANSIENT, Modifier.STATIC);

        gsonBuilder.registerTypeAdapter(Class.class, new ClassSerializerDeserializer());
        gsonBuilder.registerTypeAdapter(ObjectId.class, new MongoObjectIdSerializer());

        GsonUtils.gson = gsonBuilder.create();
    }

    private static class MongoObjectIdSerializer implements JsonSerializer<MongoObjectId> {

        @Override
        public JsonElement serialize(MongoObjectId src, Type typeOfSrc, JsonSerializationContext context) {
            JsonObject jsonObject = new JsonObject();
            jsonObject.add("$oid", new JsonPrimitive(src.toString()));
            return jsonObject;
        }
    }

    private static class ClassSerializerDeserializer implements JsonSerializer<Class>, JsonDeserializer<Class> {
        @Override
        public Class deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context)
                throws JsonParseException {
            try {
                return Class.forName(json.getAsString());
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
            return null;
        }

        @Override
        public JsonElement serialize(Class src, Type typeOfSrc, JsonSerializationContext context) {
            return new JsonPrimitive(src.getCanonicalName());
        }
    }

}
