package com.demoweb.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.demoweb.common.Util;
import com.demoweb.dto.ApplicationDto;
import com.demoweb.dto.BoardAttachDto;
import com.demoweb.dto.BoardDto;
import com.demoweb.dto.ClassDto;
import com.demoweb.dto.ClassTagDto;
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
		
		for (ClassDto result : results) {
			List<ClassTagDto> tags = classService.findClassTag(result.getClassno());
			System.out.println(tags);
			result.setTags(tags);
		}
		
		HashMap<String, Object> classList = new HashMap<>();
		classList.put("results", results);
		
		return classList;
	}
	
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = {"/class/classdetail"})
	private HashMap<String, Object> showClassDetail(int classno) {
		
		ClassDto results = classService.findClassDetail(classno);
		List<ClassTagDto> tags = classService.findClassTagByClassNo(results.getClassno(), "class");
		
		results.setTags(tags);
		
		HashMap<String, Object> classDetail = new HashMap<>();
		classDetail.put("results", results);
		
		
		return classDetail;
	}
	
	@CrossOrigin
	@ResponseBody
	@PostMapping(path = {"/classRegister"})
	private String writeClass(ClassDto register, String languages) {
		String[] languages2 = languages.split(",");
//		System.out.println(register);
		classService.writeClass(register, languages2);
		
		return "success";
	}
	

	@CrossOrigin
	@ResponseBody
	@PostMapping(path = {"/classEdit"})
	private String editClass(ClassDto register, String languages) {
		String[] languages2 = languages.split(",");
//		System.out.println(register);
		classService.editClass(register, languages2);
		
		return "success";
	}
	
	@GetMapping(path = {"/write"})
	public String showRegisterClassForm() {
		
		return "register/write";
	}
	
	@GetMapping(path = {"/edit"})
	public String showEditClassForm() {
		
		return "register/edit";
	}

	@CrossOrigin
	@ResponseBody
	@GetMapping(path = {"/delete" })
	public String deleteClass(int classno) {
		
		classService.deleteClass(classno);
		
		return "success";
		
	}
	
	@CrossOrigin
	@ResponseBody
	@PostMapping(path = {"/application" })
	public String applicationClass(ApplicationDto apply) {
		
		classService.applicationClass(apply);
		
		return "success";
		
	}
}
