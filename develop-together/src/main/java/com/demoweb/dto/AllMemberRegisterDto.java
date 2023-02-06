package com.demoweb.dto;

import java.util.Date;

import lombok.Data;

@Data // 모든 변수에 대해 getter, setter 자동 생성, 기본 생성자, toString, ....
public class AllMemberRegisterDto {
	
	private String memberId;
	private String password;
	private int membertype;

}
