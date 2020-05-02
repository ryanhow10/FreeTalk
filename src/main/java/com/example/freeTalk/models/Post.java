package com.example.freeTalk.models;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Document(collection = "Posts")
public class Post {

    @NotBlank
    private final String username;

    @NotBlank
    private final String content;

    @NotNull
    private final String[] hashtags;

    private final int likes;
    private final int dislikes;
    private final int reports;
    private final Date createdOn;

    public Post(String username, String content, String[] hashtags, int likes, int dislikes, int reports, Date createdOn) {
        this.username = username;
        this.content = content;
        this.hashtags = hashtags;
        this.likes = likes;
        this.dislikes = dislikes;
        this.reports = reports;
        this.createdOn = createdOn;
    }

    public String getUsername() {
        return username;
    }

    public String getContent() {
        return content;
    }

    public String[] getHashtags() {
        return hashtags;
    }

    public int getLikes() {
        return likes;
    }

    public int getDislikes() {
        return dislikes;
    }

    public int getReports() {
        return reports;
    }

    public Date getCreatedOn() {
        return createdOn;
    }
}
