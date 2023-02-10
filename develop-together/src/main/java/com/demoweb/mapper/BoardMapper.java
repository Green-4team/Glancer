package com.demoweb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.demoweb.dto.BoardCommentDto;
import com.demoweb.dto.BoardDto;
import com.demoweb.dto.BoardTagDto;

@Mapper
public interface BoardMapper {
	
//	@Select("SELECT boardno, title, writer, content, readcount, regdate " +
//			"FROM board " +
//			"WHERE boardno = #{ boardNo } AND deleted = '0'")
//	BoardDto selectBoardByBoardNo(int boardNo);
//	
//	@Select("SELECT attachno, boardno, userfilename, savedfilename, downloadcount " +
//			"FROM boardattach " +
//			"WHERE boardno = #{ boardNo } ")
//	List<BoardAttachDto> selectBoardAttachByBoardNo(int boardNo);
//	
//	@Select("SELECT boardno, title, writer, content, readcount, regdate " +
//			"FROM board " +
//			"WHERE boardno = #{ boardNo } AND deleted = '0'")
//	@Results(id = "boardResultMap",
//			 value = {
//					 @Result(column = "boardno", property = "boardNo", id = true),
//					 @Result(column = "title", property = "title"),
//					 @Result(column = "writer", property = "writer"),
//					 @Result(column = "content", property = "content"),
//					 @Result(column = "readcount", property = "readCount"),
//					 @Result(column = "regdate", property = "regDate"),
//					 @Result(column = "boardno", property = "attachments", 
//					 		 many = @Many(select = "selectBoardAttachByBoardNo")),
//					 @Result(column = "boardno", property = "comments", 
//					 		 many = @Many(select = "com.demoweb.mapper.BoardCommentMapper.selectCommentByBoardNo"))
//			 })
//	BoardDto selectBoardByBoardNo2(int boardNo);

	//////////////////////////////////
	
	@Select("SELECT b.boardNo, b.topicNo, b.memberId, b.title, b.content, b.regDate, b.views, b.deleted, b.chosen, t.topicName " +
			"FROM board b " +
			"INNER JOIN topic t " +
			"ON b.topicNo = t.topicNo " +
			"WHERE b.deleted = 0 " +
			"AND (b.title LIKE CONCAT('%', #{keyword}, '%') OR b.content LIKE CONCAT('%', #{keyword}, '%')) " +
			"ORDER BY boardno DESC " +
			"LIMIT #{ from }, #{ count }")
	List<BoardDto> selectBoardByPageAndKeyword(@Param("from")int from, @Param("count")int count, @Param("keyword")String keyword);
	
	@Select("SELECT b.boardNo, b.topicNo, b.memberId, b.title, b.content, b.regDate, b.views, b.deleted, b.chosen, t.topicName " +
			"FROM board b " +
			"INNER JOIN topic t " +
			"ON b.topicNo = t.topicNo " +
			"WHERE b.topicNo = #{ topicNo } AND b.deleted = 0 " +
			"AND (b.title LIKE CONCAT('%', #{keyword}, '%') OR b.content LIKE CONCAT('%', #{keyword}, '%')) " +
			"ORDER BY boardno DESC " +
			"LIMIT #{ from }, #{ count } ")
	List<BoardDto> selectBoardByPageAndTopicNoAndKeyword(@Param("from")int from, @Param("count")int count, @Param("topicNo")int topicNo, @Param("keyword")String keyword);
	
	@Select("SELECT b.boardNo, b.topicNo, b.memberId, b.title, b.content, b.regDate, b.views, b.deleted, b.chosen, t.topicName " +
			"FROM board b, topic t, boardtag bt " +
			"WHERE b.topicNo = t.topicNo AND b.boardNo = bt.boardNo AND bt.tagNo = #{ tagNo } AND bt.boardType = 'board' AND b.deleted = 0 " +
			"AND (b.title LIKE CONCAT('%', #{keyword}, '%') OR b.content LIKE CONCAT('%', #{keyword}, '%')) " +
			"ORDER BY boardno DESC " +
			"LIMIT #{ from }, #{ count } ")
	List<BoardDto> selectBoardByPageAndTagNoAndKeyword(@Param("from")int from, @Param("count")int count, @Param("tagNo")int tagNo, @Param("keyword")String keyword);

	@Select("SELECT bt.boardTagNo, bt.tagNo, bt.boardNo, bt.boardType, t.tagName " +
			"FROM tag t, boardtag bt " +
			"WHERE t.tagNo = bt.tagNo " +
			"AND bt.boardNo = #{ boardNo } AND bt.boardType = #{ boardType } ")
	List<BoardTagDto> selectBoardTagByBoardNo(@Param("boardNo") int boardNo, @Param("boardType") String boardType);
	
	@Select("SELECT COUNT(*) " +
			"FROM board b " +
			"WHERE deleted = 0 " +
			"AND (b.title LIKE CONCAT('%', #{keyword}, '%') OR b.content LIKE CONCAT('%', #{keyword}, '%')) ")
	int selectBoardCountByKeyword(String keyword);
	
	@Select("SELECT COUNT(*) FROM board b " +
			"WHERE topicNo = #{ topicNo } AND deleted = 0 " +
			"AND (b.title LIKE CONCAT('%', #{keyword}, '%') OR b.content LIKE CONCAT('%', #{keyword}, '%')) ")
	int selectBoardCountByTopicNoAndKeyword(@Param("topicNo")int topicNo, @Param("keyword")String keyword);
	
	@Select("SELECT COUNT(*) " +
			"FROM board b, boardtag bt " +
			"WHERE b.boardNo = bt.boardNo AND bt.tagNo = #{ tagNo } AND bt.boardType = 'board' AND deleted = 0 " +
			"AND (b.title LIKE CONCAT('%', #{keyword}, '%') OR b.content LIKE CONCAT('%', #{keyword}, '%')) ")
	int selectBoardCountByTagNoAndKeyword(@Param("tagNo")int tagNo, @Param("keyword")String keyword);

	@Select("SELECT b.boardno, b.topicno, b.memberid, b.title, b.content, b.regdate, b.views, b.deleted, b.chosen, t.topicname " +
			"FROM board b, topic t " +
			"WHERE b.topicno = t.topicno AND boardno = #{ boardNo } AND deleted = '0' ")
	BoardDto selectBoardByBoardNo(int boardNo);

	@Insert("INSERT INTO board (topicno, memberid, title, content) " +
			"VALUES (#{ topicNo }, #{ memberId }, #{ title }, #{ content }) ")
	@Options(useGeneratedKeys = true, keyColumn = "boardno", keyProperty = "boardNo")
//	@SelectKey(statement = "SELECT LAST_INSERT_ID()", 
//			   resultType = Integer.class, keyProperty = "boardNo", before = false)
	void insertBoard(BoardDto board);

	@Select("SELECT MAX(boardNo) FROM board ")
	int selectLastBoardNo();

	@Select("SELECT * FROM tag " +
			"WHERE tagname = #{ tagName } ")
	BoardTagDto selectTagByTagName(String tagName);

	@Insert("INSERT INTO tag (tagName) " +
			"VALUES (#{ tagName }) ")
	void insertTag(String tagName);

	@Select("SELECT MAX(tagNo) FROM tag ")
	int selectLastTagNo();

	@Insert("INSERT INTO boardtag (tagno, boardno, boardtype) " +
			"VALUES (#{ tagNo }, #{ boardNo }, 'board' ) ")
	void insertBoardTag(BoardTagDto tagDto);

	@Update("UPDATE board " +
			"SET topicno = #{ topicNo }, title = #{ title }, content = #{ content }, views = #{ views } " +
			"WHERE boardno = #{ boardNo } ")
	void updateBoard(BoardDto board);

	@Delete("DELETE FROM boardtag " +
			"WHERE boardno = #{ boardNo } ")
	void deleteBoardTag(int boardNo);

	@Update("UPDATE board " +
			"SET deleted = 1 " +
			"WHERE boardno = #{ boardNo } ")
	void deleteBoard(int boardNo);

	@Insert("INSERT INTO comment (boardno, content, memberid) " +
			"VALUES (#{ boardNo }, #{ content }, #{ memberId } ) ")
	void insertComment(BoardCommentDto comment);
	
	@Select("SELECT commentno, boardno, content, regdate, chose, deleted, memberid " +
			"FROM comment " +
			"WHERE boardno = #{ boardNo } AND deleted = 0 ")
	List<BoardCommentDto> selectCommentByBoardNo(int boardNo);
	
	@Update("UPDATE comment " +
			"SET content = #{ content } " +
			"WHERE commentno = #{ commentNo }")
	void updateComment(BoardCommentDto comment);
	
	@Update("UPDATE comment " +
			"SET deleted = 1 " +
			"WHERE commentno = #{ commentNo }")
	void deleteComment(int commentNo);

	@Update("UPDATE board " +
			"SET views = (select views + 1 from board where boardno = #{ boardNo }) " +
			"WHERE boardno = #{ boardNo }")
	void viewBoard(int boardNo);

	@Update("UPDATE comment " +
			"SET chose = 1 " +
			"WHERE commentno = #{ commentNo }")
	void chooseComment(int commentNo);
	
	@Update("UPDATE board " +
			"SET chosen = 1 " +
			"WHERE boardno = #{ boardNo }")
	void chooseBoard(int boardNo);
	
}














