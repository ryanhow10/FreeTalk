package com.example.freeTalk.api;
import com.example.freeTalk.models.Post;
import com.example.freeTalk.repositories.PostRepository;
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

    //GET /posts/hashtags/:hashtag
    @GetMapping(path = "/hashtags/{hashtag}")
    public List<Post> getPostsByHashtag(@PathVariable("hashtag") String hashtag) {
        return this.postRepository.findPostsByHashtagsContains(hashtag);
    }

    //POST /posts
    @PostMapping
    public void addPost(@Valid @NonNull @RequestBody Post post) {
        this.postRepository.insert(new Post(UUID.randomUUID().toString(), post.getUsername(), post.getContent(), post.getHashtags(), 0, 0, 0, new Date()));
    }

    //PUT /posts/:postId
    @PutMapping(path = "{postId}")
    public void updatePost(@PathVariable("postId") String postId, @Valid @NonNull @RequestBody Post newPost){
        Post post = this.postRepository.findFirstByPostId(postId);
        post = new Post(post.getPostId(), post.getUsername(), post.getContent(), post.getHashtags(), newPost.getLikes(), newPost.getDislikes(), newPost.getDislikes(), post.getCreatedOn());
        this.postRepository.save(post);
    }

    @DeleteMapping(path = "/{postId}")
    public void deletePost(@PathVariable("postId") String postId) {
        this.postRepository.deletePostByPostId(postId);
    }
}
