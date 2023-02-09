package com.demoweb.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.View;

import com.demoweb.common.Util;
import com.demoweb.dto.BoardAttachDto;
import com.demoweb.dto.BoardCommentDto;
import com.demoweb.dto.BoardDto;
import com.demoweb.dto.BoardTagDto;
import com.demoweb.service.BoardService;
import com.demoweb.ui.ThePager;
import com.demoweb.view.DownloadView;

@Controller
@RequestMapping(path = { "/board" })
public class BoardController {
	
	private final int PAGE_SIZE = 5; 	// 한 페이지에 표시되는 데이터 개수
	private final int PAGER_SIZE = 5;	// 한 번에 표시할 페이지 번호 개수
	private final String LINK_URL = "#/board/qna"; // 페이지 번호를 클릭했을 때 이동할 페이지 경로
	
	@Autowired
	@Qualifier("boardService")
	private BoardService boardService;
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = {"/qnaList"})
	private HashMap<String, Object> showBoardList(int pageNo, int topicNo) {
		
		List<BoardDto> results = boardService.findBoardByPageAndTopicNo(pageNo, PAGE_SIZE, topicNo);
		int boardCount = boardService.findBoardCountByTopicNo(topicNo);
		
		for (BoardDto result : results) {
			List<BoardTagDto> tags = boardService.findBoardTagByBoardNo(result.getBoardNo(), "board");
			List<BoardCommentDto> comments = boardService.findBoardCommentByBoardNo(result.getBoardNo());
			result.setTags(tags);
			result.setComments(comments);
		}
		
		ThePager pager = new ThePager(boardCount, pageNo, PAGE_SIZE, PAGER_SIZE, LINK_URL);
		
		HashMap<String, Object> boardList = new HashMap<>();
		boardList.put("page", pageNo);
		boardList.put("results", results);
		boardList.put("pager", pager);
		
		return boardList;
		
	}
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = {"/qnaTagSearch"})
	private HashMap<String, Object> showTagSearchList(int pageNo, int tagNo) {
		
		List<BoardDto> results = boardService.findBoardByPageAndTagNo(pageNo, PAGE_SIZE, tagNo);
		int boardCount = boardService.findBoardCountByTagNo(tagNo);
		
		for (BoardDto result : results) {
			List<BoardTagDto> tags = boardService.findBoardTagByBoardNo(result.getBoardNo(), "board");
			List<BoardCommentDto> comments = boardService.findBoardCommentByBoardNo(result.getBoardNo());
			result.setTags(tags);
			result.setComments(comments);
		}
		
		ThePager pager = new ThePager(boardCount, pageNo, PAGE_SIZE, PAGER_SIZE, LINK_URL);
		
		HashMap<String, Object> boardList = new HashMap<>();
		boardList.put("page", pageNo);
		boardList.put("results", results);
		boardList.put("pager", pager);
		
		return boardList;
		
	}
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = {"/qnaDetail"})
	private HashMap<String, Object> showBoardDetail(@RequestParam(defaultValue = "1") int boardNo) {
		
		BoardDto result = boardService.findBoardByBoardNo(boardNo);
		List<BoardTagDto> tags = boardService.findBoardTagByBoardNo(result.getBoardNo(), "board");
		List<BoardCommentDto> comments = boardService.findBoardCommentByBoardNo(result.getBoardNo());
		result.setTags(tags);
		result.setComments(comments);
		
		HashMap<String, Object> boardDetail = new HashMap<>();
		boardDetail.put("result", result);
		
		return boardDetail;
		
	}
	
	@CrossOrigin
	@ResponseBody
	@PostMapping(path = {"/qnaWrite"})
	private String writeBoard(BoardDto board) {
		
		boardService.writeBoard(board);
		int boardNo = boardService.findLastBoardNo();
		String[] tags = board.getTagNames().split(",");
		for (String tag : tags) {
			BoardTagDto tagDto = boardService.findTagByTagName(tag);
			
			if (tagDto == null) {
				boardService.writeTag(tag);
				int tagNo = boardService.findLastTagNo();
				tagDto = new BoardTagDto();
				tagDto.setTagNo(tagNo);
				tagDto.setTagName(tag);
			}
			tagDto.setBoardNo(boardNo);
			boardService.writeBoardTag(tagDto);
			
		}
		
		
		return "success";
	}
	
	@CrossOrigin
	@ResponseBody
	@PostMapping(path = {"/qnaEdit"})
	private String editBoard(BoardDto board) {
		
		boardService.editBoard(board); // board 수정, boardtag 삭제
		
		int boardNo = board.getBoardNo();
		String[] tags = board.getTagNames().split(",");
		for (String tag : tags) {
			BoardTagDto tagDto = boardService.findTagByTagName(tag); // tag 유무 확인
			if (tagDto == null) { 			// tag가 없다면
				boardService.writeTag(tag); // 새로운 tag 생성
				int tagNo = boardService.findLastTagNo(); // 방금 만든 tag 정보 조회
				tagDto = new BoardTagDto();
				tagDto.setTagNo(tagNo);
				tagDto.setTagName(tag);
			}
			
			tagDto.setBoardNo(boardNo);
			boardService.writeBoardTag(tagDto); // board와 tag 연결
		}
		
		return "success";
	}
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = {"/qnaDelete"})
	private String deleteBoard(int boardNo) {
		
		boardService.deleteBoard(boardNo); // board 삭제
		
		return "success";
	}
	
	@CrossOrigin
	@ResponseBody
	@PostMapping(path = {"/uploadFiles"})
	private String fileUpload(MultipartHttpServletRequest req) {
		
		// 1. 요청 데이터 읽기 (전달인자로 대체)
		MultipartFile attach = req.getFile("files");
		String uniqueFileName = null;
		
		if (attach != null) { //내용이 있는 경우
			// 2. 데이터 처리
			ServletContext application = req.getServletContext();
			String path = application.getRealPath("/board-attachments");
			String fileName = attach.getOriginalFilename(); //파일 이름 가져오기
			if (fileName != null && fileName.length() > 0) {
				uniqueFileName = Util.makeUniqueFileName(fileName);
				
				try {				
					attach.transferTo(new File(path, uniqueFileName)); //파일 저장				
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
		
		return "/board-attachments/" + uniqueFileName;
	}
	
	@CrossOrigin
	@ResponseBody
	@PostMapping(path = {"/qnaWriteComment"})
	private String writeComment(BoardCommentDto comment) {
		
		boardService.writeComment(comment);
		
		return "success";
		
	}
	
	@CrossOrigin
	@ResponseBody
	@PostMapping(path = {"/qnaEditComment"})
	private String editComment(BoardCommentDto comment) {
		
		boardService.editComment(comment);
		
		return "success";
		
	}
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = {"/qnaDeleteComment"})
	private String deleteComment(int commentNo) {
		
		boardService.deleteComment(commentNo);
		
		return "success";
		
	}
	
	@CrossOrigin
	@ResponseBody
	@GetMapping(path = {"/qnaChooseComment"})
	private String chooseComment(int boardNo, int commentNo) {
		
		boardService.chooseComment(boardNo, commentNo);
		
		return "success";
		
	}
	
	///////////////////////////////////////////////////////////////////////////////
		
	@GetMapping(path = { "/detail" })
	public String showBoardDetail(@RequestParam(defaultValue = "-1") int boardNo, 
								  @RequestParam(defaultValue = "-1") int pageNo,
								  HttpSession session, 
								  Model model) {		
		// 1. 요청 데이터 읽기 ( 전달인자로 대체 )	
		if (boardNo == -1 || pageNo == -1) { // 요청 데이터가 잘못된 경우
			return "redirect:list";
		}
		
		// 2. 데이터 처리
		ArrayList<Integer> readList = (ArrayList<Integer>)session.getAttribute("read-list");
		if (readList == null) { // 세션에 목록이 없으면 
			readList = new ArrayList<>(); // 목록 새로 만들기
			session.setAttribute("read-list", readList); // 세션에 목록 등록
		}
		
		if (!readList.contains(boardNo)) { // 현재 글 번호가 읽은 글 목록에 포함되지 않은 경우
			boardService.increaseBoardReadCount(boardNo); // 글 조회수 증가
			readList.add(boardNo); // 읽은 글 목록에 현개 글 번호 추가			
		}
		
		BoardDto board = boardService.findBoardByBoardNo(boardNo);
		
		if (board == null) { // 조회되지 않은 경우 (글 번호가 잘못되었거나 또는 삭제된 글인 경우)
			return "redirect:list";
		}
		
		// 3. View에서 읽을 수 있도록 데이터 전달
		model.addAttribute("board", board);
		model.addAttribute("pageNo", pageNo);		
		
		// 4. View 또는 Controller로 이동
		return "board/detail";
	}
	
	@GetMapping(path = { "/download" })
	public View download(@RequestParam(defaultValue = "-1") int attachNo, Model model) {
		
		if (attachNo == -1) {
			model.addAttribute("error_type", "download");
			model.addAttribute("message", "첨부파일 번호가 없습니다.");
		}
		
		BoardAttachDto attachment = boardService.findBoardAttachByAttachNo(attachNo);
		
		// View에게 전달할 데이터 저장
		model.addAttribute("attachment", attachment);
		
		DownloadView view = new DownloadView();
		
		return view;
	}
		
	/////////////////////////////////////////////////////////////////////////////
	
	@GetMapping(path = { "/comment-list" })
	public String showCommentList(int boardNo, Model model) {
		
		List<BoardCommentDto> comments = boardService.findBoardCommentByBoardNo(boardNo);
		
		// View에서 읽을 수 있도록 데이터 저장
		model.addAttribute("comments", comments);
		
		return "board/comment-list"; //  /WEB-INF/views/ + board/comment-list + .jsp
	}
		
//	@GetMapping(path = { "/delete-comment" })
//	public String deleteComment(@RequestParam(defaultValue = "-1") int commentNo, 
//								@RequestParam(defaultValue = "-1") int boardNo, 
//								@RequestParam(defaultValue = "-1") int pageNo) {
//		//1. 요청 데이터 읽기 (전달인자로 대체)
//		if (commentNo == -1 || boardNo == -1 || pageNo == -1) {
//			return "redirect:list";
//		}
//		// 2. 데이터 처리
//		boardService.deleteComment(commentNo);
//		return String.format("redirect:detail?boardNo=%d&pageNo=%d", boardNo, pageNo);
//	}
		
	@PostMapping(path = { "/write-recomment" })
	@ResponseBody
	public String writeReComment(BoardCommentDto commentDto) {
		// 1. 요청 데이터 읽기 ( 전달인자로 대체 )
		// 2. 요청 처리
		boardService.writeReComment(commentDto); // commentDto에 자동 증가된 commentNo가 저장됩니다.

		// 3. View에서 읽을 수 있도록 데이터 저장		
		// 4. View 또는 다른 컨터롤러로 이동
		// return String.format("redirect:detail?boardNo=%d&pageNo=%d", commentDto.getBoardNo(), pageNo);
		return "success";
	}

}















