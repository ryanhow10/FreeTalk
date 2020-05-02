package com.example.freeTalk.repositories;

import com.example.freeTalk.models.Hashtag;
import org.springframework.data.mongodb.core.mapping.MongoId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface HashtagRepository extends MongoRepository<Hashtag, MongoId> {

}
