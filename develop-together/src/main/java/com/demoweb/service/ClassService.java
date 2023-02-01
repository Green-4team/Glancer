package com.demoweb.service;

import java.util.List;

import com.demoweb.dto.BoardTagDto;
import com.demoweb.dto.ClassDto;
import com.demoweb.dto.ClassTagDto;

public interface ClassService {

	List<ClassDto> findClass();

	ClassDto findClassDetail(int classno);

	List<ClassTagDto> findClassTagByClassNo(int classno, String classType);

	void deleteClass(int classno);
	
}
