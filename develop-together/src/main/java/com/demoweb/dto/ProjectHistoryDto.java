package com.demoweb.dto;

import java.util.Date;

import lombok.Data;

@Data // 모든 변수에 대해 getter, setter 자동 생성, 기본 생성자, toString, ....
public class ProjectHistoryDto {
	

	private String projectname;
	private String projectstart;
	private String projectend;
	private String client;
	private String company;
	private String position;
	private String datatransmission;
	private String language;
	private String dbms;
	private String tool;
	private String work;
	private String memberid;

}
