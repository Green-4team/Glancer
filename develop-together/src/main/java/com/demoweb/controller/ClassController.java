package com.demoweb.controller;

import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.demoweb.dto.ClassDto;
import com.demoweb.service.ClassService;

@Controller
@RequestMapping(path = {"/class"})
public class ClassController {

	@Autowired
	@Qualifier("classService")
	private ClassService classService;
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = {"/class"})
	private HashMap<String, Object> showClassList() {
		
		List<ClassDto> results = classService.findClass();
		
		HashMap<String, Object> classList = new HashMap<>();
		classList.put("results", results);
		
		return classList;
	}
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = {"/class/classdetail"})
	private HashMap<String, Object> showClassDetail(int classno) {
		
		ClassDto results = classService.findClassDetail(classno);
		
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy년 MM월 dd일");
		
		HashMap<String, Object> classDetail = new HashMap<>();
		classDetail.put("results", results);
		classDetail.put("classno", classno);
		return classDetail;
	}
}
