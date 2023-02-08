package com.demoweb.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
		System.out.println(results);
		HashMap<String, Object> teacherList = new HashMap<>();
		teacherList.put("results", results);
		
		return teacherList;
	}
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = {"/teacher/teacherdetail"})
	private HashMap<String, Object> showTeacherDetail(String memberid) {
		
		TeacherDto results = teacherService.findTeacherDetail(memberid);
		
		HashMap<String, Object> teacherDetail = new HashMap<>();
		teacherDetail.put("results", results);
		
		
		return teacherDetail;
	}
	
	@CrossOrigin
	@ResponseBody
	@PostMapping(path = {"/teacherRegister"})
	private String registerTeacher(TeacherDto register) {
		
		teacherService.registerTeacher(register);
		
		return "success";
	}
	
	@CrossOrigin
	@ResponseBody
	@PostMapping(path = {"/teacherEdit"})
	private String editTeacher(TeacherDto register) {
		
		teacherService.editTeacher(register);
		
		return "success";
	}
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = {"/deleteTeacher" })
	public String deleteTeacher(int teacherno) {
		
		teacherService.deleteTeacher(teacherno);
		
		return "success";
		
	}

}
