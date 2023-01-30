package com.demoweb.controller;

import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.view.RedirectView;

import com.demoweb.dto.FreeLancerRegisterDetailDto;
import com.demoweb.dto.AllMemberRegisterDto;
import com.demoweb.dto.CompanyDetailDto;
import com.demoweb.dto.CompanyDto;
import com.demoweb.dto.MemberDto;
import com.demoweb.service.AccountService;


@Controller
@RequestMapping(path = { "/account" })
public class AccountController {
	
	@Autowired
	@Qualifier("accountService")
	private AccountService accountService;
	
	
	@CrossOrigin
	@PostMapping(path = {"/freelancerRegister"})
	@ResponseBody
	private Object FreelancerRegister(AllMemberRegisterDto freelancerregister,FreeLancerRegisterDetailDto freelancerregisterdetail , HttpServletRequest req) {
		
		ServletContext application = req.getServletContext();
		
		Object freelancerregisters  = (Object)application.getAttribute("register");
		accountService.insertFreeLancerInfo(freelancerregister);
		accountService.insertFreeLancerDetailInfo(freelancerregisterdetail);
		
		return freelancerregisters;
	}
	
	@CrossOrigin
	@PostMapping(path = {"/academyRegister"})
	@ResponseBody
	private Object AcademyRegister(AllMemberRegisterDto academyregister,CompanyDto academyDetail, HttpServletRequest req) {
		
		ServletContext application = req.getServletContext();
		
		Object academyregisters  = (Object)application.getAttribute("register");
		accountService.insertacademyInfo(academyregister);
		accountService.insertacademyDetailInfo(academyDetail);
		
		return academyregisters;
	}

	@CrossOrigin
	@GetMapping(path = {"/checkDuplication"})
	@ResponseBody
	private HashMap<String, Object> checkDuplication(String memberId) {
		
		boolean valid = accountService.checkDuplication(memberId);
		
		HashMap<String, Object> response = new HashMap<>();
		response.put("validation", valid);
		
		return response;
	}
	
	@CrossOrigin
	@PostMapping(path = {"/comapanyRegister"})
	@ResponseBody
	private Object CompanyRegister(AllMemberRegisterDto companyregister,CompanyDto companyDetail,CompanyDetailDto companyMoreDetail,HttpServletRequest req) {
		
		ServletContext application = req.getServletContext();
		
		Object companyregisters  = (Object)application.getAttribute("register");
		accountService.insertCompanyInfo(companyregister);
		accountService.insertCompanyDetailInfo(companyDetail);
		accountService.insertCompanyMoreDetailInfo(companyMoreDetail);
		
		return companyregisters;
	}
}












