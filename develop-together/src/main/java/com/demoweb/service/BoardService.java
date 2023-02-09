package com.demoweb.service;

import java.util.List;

import com.demoweb.dto.BoardAttachDto;
import com.demoweb.dto.BoardCommentDto;
import com.demoweb.dto.BoardDto;
import com.demoweb.dto.BoardTagDto;

public interface BoardService {

	List<BoardDto> findAllBoard();

	void increaseBoardReadCount(int boardNo);

	BoardAttachDto findBoardAttachByAttachNo(int attachNo);

	void modifyBoard(BoardDto board);
	
	////////////////////////////////////////////
	
	void updateGroupNo(int commentNo, int groupNo);

	void writeReComment(BoardCommentDto commentDto);

	/////////////////////////////////////////////////
	
	List<BoardDto> findBoardByPageAndTopicNo(int pageNo, int pageSize, int topicNo);
	
	int findBoardCountByTopicNo(int topicNo);
	
	List<BoardTagDto> findBoardTagByBoardNo(int boardNo, String boardType);
	
	List<BoardDto> findBoardByPageAndTagNo(int pageNo, int pageSize, int tagNo);

	int findBoardCountByTagNo(int tagNo);

	BoardDto findBoardByBoardNo(int boardNo);
	
	void writeBoard(BoardDto board);

	int findLastBoardNo();

	BoardTagDto findTagByTagName(String tagName);

	void writeTag(String tagName);

	int findLastTagNo();

	void writeBoardTag(BoardTagDto tagDto);

	void editBoard(BoardDto board);

	void deleteBoard(int boardNo);

	void writeComment(BoardCommentDto comment);

	List<BoardCommentDto> findBoardCommentByBoardNo(int boardNo);

	void editComment(BoardCommentDto comment);

	void deleteComment(int commentNo);

	void chooseComment(int boardNo, int commentNo);

}


















