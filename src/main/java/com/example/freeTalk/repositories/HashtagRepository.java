package com.example.freeTalk.repositories;
import com.example.freeTalk.models.Hashtag;
import org.springframework.data.mongodb.core.mapping.MongoId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface HashtagRepository extends MongoRepository<Hashtag, MongoId> {

    Hashtag findHashtagByName(String hashtag);

    List<Hashtag> findAllByOrderByCountDesc();
}




