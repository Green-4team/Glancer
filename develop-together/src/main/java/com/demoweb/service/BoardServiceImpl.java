package com.demoweb.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.demoweb.dao.BoardDao;
import com.demoweb.dto.BoardAttachDto;
import com.demoweb.dto.BoardCommentDto;
import com.demoweb.dto.BoardDto;
import com.demoweb.dto.BoardTagDto;
import com.demoweb.mapper.BoardCommentMapper;
import com.demoweb.mapper.BoardMapper;

@Service("boardService")
public class BoardServiceImpl implements BoardService {
	
	@Autowired
	@Qualifier("boardDao")
	private BoardDao boardDao;
	
	@Autowired
	@Qualifier("boardMapper")
	private BoardMapper boardMapper;
	
	@Autowired
	@Qualifier("boardCommentMapper")
	private BoardCommentMapper commentMapper;
	
	
	
	// 모든 게시글 조회해서 반환
	@Override
	public List<BoardDto> findAllBoard() {
		
		// BoardDao boardDao = new BoardDao();
		List<BoardDto> boards = boardDao.selectAllBoard();
		return boards;
		
	}
	
	
	
	
	
	// 글 번호를 받아서 게시글 조회수 증가
	@Override
	public void increaseBoardReadCount(int boardNo) {
		
		boardDao.updateBoardReadCount(boardNo);
		
	}

	// 첨부파일 번호를 받아서 첨부파일 데이터 조회 및 반환
	@Override
	public BoardAttachDto findBoardAttachByAttachNo(int attachNo) {
		
		BoardAttachDto attachment = boardDao.selectBoardAttachByAttachNo(attachNo);
		return attachment;
		
	}

	
	
	@Override
	public void modifyBoard(BoardDto board) {
		
		boardDao.updateBoard(board);
		
	}

	

	@Override
	public void updateGroupNo(int commentNo, int groupNo) {
		
		commentMapper.updateGroupNo(commentNo, groupNo);
		
	}

	@Override
	public void writeReComment(BoardCommentDto commentDto) {

		// 1. 부모글 조회 -> 그룹번호(groupno), 그룹내 순서번호(step), 들여쓰기 (depth) 적용
		BoardCommentDto parent = commentMapper.selectCommentByCommentNo(commentDto.getCommentNo());
		commentDto.setBoardNo(parent.getBoardNo());
		commentDto.setGroupNo(parent.getGroupNo());
		commentDto.setStep(parent.getStep() + 1);
		commentDto.setDepth(parent.getDepth() + 1);
		
		// 2. 이미 등록된 글 중에서 삽입될 위치 뒤에 있는 글의 step 조정 (1 증가)
		commentMapper.updateStepNo(parent.getGroupNo(), parent.getStep());
		
		// 3. 글쓰기
		commentMapper.insertReComment(commentDto);
	}

	


	////////////////////////////////////////////////////////
	
	@Override
	public List<BoardDto> findBoardByPageAndTopicNoAndKeyword(int pageNo, int pageSize, int topicNo, String keyword) {
		int from = (pageNo - 1) * pageSize;
		int count = pageSize;
		
		List<BoardDto> boards = new ArrayList<BoardDto>();
		if (topicNo == 0)
			boards = boardMapper.selectBoardByPageAndKeyword(from, from + count, keyword);
		else 
			boards = boardMapper.selectBoardByPageAndTopicNoAndKeyword(from, from + count, topicNo, keyword);
		
		return boards;
	}
	
	@Override
	public int findBoardCountByTopicNoAndKeyword(int topicNo, String keyword) {
		
		int boardCount;
		if (topicNo == 0)
			boardCount = boardMapper.selectBoardCountByKeyword(keyword);
		else
			boardCount = boardMapper.selectBoardCountByTopicNoAndKeyword(topicNo, keyword);
		
		return boardCount;
		
	}

	@Override
	public List<BoardDto> findBoardByPageAndTagNoAndKeyword(int pageNo, int pageSize, int tagNo, String keyword) {
		
		int from = (pageNo - 1) * pageSize;
		int count = pageSize;
		
		List<BoardDto> board = boardMapper.selectBoardByPageAndTagNoAndKeyword(from, from + count, tagNo, keyword);
		
		return board;
	}

	@Override
	public int findBoardCountByTagNoAndKeyword(int tagNo, String keyword) {
		
		int boardCount = boardMapper.selectBoardCountByTagNoAndKeyword(tagNo, keyword);
		
		return boardCount;
	}
	
	@Override
	public List<BoardTagDto> findBoardTagByBoardNo(int boardNo, String boardType) {
		
		List<BoardTagDto> tags = boardMapper.selectBoardTagByBoardNo(boardNo, boardType);
		return tags;
		
	}
	
	// 글 번호를 받아서 게시글 조회 및 반환
	@Override
	public BoardDto findBoardByBoardNo(int boardNo) {
		
		boardMapper.viewBoard(boardNo);
		BoardDto board = boardMapper.selectBoardByBoardNo(boardNo);
		
		return board;
		
	}
	
	// 사용자가 입력한 게시글 데이터를 받아서 글쓰기 처리
	// @Transactional(rollbackFor = Exception.class, propagation = Propagation.REQUIRED)
	@Override
	public void writeBoard(BoardDto board) {
		
		boardMapper.insertBoard(board);
		
//		if (board.getAttachments() != null) {
//			for (BoardAttachDto attachment : board.getAttachments()) {
//				attachment.setBoardNo(board.getBoardNo()); // 새로 만들어진 글번호를 Attach 객체에 저장
//				boardDao.insertBoardAttach(attachment);
//			}
//		}
		
	}

	@Override
	public int findLastBoardNo() {
		
		int boardNo = boardMapper.selectLastBoardNo();
		
		return boardNo;
	}

	@Override
	public BoardTagDto findTagByTagName(String tagName) {
		
		BoardTagDto tagDto = boardMapper.selectTagByTagName(tagName);
		
		return tagDto;
	}

	@Override
	public void writeTag(String tagName) {
		
		boardMapper.insertTag(tagName);
		
	}

	@Override
	public int findLastTagNo() {
		int tagNo = boardMapper.selectLastTagNo();
		return tagNo;
	}

	@Override
	public void writeBoardTag(BoardTagDto tagDto) {

		boardMapper.insertBoardTag(tagDto);
		
	}

	@Override
	public void editBoard(BoardDto board) {
		
		boardMapper.updateBoard(board);
		boardMapper.deleteBoardTag(board.getBoardNo());
		
	}

	// 글 번호를 받아서 게시글 삭제
	@Override
	public void deleteBoard(int boardNo) {
		
		boardMapper.deleteBoard(boardNo);
		
	}
	
	@Override
	public void writeComment(BoardCommentDto comment) {
		
		boardMapper.insertComment(comment);
		
	}

	@Override
	public List<BoardCommentDto> findBoardCommentByBoardNo(int boardNo) {
		
		List<BoardCommentDto> comments = boardMapper.selectCommentByBoardNo(boardNo);
		return comments;
		
	}
	
	@Override
	public void editComment(BoardCommentDto comment) {
		
		boardMapper.updateComment(comment);
		
	}
	
	@Override
	public void deleteComment(int commentNo) {
		
		boardMapper.deleteComment(commentNo);
		
	}

	@Override
	public void chooseComment(int boardNo, int commentNo) {

		boardMapper.chooseComment(commentNo);
		boardMapper.chooseBoard(boardNo);
		
	}

}










