package com.demoweb.service;

import java.util.List;

import com.demoweb.dto.ClassDto;

public interface ClassService {

	List<ClassDto> findClass();

	List<ClassDto> findClassDetail(int classno);
	
}
