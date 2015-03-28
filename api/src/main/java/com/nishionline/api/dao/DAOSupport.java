package com.nishionline.api.dao;

import com.mongodb.*;
import com.nishionline.api.model.PersistentObject;
import com.nishionline.api.utils.GsonUtils;
import com.nishionline.core.utils.ApplicationConfig;

import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;

import static java.lang.String.format;

/**
 * @author Alok
 * @since 28-03-2015
 */
public abstract class DAOSupport {
    private static final String TAG = DAOSupport.class.getSimpleName();
    private MongoClient mongoClient;

    private ApplicationConfig applicationConfig;
    private DB db;

    public void init() {
        try {
            this.mongoClient = new MongoClient(this.applicationConfig.getDatabaseHost(),
                    this.applicationConfig.getDatabasePort());
        } catch (UnknownHostException e) {
            e.printStackTrace();
            System.err.println(format("%s: %s %s:%d.", TAG, "Mongo DB is not found at",
                    this.applicationConfig.getDatabaseHost(), this.applicationConfig.getDatabasePort()));
        }
    }

    private DB getDb() {
        if (this.db == null) {
            this.db = this.mongoClient.getDB(this.applicationConfig.getDatabaseName());
        }
        return db;
    }

    protected <T extends PersistentObject> DBCollection getCollection(Class<T> tClass) {
        return this.getDb().getCollection(tClass.getSimpleName());
    }

    /**
     * TODO test it properly
     * @param tClass      extends {@link com.nishionline.api.model.PersistentObject}
     * @param dbCursor    DBCursor from mongo java driver
     * @param <T>         extends PersistentObject
     * @return List of converted objects
     */
    protected <T extends PersistentObject> List<T> fromDbCursor(Class<T> tClass, DBCursor dbCursor) {
        List<T> searchResults = new ArrayList<>();
        if(dbCursor != null) {
            dbCursor.forEach(dbObject->{
                String json = GsonUtils.gson.toJson(dbObject);
                T t = GsonUtils.gson.fromJson(json, tClass);
                searchResults.add(t);
            });
        }
        return searchResults;
    }

    public DBObject convertToDBObject(Object object) {
        return this.convert(object, BasicDBObject.class);
    }

    public <T> T convert(Object source, Class<T> toClass) {
        return GsonUtils.gson.fromJson(GsonUtils.gson.toJson(source), toClass);
    }

}
