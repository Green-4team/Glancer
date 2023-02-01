package com.demoweb.dto;


import java.text.SimpleDateFormat;
import java.util.Date;

import lombok.Data;

@Data
public class ClassDto {

	private int classno;
	private String MemberId;
	private String name;
	private String region;
	private int tagno;
	private Date startdate;
	private Date enddate;
	private String content;
	private String classtime;
	private int price;
	private int rate;
	private String crowd;
	private boolean deleted;
	
	
}
