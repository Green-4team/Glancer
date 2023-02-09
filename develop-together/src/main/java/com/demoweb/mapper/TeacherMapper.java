package com.demoweb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.demoweb.dto.TeacherDto;

@Mapper
public interface TeacherMapper {
	
	@Select("SELECT * FROM teacher " +
			"WHERE deleted = 0 " +
			"ORDER BY teacherno DESC ")
	List<TeacherDto> selectAllTeacherList();

	@Select("SELECT t.teacherno, t.memberid, t.education, t.career, t.content, t.rate, t.region, m.name, m.email, m.phone, m.occupation " +
			"FROM teacher t, memberdetail m " +
			"WHERE t.memberid = m.memberid and t.memberid = #{memberid} and t.teacherno = #{teacherno} ")
	TeacherDto selectTeacherDetail(String memberid, int teacherno);

	
	@Insert("INSERT INTO teacher (memberid, region, education, career, content) " +
			"VALUES (#{memberid}, #{region}, #{education}, #{career}, #{content} ) ")
	@Options(useGeneratedKeys = true, keyColumn = "teacherno", keyProperty = "teacherno")
	void registerTeacher(TeacherDto register);

	
	@Update("UPDATE teacher " +
			"SET region = #{region}, education = #{education}, career = #{career} " +
			"WHERE memberid = #{memberid}")
	void editTeacher(TeacherDto register);

	
	@Update("UPDATE teacher " +
			"SET deleted = 1 " +
			"WHERE teacherno = #{teacherno} " )
	void deleteTeacher(int teacherno);

	
}
