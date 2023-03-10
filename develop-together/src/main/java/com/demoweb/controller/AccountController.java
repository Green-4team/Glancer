package com.demoweb.controller;

import java.io.File;
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
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.view.RedirectView;

import com.demoweb.dto.FreeLancerRegisterDetailDto;
import com.demoweb.common.Util;
import com.demoweb.dto.AllMemberRegisterDto;
import com.demoweb.dto.ApplicationDto;
import com.demoweb.dto.ClassDto;
import com.demoweb.dto.CompanyDetailDto;
import com.demoweb.dto.CompanyDto;
import com.demoweb.service.AccountService;


@Controller
@RequestMapping(path = { "/account" })
public class AccountController {
	
	@Autowired
	@Qualifier("accountService")
	private AccountService accountService;
	
	
	//로그인
	@CrossOrigin
	@PostMapping(path = {"/login"})
	@ResponseBody
	public Object login( String memberId, String password,HttpSession session) {
		
		AllMemberRegisterDto login = accountService.findCustomerByIdAndPasswd(memberId, password); // 회원 정보 조회(아이디, 비밀번호)
		
		if (login != null ) {
			session.setAttribute("loginuser", login);
		} else {
			return "fail";
		}
		
		return login;
	}
	
	@CrossOrigin
	@GetMapping(path = {"/LoginCheck"})
	@ResponseBody
	public Object LoginCheck(HttpSession session) {
		
		AllMemberRegisterDto loginUser = (AllMemberRegisterDto)session.getAttribute("loginuser");
		
			
		return loginUser;
	}
	
	//프리랜서 회원가입
	@CrossOrigin
	@PostMapping(path = {"/freelancerRegister"})
	@ResponseBody
	public Object FreelancerRegister(AllMemberRegisterDto freelancerregister,FreeLancerRegisterDetailDto freelancerregisterdetail , HttpServletRequest req) {
		
		ServletContext application = req.getServletContext();
		
		Object freelancerregisters  = (Object)application.getAttribute("register");
		accountService.insertFreeLancerInfo(freelancerregister);
		accountService.insertFreeLancerDetailInfo(freelancerregisterdetail);
		
		return freelancerregisters;
	}
	
	//학원 회원가입
	@CrossOrigin
	@PostMapping(path = {"/academyRegister"})
	@ResponseBody
	public Object AcademyRegister(AllMemberRegisterDto academyregister,CompanyDto academyDetail, HttpServletRequest req) {
		
		ServletContext application = req.getServletContext();
		
		Object academyregisters  = (Object)application.getAttribute("register");
		accountService.insertacademyInfo(academyregister);
		accountService.insertacademyDetailInfo(academyDetail);
		
		return academyregisters;
	}

	//아이디 중복 체크
	@CrossOrigin
	@GetMapping(path = {"/checkDuplication"})
	@ResponseBody
	public HashMap<String, Object> checkDuplication(String memberId) {
		
		boolean valid = accountService.checkDuplication(memberId);
		
		HashMap<String, Object> response = new HashMap<>();
		response.put("validation", valid);
		
		return response;
	}
	
	//기업 회원가입
	@CrossOrigin
	@PostMapping(path = {"/comapanyRegister"})
	@ResponseBody
	public Object CompanyRegister(AllMemberRegisterDto companyregister,CompanyDto companyDetail,CompanyDetailDto companyMoreDetail, MultipartFile brFile,  HttpServletRequest req) {
		


		
		ServletContext application = req.getServletContext();
		if (brFile != null && brFile.getOriginalFilename().length() > 0) {
		
		String path = application.getRealPath("/board-attachments");
		String fileName = brFile.getOriginalFilename(); //파일 이름 가져오기
		if (fileName != null && fileName.length() > 0) {
		String uniqueFileName = Util.makeUniqueFileName(fileName);
			try {
				brFile.transferTo(new File(path, uniqueFileName));//파일 저장
				System.out.println("2");
			
				
				companyMoreDetail.setBr(fileName);				
				companyMoreDetail.setUniquebr(uniqueFileName);
			} catch (Exception e) {
				e.printStackTrace();
			}
		  }
		}
		Object companyregisters  = (Object)application.getAttribute("register");
		accountService.insertCompanyInfo(companyregister);
		accountService.insertCompanyDetailInfo(companyDetail);
		accountService.insertCompanyMoreDetailInfo(companyMoreDetail);
		
		return companyregisters;
	}
	
	//프리랜서 불러오기
	@CrossOrigin
	@GetMapping(path = {"/loadFreelancerInfo"})
	@ResponseBody
	public HashMap<String, Object> loadFreeLancerInfo(String memberId) {
		
		FreeLancerRegisterDetailDto results = accountService.loadFreeLancerInfo(memberId);
		
		HashMap<String, Object> response = new HashMap<>();
		response.put("results", results);
		
		return response;
	}
	//프리랜서 수정
	@CrossOrigin
	@PostMapping(path = {"/freelancerUpdate"})
	@ResponseBody
	public Object FreeLancerUpdate(FreeLancerRegisterDetailDto Freeupdate) {
		
		
		accountService.updateFreeLancerInfo(Freeupdate);
		
		
		return "";
	}
	//기업 학원 불러오기	
	@CrossOrigin
	@GetMapping(path = {"/loadCompanyrInfo"})
	@ResponseBody
	public HashMap<String, Object> loadCompanyrInfo(String memberId) {
		
		CompanyDto results = accountService.loadCompanyrInfo(memberId);
		
		HashMap<String, Object> response = new HashMap<>();
		response.put("results", results);
		
		return response;
	}
	//기업 수정
	@CrossOrigin
	@PostMapping(path = {"/CompanyUpdate"})
	@ResponseBody
	public Object CompanyUpdate(CompanyDto company, CompanyDetailDto companydetail) {
		
		
		accountService.updateCompanyInfo(company);
		accountService.updateCompanyDetailInfo(companydetail);
		
		return "";
	}
	//학원 수정	
	@CrossOrigin
	@PostMapping(path = {"/AcademyUpdate"})
	@ResponseBody
	public Object AcademyUpdate(CompanyDto academy) {
		
		
		accountService.updateAcademyInfo(academy);
		
		
		return "";
	}
	
	//마이페이지 수강신청 정보 불러오기
	@CrossOrigin
	@GetMapping(path = {"/loadClassApplyInfoInfo"})
	@ResponseBody
	public HashMap<String, Object> loadClassApplyInfoInfo(String memberId) {
		
		List<ApplicationDto> applydto = accountService.loadClassApplyInfoInfo(memberId);
		
		HashMap<String, Object> response = new HashMap<>();
		response.put("results", applydto);
		
		return response;
	}
	
	
	//마이페이지 수강신청 정보 학원으로 받기 불러오기
		@CrossOrigin
		@GetMapping(path = {"/loadClassApplyInfoInAca"})
		@ResponseBody
		public HashMap<String, Object> loadClassApplyInfoInAca(String memberId) {
			
//			List<ApplicationDto> applydto = accountService.loadClassApplyInfoInfo(memberId);
			List<ClassDto> classdto = accountService.loadClassApplyInfoInAca(memberId);
			HashMap<String, Object> response = new HashMap<>();
			response.put("results", classdto);
			
			return response;
		}
		
		//아이디 중복 수강 신청에서 체크
		@CrossOrigin
		@GetMapping(path = {"/checkMultipleApply"})
		@ResponseBody
		public HashMap<String, Object> checkMultipleApply(String memberId, int classno) {
			
			boolean valid = accountService.checkMultipleApply(memberId, classno);
			
			HashMap<String, Object> response = new HashMap<>();
			response.put("validation", valid);
			
			return response;
		}
		
		//마이페이지 수강신청 정보 불러오기
		@CrossOrigin
		@GetMapping(path = {"/ApplyList"})
		@ResponseBody
		public HashMap<String, Object> ApplyList(int classno) {
			
			List<ApplicationDto> applylistdto = accountService.ApplyList(classno);
			
			HashMap<String, Object> response = new HashMap<>();
			response.put("applylist", applylistdto);
			
			return response;
		}
		
		//수강 신청 수락
		@CrossOrigin
		@ResponseBody
		@GetMapping(path = {"/acceptApply" })
		public String acceptApply(String memberId, int classno) {
			
			accountService.acceptApply(memberId, classno);
			return "success";
			
		}
		
}












