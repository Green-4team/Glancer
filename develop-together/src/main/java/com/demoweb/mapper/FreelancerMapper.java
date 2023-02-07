package com.demoweb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.demoweb.dto.ClassDto;
import com.demoweb.dto.FreelancerHeaderDto;
import com.demoweb.dto.PersonalHistoryDto;
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


	
	@Insert("insert into projecthistory ( projectname, projectstart, projectend, client, company, position, language, dbms, tool, work, datatransmission, memberid ) " +
			"values ( #{ projectname } , #{ projectstart }, #{ projectend } , #{ client } ,#{ company } ,#{ position }, #{ language }, #{ dbms }, #{ tool }, #{ work }, #{datatransmission}, #{ memberid }) ")
	void insertProjectHistory(ProjectHistoryDto projectHistoryRegist);

	// 이력서 등록
	@Insert("insert into career ( company, depart, position, startdate, enddate, memberid, schoolname, schoolstart, schoolend, schoolmajor, schoolyeartype, schooltype, eduname, edudepart, edustart, eduend, certiname, certipublisher, certidate ) " +
			"values ( #{ company } , #{ depart }, #{ position } , #{ startdate } ,#{ enddate } ,#{ memberid }, #{ schoolname }, #{ schoolstart }, #{ schoolend }, #{ schoolmajor }, #{schoolyeartype}, #{ schooltype }, #{ eduname }, #{ edudepart }, #{ edustart }, #{ eduend }, #{ certiname }, #{ certipublisher }, #{ certidate }) ")
	void insertPersonalHistory(PersonalHistoryDto personalHistoryRegist);


	@Select("SELECT projectname, projectstart, projectend, client, company, position, language, dbms, tool, work, datatransmission, memberid from projecthistory " +
			"WHERE memberid = #{memberid} " +
			"ORDER BY projecthistoryno DESC ")
	List<ProjectHistoryDto> findProjectHistory(String memberid);

	// 이력서 출력
	@Select("SELECT company, depart, position, startdate, enddate, memberid, schoolname, schoolstart, schoolend, schoolmajor, schoolyeartype, schooltype, eduname, edudepart, edustart, eduend, certiname, certipublisher, certidate from career" +
			"WHERE memberid = #{memberid} ")
	PersonalHistoryDto findPersonalHistory(String memberid);


	
	
	
}
