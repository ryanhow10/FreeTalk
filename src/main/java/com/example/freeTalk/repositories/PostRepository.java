package com.example.freeTalk.repositories;
import com.example.freeTalk.models.Post;
import org.springframework.data.mongodb.core.mapping.MongoId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public interface PostRepository extends MongoRepository<Post, MongoId> {

    List<Post> findPostsByContentContainsOrderByCreatedOnDesc(String search);

    Post findFirstByPostId(String postId);

    List<Post> findPostsByHashtagsContainsOrderByCreatedOnDesc(String hashtag);

    void deletePostByPostId(String postId);
}
