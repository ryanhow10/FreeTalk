package com.example.freeTalk.repositories;

import com.example.freeTalk.models.Post;
import org.springframework.data.mongodb.core.mapping.MongoId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.UUID;

public interface PostRepository extends MongoRepository<Post, MongoId> {

    List<Post> findPostsByContentContains(String search);
}
