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
public abstract class SearchServiceImpl implements SearchService{

	@Autowired
	@Qualifier("searchMapper")
	private SearchMapper searchMapper;
	
	@Override
	public List<SearchDto> selectFreelancerBySearch(String searchKeyword) {

		List<SearchDto> SearchList = searchMapper.selectFreelancerBySearch(searchKeyword);
		
		return SearchList;
	}
	
	@Override
	public List<SearchDto> selectProjectBySearch(String searchKeyword) {

		List<SearchDto> SearchList = searchMapper.selectProjectBySearch(searchKeyword);
		
		return SearchList;
	}
	
	@Override
	public List<SearchDto> selectEducationBySearch(String searchKeyword) {

		List<SearchDto> SearchList = searchMapper.selectEducationBySearch(searchKeyword);
		
		return SearchList;
	}
	
	@Override
	public List<SearchDto> selectTeacherBySearch(String searchKeyword) {

		List<SearchDto> SearchList = searchMapper.selectTeacherBySearch(searchKeyword);
		
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
