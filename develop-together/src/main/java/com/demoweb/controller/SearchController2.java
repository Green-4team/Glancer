//package com.demoweb.controller;
//
//import java.io.File;
//import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.List;
//
//import javax.servlet.ServletContext;
//import javax.servlet.http.HttpSession;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.multipart.MultipartFile;
//import org.springframework.web.multipart.MultipartHttpServletRequest;
//import org.springframework.web.servlet.View;
//
//import com.demoweb.common.Util;
//import com.demoweb.dto.BoardAttachDto;
//import com.demoweb.dto.BoardCommentDto;
//import com.demoweb.dto.BoardDto;
//import com.demoweb.dto.BoardTagDto;
//import com.demoweb.service.BoardService;
//import com.demoweb.service.SearchService;
//import com.demoweb.ui.ThePager;
//import com.demoweb.view.DownloadView;
//
//@Controller
//@RequestMapping(path = { "/board" })
//public class SearchController2 {
//	
//	private final int PAGE_SIZE = 5; 	// 한 페이지에 표시되는 데이터 개수
//	private final int PAGER_SIZE = 5;	// 한 번에 표시할 페이지 번호 개수
//	private final String LINK_URL = "#/board/qna"; // 페이지 번호를 클릭했을 때 이동할 페이지 경로
//	
//	@Autowired
//	@Qualifier("searchService")
//	private SearchService searchService;
//	
//	@CrossOrigin
//	@ResponseBody
//	@GetMapping(path = {"/searchList"})
//	private HashMap<String, Object> showBoardList(int pageNo, int topicNo) {
//		
//		List<BoardDto> results = searchService.findBoardByPageAndTopicNo(pageNo, PAGE_SIZE, topicNo);
//		int boardCount = searchService.findBoardCountByTopicNo(topicNo);
//		
//		for (BoardDto result : results) {
//			List<BoardTagDto> tags = searchService.findBoardTagByBoardNo(result.getBoardNo(), "board");
//			List<BoardCommentDto> comments = searchService.findBoardCommentByBoardNo(result.getBoardNo());
//			result.setTags(tags);
//			result.setComments(comments);
//		}
//		
//		ThePager pager = new ThePager(boardCount, pageNo, PAGE_SIZE, PAGER_SIZE, LINK_URL);
//		
//		HashMap<String, Object> boardList = new HashMap<>();
//		boardList.put("page", pageNo);
//		boardList.put("results", results);
//		boardList.put("pager", pager);
//		
//		return boardList;
//		
//	}
//	
//	@CrossOrigin
//	@ResponseBody
//	@GetMapping(path = {"/qnaTagSearch"})
//	private HashMap<String, Object> showTagSearchList(int pageNo, int tagNo) {
//		
//		List<BoardDto> results = searchService.findBoardByPageAndTagNo(pageNo, PAGE_SIZE, tagNo);
//		int boardCount = searchService.findBoardCountByTagNo(tagNo);
//		
//		for (BoardDto result : results) {
//			List<BoardTagDto> tags = searchService.findBoardTagByBoardNo(result.getBoardNo(), "board");
//			List<BoardCommentDto> comments = searchService.findBoardCommentByBoardNo(result.getBoardNo());
//			result.setTags(tags);
//			result.setComments(comments);
//		}
//		
//		ThePager pager = new ThePager(boardCount, pageNo, PAGE_SIZE, PAGER_SIZE, LINK_URL);
//		
//		HashMap<String, Object> boardList = new HashMap<>();
//		boardList.put("page", pageNo);
//		boardList.put("results", results);
//		boardList.put("pager", pager);
//		
//		return boardList;
//		
//	}
//
//}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
