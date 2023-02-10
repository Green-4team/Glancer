package com.demoweb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.demoweb.dto.ClassDto;
import com.demoweb.dto.FreelancerHeaderDto;
import com.demoweb.dto.ProjectHistoryDto;
import com.demoweb.dto.SearchDto;
import com.demoweb.dto.TeacherDto;
import com.demoweb.mapper.ClassMapper;
import com.demoweb.mapper.FreelancerMapper;
import com.demoweb.mapper.SearchMapper;

@Service("searchService")
public class SearchServiceImpl implements SearchService{

	@Autowired
	@Qualifier("searchMapper")
	private SearchMapper searchMapper;
	
	@Override
	public List<FreelancerHeaderDto> selectFreelancerBySearch(String searchKeyword) {

		List<FreelancerHeaderDto> SearchList = searchMapper.selectFreelancerBySearch(searchKeyword);
		
		return SearchList;
	}
	
	@Override
	public List<ProjectHistoryDto> selectProjectBySearch(String searchKeyword) {

		List<ProjectHistoryDto> SearchList = searchMapper.selectProjectBySearch(searchKeyword);
		
		return SearchList;
	}
	
	@Override
	public List<ClassDto> selectClassBySearch(String searchKeyword) {

		List<ClassDto> SearchList = searchMapper.selectClassBySearch(searchKeyword);
		
		return SearchList;
	}
	
	@Override
	public List<TeacherDto> selectTeacherBySearch(String searchKeyword) {

		List<TeacherDto> SearchList = searchMapper.selectTeacherBySearch(searchKeyword);
		
		return SearchList;
	}
	
}
