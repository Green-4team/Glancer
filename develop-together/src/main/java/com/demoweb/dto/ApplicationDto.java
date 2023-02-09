package com.demoweb.dto;

import java.util.List;

import lombok.Data;

@Data
public class ApplicationDto {

	private int applicationno;
	private int classno;
	private String memberid;
	private boolean applicationstate;
	
	private ClassDto apply;
	
	
	
	private String name;
	private String region;
	
	private String startdate;
	private String enddate;
	private int price;
	private int rate;
	

	private String birthday;
	private String email;
	private String phone;
}
