package com.example.freeTalk.api;

import com.example.freeTalk.models.Hashtag;
import com.example.freeTalk.repositories.HashtagRepository;
import org.springframework.data.domain.Sort;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("hashtags")
@RestController
public class HashtagController {

    private final HashtagRepository hashtagRepository;

    public HashtagController(HashtagRepository hashtagRepository) {
        this.hashtagRepository = hashtagRepository;
    }

    //GET /hashtags
    @GetMapping
    public List<Hashtag> getHashtags() {
        return this.hashtagRepository.findAll(Sort.by(Sort.Direction.DESC, "count"));
    }

    //POST /hashtags
    @PostMapping
    public void addHashtag(@Valid @NonNull @RequestBody Hashtag newHashtag) {
        Hashtag hashtag = this.hashtagRepository.findHashtagByName(newHashtag.getName());
        if(hashtag == null) {
            this.hashtagRepository.insert(new Hashtag(UUID.randomUUID().toString(), newHashtag.getName(), 1));
        } else{
            hashtag = new Hashtag(hashtag.getHashtagId(), hashtag.getName(), newHashtag.getCount());
            this.hashtagRepository.save(hashtag);
        }
    }
}
