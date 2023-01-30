package com.demoweb.service;

import com.demoweb.dto.FreeLancerRegisterDetailDto;
import com.demoweb.dto.AllMemberRegisterDto;
import com.demoweb.dto.CompanyDto;
import com.demoweb.dto.MemberDto;

public interface AccountService {

//	void registerMember(MemberDto member);
//	MemberDto findMemberByIdAndPasswd(String memberId, String passwd);
	
	void insertFreeLancerInfo(AllMemberRegisterDto freelancerregister);

	void insertFreeLancerDetailInfo(FreeLancerRegisterDetailDto freelancerregisterdetail);

	void insertacademyInfo(AllMemberRegisterDto academyregister);

	void insertacademyDetailInfo(CompanyDto academyDetail);

	void loadMemberId(AllMemberRegisterDto loadmemberId);

}