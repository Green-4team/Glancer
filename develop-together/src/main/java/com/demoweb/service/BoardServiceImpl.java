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
	
	// 글 번호를 받아서 게시글 삭제
	@Override
	public void deleteBoard(int boardNo) {
		
		boardDao.deleteBoard(boardNo);
		
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
	public void writeComment(BoardCommentDto comment) {
		
		commentMapper.insertComment(comment);
		
	}

	@Override
	public void updateGroupNo(int commentNo, int groupNo) {
		
		commentMapper.updateGroupNo(commentNo, groupNo);
		
	}

	@Override
	public void deleteComment(int commentNo) {
		
		commentMapper.deleteComment(commentNo);
		
	}

	@Override
	public List<BoardCommentDto> findBoardCommentByBoardNo(int boardNo) {
		
		List<BoardCommentDto> comments = commentMapper.selectCommentByBoardNo(boardNo);
		return comments;
		
	}

	@Override
	public void updateComment(BoardCommentDto comment) {
		
		commentMapper.updateComment(comment);
		
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
	public List<BoardDto> findBoardByPageAndTopicNo(int pageNo, int pageSize, int topicNo) {
		int from = (pageNo - 1) * pageSize;
		int count = pageSize;
		
		List<BoardDto> boards = new ArrayList<BoardDto>();
		if (topicNo == 0)
			boards = boardMapper.selectBoardByPage(from, from + count);
		else 
			boards = boardMapper.selectBoardByPageAndTopicNo(from, from + count, topicNo);
		
		return boards;
	}
	
	@Override
	public int findBoardCountByTopicNo(int topicNo) {
		
		int boardCount;
		if (topicNo == 0)
			boardCount = boardMapper.selectBoardCount();
		else
			boardCount = boardMapper.selectBoardCountByTopicNo(topicNo);
		
		return boardCount;
		
	}

	@Override
	public List<BoardDto> findBoardByPageAndTagNo(int pageNo, int pageSize, int tagNo) {
		
		int from = (pageNo - 1) * pageSize;
		int count = pageSize;
		
		List<BoardDto> board = boardMapper.selectBoardByPageAndTagNo(from, from + count, tagNo);
		
		return board;
	}

	@Override
	public int findBoardCountByTagNo(int tagNo) {
		
		int boardCount = boardMapper.selectBoardCountByTagNo(tagNo);
		
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
		
		// Board와 BoardAttach를 각각 조회
//			BoardDto board = boardMapper.selectBoardByBoardNo(boardNo);		
//			if (board != null) {
//				List<BoardAttachDto> attachments = boardMapper.selectBoardAttachByBoardNo(boardNo);
//				board.setAttachments(attachments);
//			}
		
		// Board와 BoardAttach를 한 번에 조회
		BoardDto board = boardMapper.selectBoardByBoardNo(boardNo);
//		BoardDto board = boardMapper.selectBoardByBoardNo2(boardNo);
		
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


}










