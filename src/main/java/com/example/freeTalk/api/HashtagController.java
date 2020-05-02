package com.example.freeTalk.api;

import com.example.freeTalk.models.Hashtag;
import com.example.freeTalk.repositories.HashtagRepository;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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


}
