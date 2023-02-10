package com.demoweb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import com.demoweb.dto.BoardDto;
import com.demoweb.dto.ClassDto;
import com.demoweb.dto.FreelancerHeaderDto;
import com.demoweb.dto.ProjectHistoryDto;
import com.demoweb.dto.SearchDto;
import com.demoweb.dto.TeacherDto;

@Mapper
public interface SearchMapper {
	
	
	@Select("SELECT f.title, f.introduce, f.careeryear, f.rate, f.occupation, f.program1, f.program2, f.program3, f.program4, f.language1, f.language2, f.language3, f.language4, f.value1, f.value2, f.value3, f.value4, f.memberid, m.memberid, m.name " +
			"FROM freelancer f, memberdetail m " +
			"WHERE f.name = m.name " +
			"LIKE f.name = '%{searchKeyword}%' OR m.name = '%{searchKeyword}%' " +
			"ORDER BY freelancerno DESC")
	List<FreelancerHeaderDto> selectFreelancerBySearch(
			@Param("searchKeyword")String searchKeyword
			);
	
	@Select("SELECT * " +
			"FROM project " +
			"WHERE title " +
			"LIKE '%{searchKeyword}%' " +
			"ORDER BY rate DESC")
	List<ProjectHistoryDto> selectProjectBySearch(
			@Param("searchKeyword")String searchKeyword
			);
	
	@Select("SELECT * " +
			"FROM teacher a, memberdetail b " +
			"WHERE a.content or b.name  " +
			"LIKE '%{searchKeyword}%' " +
			"ORDER BY teacherno DESC")
	List<TeacherDto> selectTeacherBySearch(
			@Param("searchKeyword")String searchKeyword
			);
	
	@Select("SELECT * " +
			"FROM class " +
			"WHERE name or content  " +
			"LIKE '%{searchKeyword}%' " +
			"ORDER BY classno DESC")
	List<ClassDto> selectClassBySearch(
			@Param("searchKeyword")String searchKeyword
			);


}














