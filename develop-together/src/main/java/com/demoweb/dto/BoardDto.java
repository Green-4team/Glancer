package com.demoweb.dto;

import java.util.Date;
import java.util.List;

import lombok.Data;

@Data
public class BoardDto {
		
	private String writer;
	private int readCount;
	
	// Board 테이블과 BoartAttach 테이블 사이의 1:Many 관계를 구현한 필드 (변수)
	private List<BoardAttachDto> attachments;
	// Board 테이블과 BoartAttach 테이블 사이의 1:1 관계를 구현한 필드 (변수)
	// private BoardAttachDto attachment;
	
	// Board 테이블과 BoartComment 테이블 사이의 1:Many 관계를 구현한 필드 (변수)
	private List<BoardCommentDto> comments;
	
	private int boardNo;
	private int topicNo;
	private String memberId;
	private String title;
	private String content;
	private Date regDate;
	private int views;
	private boolean deleted;
	
	private String topicName;
	private List<BoardTagDto> tags;
	
}
