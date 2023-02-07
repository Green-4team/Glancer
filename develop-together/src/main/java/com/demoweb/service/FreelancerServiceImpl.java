package com.demoweb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.demoweb.dto.ClassDto;
import com.demoweb.dto.FreelancerHeaderDto;
import com.demoweb.dto.PersonalHistoryDto;
import com.demoweb.dto.ProjectHistoryDto;
import com.demoweb.mapper.ClassMapper;
import com.demoweb.mapper.FreelancerMapper;

@Service("freelancerService")
public class FreelancerServiceImpl implements FreelancerService{

	@Autowired
	@Qualifier("freelancerMapper")
	private FreelancerMapper freelancerMapper;
	
	@Override
	public List<FreelancerHeaderDto> findFreelancerMainList() {

		List<FreelancerHeaderDto> freelancerMainList = freelancerMapper.selectFreelancerMainList();
		
		return freelancerMainList;
	}
	
	
	
	

	@Override
	public FreelancerHeaderDto showFreelancerDetailHeader(String memberid) {

		FreelancerHeaderDto freelancerHeaderDetail = freelancerMapper.selectFreelancerHeaderDetail(memberid);
		
		
		return freelancerHeaderDetail;
	}





	@Override
	public void insertprojectHistory(ProjectHistoryDto projectHistoryRegist) {
		
		freelancerMapper.insertProjectHistory(projectHistoryRegist);
		
	}
	
	

	@Override
	public void insertpersonalHistory(PersonalHistoryDto personalHistoryRegist) {
	
		freelancerMapper.insertPersonalHistory(personalHistoryRegist);
	}



	
	@Override
	public List<ProjectHistoryDto> findprojectHistoryy(String memberid) {

		List<ProjectHistoryDto> projectHistory = freelancerMapper.findProjectHistory(memberid);
		
		return projectHistory;
	}




	// 이력서 출력
	@Override
	public PersonalHistoryDto findPersonalHistory(String memberid) {
		PersonalHistoryDto personalHistory = freelancerMapper.findPersonalHistory(memberid);
		return personalHistory; 
	}





	@Override
	public void insertFreelancerProfile(FreelancerHeaderDto freelancerHeaderDto) {
		freelancerMapper.insertFreelancerProfile(freelancerHeaderDto);
		
	}






	
	

}
