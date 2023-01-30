package com.demoweb.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.demoweb.dto.FreeLancerRegisterDetailDto;
import com.demoweb.dto.FreeAllMemberRegisterDto;
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

	
	@Insert("INSERT INTO member (memberid, password) " +
			"VALUES ( #{ memberId }, #{ password  }) ")
	void insertFreeLancerInfo(FreeAllMemberRegisterDto freelancerregister);

	
	@Insert(" insert into memberdetail (memberid, name, birthday, email, phone, occupation, workstate, startdate ) " +
			"values ( #{ memberId }, #{ name } , #{ birthday }, #{ email } , #{ phone } ,#{ occupation } ,#{ workstate } , #{ startdate }) ")
	void insertFreeLancerDetailInfo(FreeLancerRegisterDetailDto freelancerregisterdetail);
	
	

}
