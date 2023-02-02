package com.demoweb.service;

import java.util.List;

import com.demoweb.dto.ClassDto;
import com.demoweb.dto.FreelancerHeaderDto;

public interface FreelancerService {

//	List<FreelancerHeaderDto> findClass();

//	ClassDto findClassDetail(String memberid);

	FreelancerHeaderDto showFreelancerHeader(String memberid);

	List<FreelancerHeaderDto> findFreelancerMainList();
		
	
}
