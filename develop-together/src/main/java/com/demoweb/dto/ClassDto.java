package com.demoweb.dto;


import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import lombok.Data;

@Data
public class ClassDto {
	
	private int classno;
	private String memberid;
	private String name;
	private String region;
	private int tagno;
	private String startdate;
	private String enddate;
	private String content;
	private String classtime;
	private int price;
	private int rate;
	private String crowd;
	private boolean deleted;
	
	private List<ClassTagDto> tags;
}
