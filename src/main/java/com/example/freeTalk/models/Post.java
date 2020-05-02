package com.example.freeTalk.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.boot.jackson.JsonComponent;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.UUID;

public class Post {
    @Id
    private final UUID postId;

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

    public Post(UUID postId,
                @JsonProperty("username") String username,
                @JsonProperty("content") String content,
                @JsonProperty("hashtags") String[] hashtags,
                @JsonProperty("likes") int likes,
                @JsonProperty("likes") int dislikes,
                @JsonProperty("reports") int reports,
                Date createdOn) {
        this.postId = postId;
        this.username = username;
        this.content = content;
        this.hashtags = hashtags;
        this.likes = likes;
        this.dislikes = dislikes;
        this.reports = reports;
        this.createdOn = createdOn;
    }

    public UUID getPostId() {
        return postId;
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
