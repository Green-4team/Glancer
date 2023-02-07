package com.demoweb.service;

import com.demoweb.dto.FreeLancerRegisterDetailDto;

import java.util.List;

import com.demoweb.dto.AllMemberRegisterDto;
import com.demoweb.dto.CompanyDetailDto;
import com.demoweb.dto.CompanyDto;
import com.demoweb.dto.MemberDto;

public interface AccountService {

//	void registerMember(MemberDto member);
//	MemberDto findMemberByIdAndPasswd(String memberId, String passwd);
	
	void insertFreeLancerInfo(AllMemberRegisterDto freelancerregister);

	void insertFreeLancerDetailInfo(FreeLancerRegisterDetailDto freelancerregisterdetail);

	void insertacademyInfo(AllMemberRegisterDto academyregister);

	void insertacademyDetailInfo(CompanyDto academyDetail);

	boolean checkDuplication(String memberId);

	void insertCompanyInfo(AllMemberRegisterDto companyregister);

	void insertCompanyDetailInfo(CompanyDto companyDetail);

	void insertCompanyMoreDetailInfo(CompanyDetailDto companyMoreDetail);

	AllMemberRegisterDto findCustomerByIdAndPasswd(String memberId, String password);

	FreeLancerRegisterDetailDto loadFreeLancerInfo(String memberId);

	void updateFreeLancerInfo(FreeLancerRegisterDetailDto Freeupdate);

	CompanyDto loadCompanyrInfo(String memberId);

	void updateCompanyInfo(CompanyDto company);

	void updateCompanyDetailInfo(CompanyDetailDto companydetail);

	void updateAcademyInfo(CompanyDto academy);

	AllMemberRegisterDto logincheck(String memberId, String password);

	

}