package com.demoweb.service;

import java.util.List;

import com.demoweb.dto.TeacherDto;

public interface TeacherService {

	List<TeacherDto> findTeacher();

	TeacherDto findTeacherDetail(String memberid);

	void registerTeacher(TeacherDto register);

	void editTeacher(TeacherDto register);

	void deleteTeacher(int teacherno);

}
