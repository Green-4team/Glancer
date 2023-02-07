package com.demoweb.dto;

import java.util.Date;
import java.util.List;

import lombok.Data;

@Data // 모든 변수에 대해 getter, setter 자동 생성, 기본 생성자, toString, ....
public class CompanyDto {
	
	private String memberId;
	private String name;
	private String mname;
	private String mpostion;
	private String mphone;
	private String memail;
	private String address;
	private boolean companytype;

	private int headcount;
	private String contnent;
	private String annualsales;
	private String crn;	
	private String br;
	private String uniquebr;
}
