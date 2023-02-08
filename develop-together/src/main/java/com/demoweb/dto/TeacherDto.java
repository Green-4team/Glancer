package com.demoweb.dto;

import lombok.Data;

@Data
public class TeacherDto {

	private int teacherno;
	private String memberid;
	private String content;
	private int rate;
	private String region;
	
	private MemberDto member;
}
