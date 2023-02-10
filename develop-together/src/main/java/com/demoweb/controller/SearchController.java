package com.demoweb.controller;

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

import com.demoweb.dto.BoardCommentDto;
import com.demoweb.dto.BoardDto;
import com.demoweb.dto.BoardTagDto;
import com.demoweb.dto.SearchDto;
import com.demoweb.service.SearchService;
import com.demoweb.ui.ThePager;


@Controller
@RequestMapping(path = {"/search"})
public class SearchController {
	
	@Autowired	
	@Qualifier("searchService")
	private SearchService searchService;
	

	@CrossOrigin
	@ResponseBody
	@GetMapping(path = {"/freelancer"})
	private HashMap<String, Object> selectFreelancerBySearch(@RequestParam String searchKeyword){
        System.out.println("freelancer, " + searchKeyword);
        
        List<SearchDto> results = searchService.selectFreelancerBySearch(searchKeyword);
        
        HashMap<String, Object> freelancerList = new HashMap<>();
		freelancerList.put("results", results);
		return freelancerList;
        
    }
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = {"/project"})
	private HashMap<String, Object> selectProjectBySearch(@RequestParam String searchKeyword){
        System.out.println("project, " + searchKeyword);
        
        searchService.selectProjectBySearch(searchKeyword);
        
        List<SearchDto> results = searchService.selectProjectBySearch(searchKeyword);
        
        HashMap<String, Object> projectList = new HashMap<>();
        projectList.put("results", results);
		return projectList;
        
        
    }
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = {"/teacher"})
	private HashMap<String, Object> selectTeacherBySearch(@RequestParam String searchKeyword){
        System.out.println("teacher, " + searchKeyword);
        
        searchService.selectTeacherBySearch(searchKeyword);

        List<SearchDto> results = searchService.selectTeacherBySearch(searchKeyword);
        
        HashMap<String, Object> teacherList = new HashMap<>();
        teacherList.put("results", results);
		return teacherList;
        
    }
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = {"/education"})
	private HashMap<String, Object> selectEducationBySearch(@RequestParam String searchKeyword){
        System.out.println("education, " + searchKeyword);
        
        searchService.selectEducationBySearch(searchKeyword);

        List<SearchDto> results = searchService.selectEducationBySearch(searchKeyword);
        
        HashMap<String, Object> educationList = new HashMap<>();
        educationList.put("results", results);
		return educationList;        
    }
	
	
	
}

