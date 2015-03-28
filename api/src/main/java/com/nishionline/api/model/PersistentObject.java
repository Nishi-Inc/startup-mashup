package com.nishionline.api.model;

import java.io.Serializable;
import java.util.Date;

/**
 * @author Alok
 * @since 28-03-2015
 */
public abstract class PersistentObject implements Serializable, Comparable<PersistentObject> {

    private MongoObjectId _id;

    private Date lastUpdatedOn;
    private Date createdOn;

    public PersistentObject() {
        this.createdOn = new Date();
    }

    public boolean isTransient() {
        return this._id==null;
    }

    @Override
    public boolean equals(Object object) {
        return object instanceof PersistentObject && ((PersistentObject) object)._id.equals(this._id);
    }

    @Override
    public int hashCode() {
        return this._id.hashCode();
    }

    @Override
    public int compareTo(PersistentObject persistentObject) {
        if(persistentObject == null) {
            return 1;
        }

        if(this.createdOn != null) {
            if (persistentObject.createdOn != null) {
                return this.createdOn.compareTo(persistentObject.createdOn);
            } else {
                return -1;
            }
        } else {
            return persistentObject.createdOn != null ? 1 : 0;
        }
    }
}
