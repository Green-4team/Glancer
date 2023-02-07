package com.demoweb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.demoweb.service.SearchService;

public class SearchController {
	@Controller
	@RequestMapping(path = {"/search"})
	public class SearchFreelancerProjectController {

		@Autowired	
		@Qualifier("searchService")
		private SearchService searchService;
		
		
		@CrossOrigin
		@ResponseBody
		@GetMapping("/freelancer")
	    public void selectFreelancerBySearch(@RequestParam String searchKeyword){
	        System.out.println("freelancer, " + searchKeyword);
	        
	        searchService.selectFreelancerBySearch(searchKeyword);
	        
	    }
		
		@CrossOrigin
		@ResponseBody
		@GetMapping("/project")
	    public void selectProjectBySearch(@RequestParam String searchKeyword){
	        System.out.println("project, " + searchKeyword);
	        
	        searchService.selectProjectBySearch(searchKeyword);
	        
	    }
		
		@CrossOrigin
		@ResponseBody
		@GetMapping("/teacher")
	    public void selectTeacherBySearch(@RequestParam String searchKeyword){
	        System.out.println("teacher, " + searchKeyword);
	        
	        searchService.selectTeacherBySearch(searchKeyword);
	        
	    }
		
		@CrossOrigin
		@ResponseBody
		@GetMapping("/education")
	    public void selectEducationBySearch(@RequestParam String searchKeyword){
	        System.out.println("education, " + searchKeyword);
	        
	        searchService.selectEducationBySearch(searchKeyword);
	        
	    }
		
		
		
	}
}
