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

import com.demoweb.dto.SearchDto;
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
		@GetMapping(path = {"/searchteacherclass"})
		private HashMap<String, Object> showSearchList() {
			
			List<SearchDto> results = searchService.findSearchList();
			
			HashMap<String, Object> searchList = new HashMap<>();
			searchList.put("results", results);
			System.out.println("'searchList'");
			return searchList;
		}
	}
}
