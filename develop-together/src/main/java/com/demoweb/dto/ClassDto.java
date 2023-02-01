package com.demoweb.dto;


import java.util.Date;

import lombok.Data;

@Data
public class ClassDto {

	private int classno;
	private String MemberId;
	private String name;
	private Date startdate;
	private Date enddate;
	private String content;
	private String classtime;
	private int price;
	private int rate;
	
}
