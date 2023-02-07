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
}
