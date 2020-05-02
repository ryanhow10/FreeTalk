package com.example.freeTalk.models;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.NotBlank;

@Document(collection = "Hashtags")
public class Hashtag {

    @Id
    private final String hashtagId;

    @NotBlank
    private final String name;
    private final int count;

    public Hashtag(String hashtagId, String name, int count) {
        this.hashtagId = hashtagId;
        this.name = name;
        this.count = count;
    }
    public String getHashtagId() {
        return hashtagId;
    }

    public String getName() {
        return name;
    }

    public int getCount() {
        return count;
    }
}
