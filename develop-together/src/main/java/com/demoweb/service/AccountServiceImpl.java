package com.demoweb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.demoweb.common.Util;
import com.demoweb.dto.FreeLancerRegisterDetailDto;
import com.demoweb.dto.AllMemberRegisterDto;
import com.demoweb.dto.ApplicationDto;
import com.demoweb.dto.BoardDto;
import com.demoweb.dto.ClassDto;
import com.demoweb.dto.CompanyDetailDto;
import com.demoweb.dto.CompanyDto;
import com.demoweb.dto.MemberDto;
import com.demoweb.mapper.MemberMapper;

import lombok.Setter;

// @Component
@Service("accountService")
public class AccountServiceImpl implements AccountService {
	
	@Autowired
	@Qualifier("memberMapper")
	private MemberMapper memberMapper;

	@Override
	public void insertFreeLancerInfo(AllMemberRegisterDto freelancerregister) {
	
		String password = Util.getHashedString(freelancerregister.getPassword(), "SHA-256");
		freelancerregister.setPassword(password);
		
		memberMapper.insertFreeLancerInfo(freelancerregister);
		
	}

	@Override
	public void insertFreeLancerDetailInfo(FreeLancerRegisterDetailDto freelancerregisterdetail) {
		memberMapper.insertFreeLancerDetailInfo(freelancerregisterdetail);
		
	}

	@Override
	public void insertacademyInfo(AllMemberRegisterDto academyregister) {
		
		String passwd = Util.getHashedString(academyregister.getPassword(), "SHA-256");
		academyregister.setPassword(passwd);
		memberMapper.insertacademyInfo(academyregister);
		
	}

	@Override
	public void insertacademyDetailInfo(CompanyDto academyDetail) {
		memberMapper.insertacademyDetailInfo(academyDetail);
		
	}


	@Override
	public boolean checkDuplication(String memberId) {
		int count = memberMapper.selectCountByMemberId(memberId);
		return count == 0;
	}

	@Override
	public void insertCompanyInfo(AllMemberRegisterDto companyregister) {
		String password = Util.getHashedString(companyregister.getPassword(), "SHA-256");
		companyregister.setPassword(password);
		memberMapper.insertCompanyInfo(companyregister);
		
	}

	@Override
	public void insertCompanyDetailInfo(CompanyDto companyDetail) {
		memberMapper.insertCompanyDetailInfo(companyDetail);
		
	}

	@Override
	public void insertCompanyMoreDetailInfo(CompanyDetailDto companyMoreDetail) {
		memberMapper.insertCompanyMoreDetailInfo(companyMoreDetail);
		
	}

	@Override
	public AllMemberRegisterDto findCustomerByIdAndPasswd(String memberId, String password) {
		password = Util.getHashedString(password, "SHA-256");
		AllMemberRegisterDto login = memberMapper.selectCustomerByIdAndPasswd(memberId, password);
		return login;
	}

	@Override
	public FreeLancerRegisterDetailDto loadFreeLancerInfo(String memberId) {
		
		FreeLancerRegisterDetailDto results = memberMapper.loadFreeLancerInfo(memberId);
		
		return results;
	}

	@Override
	public void updateFreeLancerInfo(FreeLancerRegisterDetailDto Freeupdate) {
		
		 memberMapper.updateFreeLancerInfo(Freeupdate);
		
		
	}

	@Override
	public CompanyDto loadCompanyrInfo(String memberId) {
		
		CompanyDto results = memberMapper.loadCompanyrInfo(memberId);
		
		
		return results;
	}

	@Override
	public void updateCompanyInfo(CompanyDto company) {
		memberMapper.updateCompanyInfo(company);
		
	}

	@Override
	public void updateCompanyDetailInfo(CompanyDetailDto companydetail) {
		memberMapper.updateCompanyDetailInfo(companydetail);
		
	}

	@Override
	public void updateAcademyInfo(CompanyDto academy) {
		
		memberMapper.updateAcademyInfo(academy);
		
	}

	@Override
	public AllMemberRegisterDto logincheck(String memberId, String password) {
		password = Util.getHashedString(password, "SHA-256");
		AllMemberRegisterDto logincheck = memberMapper.logincheck(memberId, password);
		return logincheck;
	}

	@Override
	public List<ApplicationDto> loadClassApplyInfoInfo(String memberId) {
		
		List<ApplicationDto> applydto = memberMapper.loadClassApplyInfoInfo(memberId);
		
		return applydto;
	}

	@Override
	public List<ClassDto> loadClassApplyInfoInAca(String memberId) {
		List<ClassDto> classdto = memberMapper.loadClassApplyInfoInAca(memberId);
		return classdto;
	}

	@Override
	public boolean checkMultipleApply(String memberId,  int classno) {
		int count = memberMapper.selectcheckMultipleApply(memberId, classno);
		return count == 0;
	}

	@Override
	public List<ApplicationDto> ApplyList(int classno) {
		
		List<ApplicationDto> applylistdto = memberMapper.ApplyList(classno);
		
		return applylistdto;
	}

	@Override
	public void acceptApply(String memberId, int classno) {
		memberMapper.acceptApply(memberId, classno);
		
	}

	

	

}
