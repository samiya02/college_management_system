package com.cms.controller;

import com.cms.entity.Course;
import com.cms.repository.CourseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/courses")
@RequiredArgsConstructor
public class CourseController {

    private final CourseRepository repo;

    @GetMapping
    public List<Course> getAll(){
        return repo.findAll();
    }

    @PostMapping
    public Course save(@RequestBody Course course){
        return repo.save(course);
    }
}
