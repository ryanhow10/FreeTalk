package com.example.freeTalk.api;
import com.example.freeTalk.models.Post;
import com.example.freeTalk.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("posts")
@RestController
public class PostController {

    private final PostRepository postRepository;

    @Autowired
    public PostController(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @GetMapping
    public List<Post> getPosts(@RequestParam(required = false) String search){
        if(search == null || search.length() == 0){
            return this.postRepository.findAll(Sort.by(Sort.Direction.DESC, "createdOn"));
        } else {
            return this.postRepository.findPostsByContentContainsOrderByCreatedOnDesc(search);
        }
    }

    @GetMapping(path = "/hashtags/{hashtag}")
    public List<Post> getPostsByHashtag(@PathVariable("hashtag") String hashtag) {
        return this.postRepository.findPostsByHashtagsContainsOrderByCreatedOnDesc(hashtag);
    }

    @PostMapping
    public void addPost(@Valid @NonNull @RequestBody Post post) {
        this.postRepository.insert(new Post(UUID.randomUUID().toString(), post.getUsername(), post.getContent(), post.getHashtags(), 0, 0, 0, new Date()));
    }

    @PutMapping(path = "{postId}")
    public void updatePost(@PathVariable("postId") String postId, @Valid @NonNull @RequestBody Post newPost){
        Post post = this.postRepository.findFirstByPostId(postId);
        post.setLikes(newPost.getLikes());
        post.setDislikes(newPost.getDislikes());
        post.setReports(newPost.getReports());
        this.postRepository.save(post);
    }

    @DeleteMapping(path = "/{postId}")
    public void deletePost(@PathVariable("postId") String postId) {
        this.postRepository.deletePostByPostId(postId);
    }
}
