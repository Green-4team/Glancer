package com.demoweb.dto;

import lombok.Data;

@Data
public class TeacherDto {

	private String MemberId;
	private String content;
	private int rate;
	private String region;
	
	private MemberDto member;
}
