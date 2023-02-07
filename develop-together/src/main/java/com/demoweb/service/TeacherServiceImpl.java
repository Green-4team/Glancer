package com.demoweb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.demoweb.dto.ClassDto;
import com.demoweb.dto.TeacherDto;
import com.demoweb.mapper.ClassMapper;
import com.demoweb.mapper.TeacherMapper;

@Service("teacherService")
public class TeacherServiceImpl implements TeacherService {

	@Autowired
	@Qualifier("teacherMapper")
	private TeacherMapper teacherMapper;
	
	@Override
	public List<TeacherDto> findTeacher() {
		
		List<TeacherDto> teacherList = teacherMapper.selectAllTeacherList();
		return teacherList;
	}
}
