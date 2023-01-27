package com.demoweb.dto;

import java.util.Date;

import lombok.Data;

@Data // 모든 변수에 대해 getter, setter 자동 생성, 기본 생성자, toString, ....
public class FreeLancerRegisterDetailDto {
	
	private String memberId;
	private String name;
	private String birthday;
	private String email;
	private String phone;
	private String occupation;
	private boolean workstate;
	private String startdate;
	


}
