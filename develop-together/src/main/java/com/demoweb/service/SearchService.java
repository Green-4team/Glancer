package com.demoweb.service;

import java.util.List;

import com.demoweb.dto.ClassDto;
import com.demoweb.dto.FreelancerHeaderDto;
import com.demoweb.dto.SearchDto;

public interface SearchService {

	SearchDto showSearchHeader();

	List<SearchDto> findSearchList();

	List<SearchDto> selectFreelancerBySearch(String searchKeyword);

	List<SearchDto> selectProjectBySearch(String searchKeyword);

	List<SearchDto> selectEducationBySearch(String searchKeyword);

	List<SearchDto> selectTeacherBySearch(String searchKeyword);
		
	
}
