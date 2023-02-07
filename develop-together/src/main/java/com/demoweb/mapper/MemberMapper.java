package com.demoweb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.demoweb.dto.FreeLancerRegisterDetailDto;
import com.demoweb.dto.AllMemberRegisterDto;
import com.demoweb.dto.CompanyDetailDto;
import com.demoweb.dto.CompanyDto;
import com.demoweb.dto.MemberDto;

@Mapper // mapper interface 구현 객체 생성 자동으로 처리
public interface MemberMapper {
		
	@Insert("INSERT INTO member (memberid, password, membertype ) " +
			"VALUES ( #{ memberId }, #{ password  }, #{ membertype } ) ")
	void insertFreeLancerInfo(AllMemberRegisterDto freelancerregister);

	
	@Insert(" insert into memberdetail (memberid, name, birthday, email, phone, occupation, workstate, startdate ) " +
			"values ( #{ memberId }, #{ name } , #{ birthday }, #{ email } , #{ phone } ,#{ occupation } ,#{ workstate } , #{ startdate }) ")
	void insertFreeLancerDetailInfo(FreeLancerRegisterDetailDto freelancerregisterdetail);


	
	@Insert("INSERT INTO member (memberid, password , membertype ) " +
			"VALUES ( #{ memberId }, #{ password  } , #{ membertype } ) ")
	void insertacademyInfo(AllMemberRegisterDto academyregister);


	
	@Insert("insert into company (memberid, name, mname, mpostion, mphone, memail, address, companytype ) " + 
			"values ( #{ memberId }, #{ name }, #{ mname }, #{ mpostion }, #{ mphone }, #{ memail }, #{ address }, #{ companytype } ) ")
	void insertacademyDetailInfo(CompanyDto academyDetail);

	
	@Select("select memberid from member " )
	List<AllMemberRegisterDto> loadMemberId();


	@Select("select count(*) from member where memberId = #{ memberId }" )
	int selectCountByMemberId(String memberId);

	@Insert("INSERT INTO member (memberid, password, membertype ) " +
			"VALUES ( #{ memberId }, #{ password  } ,#{membertype} ) ")
	void insertCompanyInfo(AllMemberRegisterDto companyregister);

	@Insert("insert into company (memberid, name, mname, mpostion, mphone, memail, address, companytype ) " + 
			"values ( #{ memberId }, #{ name }, #{ mname }, #{ mpostion }, #{ mphone }, #{ memail }, #{ address }, #{ companytype } ) ")
	void insertCompanyDetailInfo(CompanyDto companyDetail);


	@Insert("insert into companydetail (memberid, headcount, contnent, annualsales, crn, br, uniquebr ) " +
			"values ( #{ memberId } , #{ headcount }, #{ contnent }, #{ annualsales }, #{ crn }, #{ br }, #{ uniquebr } ) " )
	void insertCompanyMoreDetailInfo(CompanyDetailDto companyMoreDetail);


	@Select("select memberid, password, membertype from member where memberid = #{ memberId } and password = #{ password } " )
	AllMemberRegisterDto selectCustomerByIdAndPasswd(@Param("memberId") String memberId, @Param("password") String password);


	@Select("select memberId, name, birthday, email, phone, occupation, workstate, startdate from memberdetail where memberid = #{memberId} " )
	FreeLancerRegisterDetailDto loadFreeLancerInfo(String memberId);


	@Update("update memberdetail " + 
			"set name = #{ name },birthday = #{ birthday }, email = #{ email }, phone = #{ phone }, occupation = #{ occupation }, workstate = #{ workstate }, startdate = #{ startdate } " +
			"where memberid = #{ memberId } " )
	void updateFreeLancerInfo(FreeLancerRegisterDetailDto Freeupdate);


	@Select("select c.memberid, c.name, c.mname, c.mpostion, c.mphone, c.memail, c.address, c.companytype, cd.headcount, cd.contnent, cd.annualsales, cd.crn, cd.br, cd.uniquebr " + 
			"from company c " + 
			"left outer join companydetail cd " +
			"on c.memberid = cd.memberid " +
			"where c.memberid = #{memberId} " )
	CompanyDto loadCompanyrInfo(String memberId);

	@Update("update company " + 
			"set name = #{name}, mname = #{mname}, mpostion = #{mpostion}, mphone = #{mphone}, memail = #{memail}, address = #{address} " +
			"where memberid = #{memberId} " )
	void updateCompanyInfo(CompanyDto company);

	@Update("update companydetail " + 
			"set headcount = #{headcount}, contnent = #{contnent}, annualsales = #{annualsales}, crn = #{crn} " + 
			"where memberid = #{memberId} " )
	void updateCompanyDetailInfo(CompanyDetailDto companydetail);

	@Update("update company " + 
			"set name = #{name}, mname = #{mname}, mpostion = #{mpostion}, mphone = #{mphone}, memail = #{memail}, address = #{address} " +
			"where memberid = #{memberId} " )
	void updateAcademyInfo(CompanyDto academy);

	@Select("select memberid, password, membertype from member where memberid = #{ memberId } and password = #{ password } " )
	AllMemberRegisterDto logincheck(String memberId, String password);
	
	

}
