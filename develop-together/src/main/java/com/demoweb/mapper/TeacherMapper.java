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

	@Select("SELECT t.memberid, t.content, t.rate, t.region, m.name, m.email, m.phone, m.occupation " +
			"FROM teacher t, memberdetail m " +
			"WHERE t.memberid = m.memberid and m.memberid = #{memberid} ")
	TeacherDto selectTeacherDetail(int teacherno);

	
	@Insert("INSERT INTO teacher (name, email, phone, content, region) " +
			"VALUES (#{name}, #{email}, #{phone}, #{content}, #{region}) ")
	@Options(useGeneratedKeys = true, keyColumn = "teacherno", keyProperty = "teacherno")
	void registerTeacher(TeacherDto register);

	
	@Update("UPDATE teacher " +
			"SET name = #{name}, email = #{email}, phone = #{phone}, content = #{content}, region = #{region} " +
			"WHERE teacherno = #{teacherno}")
	void editTeacher(TeacherDto register);

	
	@Update("UPDATE teacher " +
			"SET deleted = 1 " +
			"WHERE teacherno = #{teacherno} " )
	void deleteTeacher(int teacherno);

	
}
