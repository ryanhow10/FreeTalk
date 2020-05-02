package com.example.freeTalk.models;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;

public class Hashtag {

    @NotBlank
    private final String name;

    @NotBlank
    private final int count;

    public Hashtag(@JsonProperty("name") String name,
                   @JsonProperty("count") int count) {
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
