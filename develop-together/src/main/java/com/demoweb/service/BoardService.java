package com.demoweb.service;

import java.util.List;

import com.demoweb.dto.BoardAttachDto;
import com.demoweb.dto.BoardCommentDto;
import com.demoweb.dto.BoardDto;
import com.demoweb.dto.BoardTagDto;

public interface BoardService {

	void writeBoard(BoardDto board);

	List<BoardDto> findAllBoard();

	void increaseBoardReadCount(int boardNo);

	void deleteBoard(int boardNo);

	BoardAttachDto findBoardAttachByAttachNo(int attachNo);

	void modifyBoard(BoardDto board);
	
	////////////////////////////////////////////
	
	void writeComment(BoardCommentDto comment);
	
	void updateGroupNo(int commentNo, int groupNo);

	void deleteComment(int commentNo);

	List<BoardCommentDto> findBoardCommentByBoardNo(int boardNo);

	void updateComment(BoardCommentDto comment);

	void writeReComment(BoardCommentDto commentDto);

	/////////////////////////////////////////////////
	
	List<BoardDto> findBoardByPage(int pageNo, int pageSize);
	
	List<BoardTagDto> findBoardTagByBoardNo(int boardNo, String boardType);
	
	int findBoardCount();
	
	BoardDto findBoardByBoardNo(int boardNo);

}