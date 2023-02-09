package com.demoweb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.demoweb.dto.ClassDto;
import com.demoweb.dto.FreelancerHeaderDto;
import com.demoweb.dto.PersonalHistoryDto;
import com.demoweb.dto.ProjectHistoryDto;

@Mapper
public interface FreelancerMapper {

	// 메인화면 프리랜서 프로필 리스트 출력(반복문)
	@Select("SELECT f.title, f.introduce, f.careeryear, f.rate, f.occupation, f.program1, f.program2, f.program3, f.program4, f.language1, f.language2, f.language3, f.language4, f.value1, f.value2, f.value3, f.value4, f.memberid, m.memberid, m.name " +
			"FROM freelancer f, memberdetail m " +
			"WHERE f.memberid = m.memberid " +
			"ORDER BY freelancerno DESC ")
	List<FreelancerHeaderDto> selectFreelancerMainList();
	
	@Select("SELECT f.title, f.introduce, f.careeryear, f.rate, f.occupation, f.program1, f.program2, f.program3, f.program4, f.language1, f.language2, f.language3, f.language4, f.value1, f.value2, f.value3, f.value4, f.memberid, m.memberid, m.name " +
			"FROM freelancer f, memberdetail m " +
			"WHERE f.memberid = m.memberid and f.memberid= #{ memberid }" +
			"ORDER BY freelancerno DESC ")
	FreelancerHeaderDto selectFreelancerHeaderDetail(String memberid);
	
	@Insert("insert into projecthistory ( projectname, projectstart, projectend, client, company, position, language, dbms, tool, work, datatransmission, memberid ) " +
			"values ( #{ projectname } , #{ projectstart }, #{ projectend } , #{ client } ,#{ company } ,#{ position }, #{ language }, #{ dbms }, #{ tool }, #{ work }, #{datatransmission}, #{ memberid }) ")
	void insertProjectHistory(ProjectHistoryDto projectHistoryRegist);

	// 이력서 등록
	@Insert("insert into career ( company, depart, position, startdate, enddate, memberid, schoolname, schoolstart, schoolend, schoolmajor, schoolyeartype, schooltype, eduname, edudepart, edustart, eduend, certiname, certipublisher, certidate ) " +
			"values ( #{ company } , #{ depart }, #{ position } , #{ startdate } ,#{ enddate } ,#{ memberid }, #{ schoolname }, #{ schoolstart }, #{ schoolend }, #{ schoolmajor }, #{schoolyeartype}, #{ schooltype }, #{ eduname }, #{ edudepart }, #{ edustart }, #{ eduend }, #{ certiname }, #{ certipublisher }, #{ certidate }) ")
	void insertPersonalHistory(PersonalHistoryDto personalHistoryRegist);

	// 이력서 출력
	@Select("SELECT company, depart, position, startdate, enddate, memberid, schoolname, schoolstart, schoolend, schoolmajor, schoolyeartype, schooltype, eduname, edudepart, edustart, eduend, certiname, certipublisher, certidate from career " +
			"WHERE memberid = #{memberid} ")
	PersonalHistoryDto findPersonalHistory(String memberid);

	// 프리랜서 프로필 등록
	@Insert("insert into freelancer ( title, careeryear, rate, occupation, program1, program2, program3, program4, language1, language2, language3, language4, value1, value2, value3, value4, memberid ) " +
			"values ( #{ title } , #{ careeryear } , #{ rate } ,#{ occupation }, #{ program1 }, #{ program2 }, #{ program3 }, #{ program4 }, #{language1}, #{ language2 }, #{ language3 }, #{ language4 }, #{ value1 }, #{ value2 }, #{ value3 }, #{ value4 }, #{ memberid }) ")
	void insertFreelancerProfile(FreelancerHeaderDto freelancerHeaderDto);

	
	//프로젝트 이력 출력
	@Select("SELECT projectname, projectstart, projectend, client, company, position, language, dbms, tool, work, datatransmission, memberid, projecthistoryno from projecthistory " +
			"WHERE memberid = #{memberid} " +
			"ORDER BY projecthistoryno DESC ")
	List<ProjectHistoryDto> findProjectHistory(String memberid);
	
	//프로젝트 이력 수정
	@Update("UPDATE projecthistory " +
			"SET projectname = #{projectname}, projectstart = #{projectstart}, projectend = #{projectend}, client = #{client}, company = #{company}, position = #{position}, language = #{language}, dbms = #{dbms}, tool = #{tool}, work = #{work}, datatransmission = #{datatransmission}, memberid = #{memberid} " +
			"WHERE projecthistoryno = #{projecthistoryno}")
	void editProjectHistory(ProjectHistoryDto projectHistoryEdit);

	//이력서 수정
	@Update("UPDATE career " +
			"SET company = #{company}, depart = #{depart}, position = #{position}, startdate = #{startdate}, enddate = #{enddate}, memberid = #{memberid}, schoolname = #{schoolname}, schoolstart = #{schoolstart}, schoolend = #{schoolend}, schoolmajor = #{schoolmajor}, schoolyeartype = #{schoolyeartype}, schooltype = #{schooltype}, eduname = #{eduname}, edudepart = #{edudepart}, edustart = #{edustart}, eduend = #{eduend}, certiname = #{certiname}, certipublisher = #{certipublisher}, certidate = #{certidate}, careerno = #{careerno} " +
			"WHERE memberid = #{memberid}")
	void editPersonalHistory(PersonalHistoryDto personalHistoryDto);


	
	
	
	
}
