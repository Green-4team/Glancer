package com.demoweb.controller;

import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.demoweb.dto.AllMemberRegisterDto;
import com.demoweb.dto.ClassDto;
import com.demoweb.dto.CompanyDto;
import com.demoweb.dto.FreeLancerRegisterDetailDto;
import com.demoweb.dto.FreelancerHeaderDto;
import com.demoweb.dto.PersonalHistoryDto;
import com.demoweb.dto.ProjectHistoryDto;
import com.demoweb.service.ClassService;
import com.demoweb.service.FreelancerService;

@Controller
@RequestMapping(path = {"/project"})
public class FreelancerController {

	@Autowired	
	@Qualifier("freelancerService")
	private FreelancerService freelancerService;

	
	// 프리랜서 메인 리스트 출력 (반복문)
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = {"/freelancer"})
	private HashMap<String, Object> showfreelancerMainList() {
		
		List<FreelancerHeaderDto> results = freelancerService.findFreelancerMainList();
		
		HashMap<String, Object> freelancerList = new HashMap<>();
		freelancerList.put("results", results);
		System.out.println("111");
		return freelancerList;
	}
	
	// 프리랜서 디테일 헤더 출력
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = {"/freelancer/freelancerdetail"})
	private HashMap<String, Object> showFreelancerDetailHeader(String memberid) {
		
		FreelancerHeaderDto results = freelancerService.showFreelancerDetailHeader(memberid);
		
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy년 MM월 dd일");
		
		HashMap<String, Object> freelancerDetailHeader = new HashMap<>();
		freelancerDetailHeader.put("results", results);
		freelancerDetailHeader.put("memberid", memberid);
		System.out.println("222");
		return freelancerDetailHeader;
	}
	
	// 이력서 등록
	@CrossOrigin
	@PostMapping(path = {"/personalHistoryRegister"})
	@ResponseBody
	private Object personalHistoryRegist(PersonalHistoryDto personalHistoryRegist) {
		
		freelancerService.insertpersonalHistory(personalHistoryRegist);
			
		return "";
	}
	
	// 프리랜서 프로필 등록
	@CrossOrigin
	@PostMapping(path = {"/freelancerProfileRegister"})
	@ResponseBody
	private Object freelancerProfileRegist(FreelancerHeaderDto freelancerHeaderDto) {
		
		freelancerService.insertFreelancerProfile(freelancerHeaderDto);
			
		return "";
	}
	
	@CrossOrigin
	@PostMapping(path = {"/projectRegister"})
	@ResponseBody
	private Object projectHistoryRegist(ProjectHistoryDto projectHistoryRegist) {
		
		freelancerService.insertprojectHistory(projectHistoryRegist);
				
		return "";
	}
	
	@CrossOrigin
	@GetMapping(path = {"/freelancerDetailList"})
	@ResponseBody
	private Object showProjectHistoryList(String memberid) {
		
		List<ProjectHistoryDto> projectHistory = freelancerService.findprojectHistoryy(memberid);
		
		HashMap<String, Object> projectHistoryHashMap = new HashMap<>();
		projectHistoryHashMap.put("results", projectHistory);
		
		

		
		return projectHistoryHashMap;
	}
	
	//이력서 출력
	@CrossOrigin
	@GetMapping(path = {"/showPersonalHistory"})
	@ResponseBody
	private Object showPersonalHistory(String memberid) {
		
		System.out.println("444444444");
		
		
		PersonalHistoryDto personaltHistory = freelancerService.findPersonalHistory(memberid);
		HashMap<String, Object> personalHistoryHashMap = new HashMap<>();
		personalHistoryHashMap.put("results2", personaltHistory);
		
		return personalHistoryHashMap;
	}
	
	
	
	
}
