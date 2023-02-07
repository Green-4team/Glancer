package com.demoweb.dto;

import java.util.Date;

import lombok.Data;

@Data // 모든 변수에 대해 getter, setter 자동 생성, 기본 생성자, toString, ....
public class PersonalHistoryDto {
	

	private String careerno;
	private String company;
	private String depart;
	private String position;
	private String startdate;
	private String  enddate;
	private String memberid;
	private String schoolname;
	private String schoolstart;
	private String schoolend;
	private String schoolmajor;
	private String schoolyeartype;
	private String schooltype;
	private String eduname;
	private String edudepart;
	private String edustart;
	private String eduend;
	private String certiname;
	private String certipublisher;
	private String certidate;

	

}
