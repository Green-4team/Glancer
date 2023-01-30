package com.demoweb.controller;

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
		
		Object freelancerregisters  = (Object)application.getAttribute("freelancerregisters");
		accountService.insertFreeLancerInfo(freelancerregister);
		accountService.insertFreeLancerDetailInfo(freelancerregisterdetail);
		
		return freelancerregisters;
	}
	
	
	

}












