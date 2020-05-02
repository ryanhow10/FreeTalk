package com.example.freeTalk.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;

@Document(collection = "Hashtags")
public class Hashtag {

    @NotBlank
    private final String name;

    @NotBlank
    private final int count;

    public Hashtag(String name, int count) {
        this.name = name;
        this.count = count;
    }

    public String getName() {
        return name;
    }

    public int getCount() {
        return count;
    }
}
