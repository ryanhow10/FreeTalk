package com.example.freeTalk.models;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.UUID;

@Document(collection = "Posts")
public class Post {

    @Id
    private String postId;

    @NotBlank
    private String username;

    @NotBlank
    private String content;

    @NotNull
    private String[] hashtags;

    private int likes;
    private int dislikes;
    private int reports;
    private Date createdOn;

    public Post(String postId, String username, String content, String[] hashtags, int likes, int dislikes, int reports, Date createdOn) {
        this.postId = postId;
        this.username = username;
        this.content = content;
        this.hashtags = hashtags;
        this.likes = likes;
        this.dislikes = dislikes;
        this.reports = reports;
        this.createdOn = createdOn;
    }

    public String getPostId() {
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

    public void setPostId(String postId) {
        this.postId = postId;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setHashtags(String[] hashtags) {
        this.hashtags = hashtags;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public void setDislikes(int dislikes) {
        this.dislikes = dislikes;
    }

    public void setReports(int reports) {
        this.reports = reports;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }
}
