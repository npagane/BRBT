/*
 * Copyright (C) 2014. Geoffrey Chandler.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package io.advantageous.ddp.subscription.message;

import java.util.Arrays;
import java.util.HashMap;

/**
 * Message indicating that a document has been remotely changed in a subscription.
 *
 * @author geoffc@gmail.com
 * @since 1/17/14 at 6:17 PM.
 */

public class ChangedMessage {

    private String collection;

    private String id;

    private HashMap<String, Object> fields;

    private String[] cleared;

    public String getCollection() {
        return collection;
    }

    public void setCollection(String collection) {
        this.collection = collection;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public HashMap<String, Object> getFields() {
        return fields;
    }

    public void setFields(HashMap<String, Object> fields) {
        this.fields = fields;
    }

    public String[] getCleared() {
        return cleared;
    }

    public void setCleared(String[] cleared) {
        this.cleared = cleared;
    }

    @Override
    public String toString() {
        return collection + ".update(" +
                "{_id:'" + id + "\'}" +
                ", {$set: " + fields +
                ", $cleared:{" + Arrays.toString(cleared) +
                "}})";
    }
}
