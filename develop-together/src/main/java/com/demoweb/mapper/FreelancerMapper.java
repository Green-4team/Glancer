package com.demoweb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.demoweb.dto.ClassDto;
import com.demoweb.dto.FreelancerHeaderDto;
import com.demoweb.dto.ProjectHistoryDto;

@Mapper
public interface FreelancerMapper {

//	@Select("SELECT * FROM class")
//	List<ClassDto> selectAllClassList();

	@Select("SELECT f.memberid, f.title, f.introduce, f.rate, f.education, f.career, f.educontent, f.certificate, m.name, m.occupation " +
			"FROM freelancer f, memberdetail m " +
			"WHERE f.memberid = m.memberid " +
			"ORDER BY memberid DESC ")
	List<FreelancerHeaderDto> selectFreelancerMainList();
	
	
//	@Select("SELECT memberid, title, introduce, rate, education, career, educontent, certificate " +
//			"FROM freelancer " +
//			"WHERE memberid = #{ memberid } ")
//	FreelancerHeaderDto selectFreelancerHeaderDetail(String memberid);
	
	@Select("SELECT f.memberid, f.title, f.introduce, f.rate, f.education, f.career, f.educontent, f.careeryear, f.certificate, m.name, m.occupation " +
			"FROM freelancer f, memberdetail m " +
			"WHERE f.memberid = m.memberid and m.memberid = #{memberid} ")
	FreelancerHeaderDto selectFreelancerHeaderDetail(String memberid);


	
	@Insert("insert into projecthistory ( projectname, projectstart, projectend, client, company, position, device, os, language, dbms, tool, work, memberid ) " +
			"values ( #{ projectname } , #{ projectstart }, #{ projectend } , #{ client } ,#{ company } ,#{ position } , #{ device }, #{ os }, #{ language }, #{ dbms }, #{ tool }, #{ work }, #{ memberid }) ")
	void insertProjectHistory(ProjectHistoryDto projectHistoryRegist);

	

	@Select("SELECT projectname, projectstart, projectend, client, company, position, device, os, language, dbms, tool, work, memberid from projecthistory " +
			"WHERE memberid = #{memberid} ")
	List<ProjectHistoryDto> findProjectHistory(String memberid);

	
	
}
