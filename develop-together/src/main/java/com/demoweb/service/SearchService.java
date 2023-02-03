package com.demoweb.service;

import java.util.List;

import com.demoweb.dto.ClassDto;
import com.demoweb.dto.FreelancerHeaderDto;
import com.demoweb.dto.SearchDto;

public interface SearchService {

	SearchDto showSearchHeader();
	
	List<SearchDto> selectFreelancerResultBySearch(String field, String tech, String local, String skill,
			String SearchKeyword);

	List<SearchDto> selectProjectResultBySearch(String field, String tech, String local, String skill,
			String searchKeyword);

	List<SearchDto> findSearchList();
		
	
}
