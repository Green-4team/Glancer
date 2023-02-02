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
import com.demoweb.dto.FreelancerHeaderDto;
import com.demoweb.service.ClassService;
import com.demoweb.service.FreelancerService;

@Controller
@RequestMapping(path = {"/project"})
public class FreelancerController {

	@Autowired	
	@Qualifier("freelancerService")
	private FreelancerService freelancerService;

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
	
//	@CrossOrigin
//	@ResponseBody
//	@GetMapping(path = {"/freelancer/freelancerdetail"})
//	private HashMap<String, Object> showFreelancerHeader(String memberid) {
//		
//		FreelancerHeaderDto results = freelancerService.showFreelancerHeader(memberid);
//		
//		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy년 MM월 dd일");
//		
//		HashMap<String, Object> freelancerHeader = new HashMap<>();
//		freelancerHeader.put("results", results);
//		freelancerHeader.put("memberid", memberid);
//		return freelancerHeader;
//	}
}
