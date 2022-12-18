package com.timothy.databasedemo.jpahibernate.JPADEMO;

import com.timothy.databasedemo.jpahibernate.Course;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public class JPAREPOSITORY {
    @PersistenceContext //@Autowired
    private EntityManager entityManager;

    public void insert(Course course) {
        entityManager.merge(course);
    }

    public Course selectById(long id){
        return entityManager.find(Course.class,id);
    }

    public void deleteById(long id){
       Course course = entityManager.find(Course.class,id);
       entityManager.remove(course);
    }

}
