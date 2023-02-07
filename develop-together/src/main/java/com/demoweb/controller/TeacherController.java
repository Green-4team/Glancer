package com.demoweb.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.demoweb.dto.ClassDto;
import com.demoweb.dto.ClassTagDto;
import com.demoweb.dto.TeacherDto;
import com.demoweb.service.TeacherService;

@Controller
@RequestMapping(path = {"/class"})
public class TeacherController {
	
	@Autowired
	@Qualifier("teacherService")
	private TeacherService teacherService;
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = {"/teacher"})
	private HashMap<String, Object> showTeacherList() {
		
		List<TeacherDto> results = teacherService.findTeacher();
		
		HashMap<String, Object> TeacherList = new HashMap<>();
		TeacherList.put("results", results);
		
		return TeacherList;
	}

}
