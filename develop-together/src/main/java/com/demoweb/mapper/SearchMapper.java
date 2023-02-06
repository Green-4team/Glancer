package com.demoweb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import com.demoweb.dto.BoardDto;
import com.demoweb.dto.SearchDto;

@Mapper
public interface SearchMapper {
	
	
	@Select("SELECT * " +
			"FROM freelancer " +
			"WHERE title " +
			"LIKE '%#{searchKeyword}%' " +
			"ORDER BY rate DESC")
	List<SearchDto> selectFreelancerBySearch(
			@Param("searchKeyword")String searchKeyword
			);
	
	@Select("SELECT * " +
			"FROM project " +
			"WHERE title " +
			"LIKE '%#{searchKeyword}%' " +
			"ORDER BY rate DESC")
	List<SearchDto> selectProjectBySearch(
			@Param("searchKeyword")String searchKeyword
			);
	
	@Select("SELECT * " +
			"FROM teacher a, memberdetail b " +
			"WHERE a.content or b.name  " +
			"LIKE '%#{searchKeyword}%' " +
			"ORDER BY rate DESC")
	List<SearchDto> selectTeacherBySearch(
			@Param("searchKeyword")String searchKeyword
			);
	
	@Select("SELECT * " +
			"FROM education " +
			"WHERE eduname or academy  " +
			"LIKE '%#{searchKeyword}%' " +
			"ORDER BY startdate DESC")
	List<SearchDto> selectEducationBySearch(
			@Param("searchKeyword")String searchKeyword
			);


}














