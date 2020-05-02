package com.example.freeTalk.api;

import com.example.freeTalk.models.Post;
import com.example.freeTalk.repositories.PostRepository;
import org.springframework.data.domain.Sort;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;

@RequestMapping("posts")
@RestController
public class PostController {

    private final PostRepository postRepository;

    public PostController(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    //GET /posts
    @GetMapping
    public List<Post> getPosts(@RequestParam(required = false) String search){
        if(search == null || search.length() == 0){
            return this.postRepository.findAll(Sort.by(Sort.Direction.DESC, "createdOn"));
        } else {
            return this.postRepository.findPostsByContentContains(search);
        }
    }

    //POST /posts
    @PostMapping
    public void addPost(@Valid @NonNull @RequestBody Post post) {
        this.postRepository.insert(new Post(post.getUsername(), post.getContent(), post.getHashtags(), 0, 0, 0, new Date()));
    }

}
