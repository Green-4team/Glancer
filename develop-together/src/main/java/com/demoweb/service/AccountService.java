package com.demoweb.service;

import com.demoweb.dto.FreeLancerRegisterDetailDto;
import com.demoweb.dto.FreeLancerRegisterDto;
import com.demoweb.dto.MemberDto;

public interface AccountService {

//	void registerMember(MemberDto member);
//	MemberDto findMemberByIdAndPasswd(String memberId, String passwd);
	
	void insertFreeLancerInfo(FreeLancerRegisterDto freelancerregister);

	void insertFreeLancerDetailInfo(FreeLancerRegisterDetailDto freelancerregisterdetail);

}