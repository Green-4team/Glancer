package com.demoweb.service;

import java.util.List;

import com.demoweb.dto.ClassDto;
import com.demoweb.dto.FreelancerHeaderDto;
import com.demoweb.dto.ProjectHistoryDto;

public interface FreelancerService {

//	List<FreelancerHeaderDto> findClass();

//	ClassDto findClassDetail(String memberid);

	FreelancerHeaderDto showFreelancerDetailHeader(String memberid);

	List<FreelancerHeaderDto> findFreelancerMainList();

	void insertprojectHistory(ProjectHistoryDto projectHistoryRegist);
		
	
}
