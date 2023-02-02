package com.demoweb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.demoweb.dto.BoardTagDto;
import com.demoweb.dto.ClassDto;
import com.demoweb.dto.ClassTagDto;
import com.demoweb.mapper.ClassMapper;

@Service("classService")
public class ClassServiceImpl implements ClassService{

	@Autowired
	@Qualifier("classMapper")
	private ClassMapper classMapper;
	
	@Override
	public List<ClassDto> findClass() {
		
		List<ClassDto> classList = classMapper.selectAllClassList();
		return classList;
	}

	@Override
	public ClassDto findClassDetail(int classno) {
		
		ClassDto classDetail = classMapper.selectClassDetail(classno);
		return classDetail;
	}

	@Override
	public List<ClassTagDto> findClassTagByClassNo(int classno, String classType) {
		
		List<ClassTagDto> tags = classMapper.selectClassTagByClassNo(classno, classType);
		return tags;
	}

	@Override
	public void deleteClass(int classno) {
		
		classMapper.deleteClass(classno);
		
	}

	@Override
	public List<ClassTagDto> findClassTag(int classno) {
		
		List<ClassTagDto> tags = classMapper.selectClassTag(classno);
		return tags;
	}

}
