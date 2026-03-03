package com.cms.controller;

import com.cms.entity.Student;
import com.cms.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/students")
@RequiredArgsConstructor
public class StudentController {

    private final StudentRepository repo;

    @GetMapping
    public List<Student> getAll(){
        return repo.findAll();
    }

    @PostMapping
    public Student save(@RequestBody Student student){
        return repo.save(student);
    }
}
