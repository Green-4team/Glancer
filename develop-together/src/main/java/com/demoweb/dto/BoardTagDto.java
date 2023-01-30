package com.demoweb.dto;

import lombok.Data;

@Data
public class BoardTagDto {
	
	private int boardTagNo;
	private int tagNo;
	private int boardNo;
	private String boardType;
	
	private String tagName;
	
}
