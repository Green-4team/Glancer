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
import com.demoweb.dto.ClassDto;
import com.demoweb.dto.FreelancerHeaderDto;
import com.demoweb.dto.ProjectHistoryDto;
import com.demoweb.dto.SearchDto;
import com.demoweb.dto.TeacherDto;
import com.demoweb.service.SearchService;
import com.demoweb.ui.ThePager;


@Controller
@RequestMapping(path = {"/search"})
public class SearchController {
	
	private final int PAGE_SIZE = 5; 	// 한 페이지에 표시되는 데이터 개수
	private final int PAGER_SIZE = 5;	// 한 번에 표시할 페이지 번호 개수
	private final String LINK_URL = "#/board/qna"; // 페이지 번호를 클릭했을 때 이동할 페이지 경로
	
	@Autowired	
	@Qualifier("searchService")
	private SearchService searchService;
	

	@CrossOrigin
	@ResponseBody
	@GetMapping(path = {"/freelancer"})
	private HashMap<String, Object> selectFreelancerBySearch(@RequestParam String searchKeyword){
        System.out.println("freelancer, " + searchKeyword);
        
        List<FreelancerHeaderDto> results = searchService.selectFreelancerBySearch(searchKeyword);
        
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
        
        List<ProjectHistoryDto> results = searchService.selectProjectBySearch(searchKeyword);
        
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

        List<TeacherDto> results = searchService.selectTeacherBySearch(searchKeyword);
        
        HashMap<String, Object> teacherList = new HashMap<>();
        teacherList.put("results", results);
		return teacherList;
        
    }
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = {"/class"})
	private HashMap<String, Object> selectClassBySearch(@RequestParam String searchKeyword){
        System.out.println("class, " + searchKeyword);
        
        searchService.selectClassBySearch(searchKeyword);

        List<ClassDto> results = searchService.selectClassBySearch(searchKeyword);
        
        HashMap<String, Object> classList = new HashMap<>();
        classList.put("results", results);
		return classList;
    }
	
	
	
}

