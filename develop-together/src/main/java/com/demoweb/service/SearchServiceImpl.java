package com.demoweb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.demoweb.dto.ClassDto;
import com.demoweb.dto.FreelancerHeaderDto;
import com.demoweb.dto.SearchDto;
import com.demoweb.mapper.ClassMapper;
import com.demoweb.mapper.FreelancerMapper;
import com.demoweb.mapper.SearchMapper;

@Service("searchService")
public class SearchServiceImpl implements SearchService{

	@Autowired
	@Qualifier("searchMapper")
	private SearchMapper searchMapper;
	
	@Override
	public List<SearchDto> selectFreelancerResultBySearch(String field, String tech, String local, String skill, String searchKeyword) {

		List<SearchDto> SearchList = searchMapper.selectFreelancerResultBySearch(field, tech, local, skill, searchKeyword);
		
		return SearchList;
	}
	
	@Override
	public List<SearchDto> selectProjectResultBySearch(String field, String tech, String local, String skill, String searchKeyword) {

		List<SearchDto> SearchList = searchMapper.selectProjectResultBySearch(field, tech, local, skill, searchKeyword);
		
		return SearchList;
	}

	@Override
	public SearchDto showSearchHeader() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<SearchDto> findSearchList() {
		// TODO Auto-generated method stub
		return null;
	}

}
