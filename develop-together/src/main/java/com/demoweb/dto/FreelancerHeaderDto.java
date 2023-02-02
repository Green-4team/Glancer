package com.demoweb.dto;

import java.util.Date;

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

}
