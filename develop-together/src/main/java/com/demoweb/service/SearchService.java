package com.demoweb.service;

import java.util.List;

import com.demoweb.dto.ClassDto;
import com.demoweb.dto.FreelancerHeaderDto;
import com.demoweb.dto.ProjectHistoryDto;
import com.demoweb.dto.SearchDto;
import com.demoweb.dto.TeacherDto;

public interface SearchService {

	List<FreelancerHeaderDto> selectFreelancerBySearch(String searchKeyword);

	List<TeacherDto> selectTeacherBySearch(String searchKeyword);
	
	List<ClassDto> selectClassBySearch(String searchKeyword);

}
