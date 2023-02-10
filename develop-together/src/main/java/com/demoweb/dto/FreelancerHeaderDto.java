package com.demoweb.dto;

import java.util.Date;
import java.util.List;

import lombok.Data;

@Data // 모든 변수에 대해 getter, setter 자동 생성, 기본 생성자, toString, ....
public class FreelancerHeaderDto {
	
	private String memberid;
	private String title;
	private String introduce;
	private int rate;
	private String education;
	private String career;
	private String educontent;
	private String certificate;
	private String name;
	private String occupation;
	private int careeryear;
	private String value1;
	private String value2;
	private String value3;
	private String value4;
	private String program1;
	private String program2;
	private String program3;
	private String program4;
	private String language1;
	private String language2;
	private String language3;
	private String language4;
	private String projectname;
	
}
