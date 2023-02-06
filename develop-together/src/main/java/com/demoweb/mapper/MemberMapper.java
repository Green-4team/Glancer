package com.demoweb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.demoweb.dto.FreeLancerRegisterDetailDto;
import com.demoweb.dto.AllMemberRegisterDto;
import com.demoweb.dto.CompanyDetailDto;
import com.demoweb.dto.CompanyDto;
import com.demoweb.dto.MemberDto;

@Mapper // mapper interface 구현 객체 생성 자동으로 처리
public interface MemberMapper {
	
//	@Insert("INSERT INTO member (memberid, passwd, email) " +
//			"VALUES (#{ memberId }, #{ passwd }, #{ email })")
//	void insertMember(MemberDto member);
//	
//	@Select("SELECT memberid, email, usertype, regdate, active " +
//			"FROM member " +
//			"WHERE memberid = #{ memberId } AND passwd = #{ passwd } AND active = '1' ")
//	MemberDto selectMemberByIdAndPasswd(@Param("memberId")String memberId, @Param("passwd") String passwd);

	
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
	
	

}
