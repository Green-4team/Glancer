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

	@Override
	public TeacherDto findTeacherDetail(String memberid, int teacherno) {
		
		TeacherDto teacherDetail = teacherMapper.selectTeacherDetail(memberid, teacherno);
		return teacherDetail;
	}

	@Override
	public void registerTeacher(TeacherDto register) {
		
		teacherMapper.registerTeacher(register);
		
	}

	@Override
	public void editTeacher(TeacherDto register) {
		
		teacherMapper.editTeacher(register);
		
	}

	@Override
	public void deleteTeacher(int teacherno) {
		
		teacherMapper.deleteTeacher(teacherno);
		
	}
}
