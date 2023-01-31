package com.demoweb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import com.demoweb.dto.BoardDto;

@Mapper
public interface SearchMapper {
	
	
	@Select("SELECT memberid " +
			"FROM freelancer " +
			"WHERE field='#{field}', tech='#{tech}', local='#{local}', skill='#{skill}', searchKeyword='#{searchKeyword}'" +
			"ORDER BY boardno DESC ")
	List<BoardDto> selectFreelancerResultBySearch(
			@Param("field")String field,
			@Param("tech")String tech,
			@Param("local")String local,
			@Param("skill")String skill,
			@Param("searchKeyword")String searchKeyword
			);
	
	@Select("SELECT projectno " +
			"FROM project " +
			"WHERE field='#{field}', tech='#{tech}', local='#{local}', skill='#{skill}', searchKeyword='#{searchKeyword}'" +
			"ORDER BY boardno DESC ")
	List<BoardDto> selectProjectResultBySearch(
			@Param("field")String field,
			@Param("tech")String tech,
			@Param("local")String local,
			@Param("skill")String skill,
			@Param("searchKeyword")String searchKeyword
			);
	
	@Select("SELECT COUNT(*) FROM board")
	int selectBoardCount();
	

}














