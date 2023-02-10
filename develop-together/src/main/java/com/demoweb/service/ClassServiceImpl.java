package com.demoweb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.demoweb.dto.ApplicationDto;
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

	@Override
	public void writeClass(ClassDto register, String[] tags) {
		
		// register.getClassno() == 0
		classMapper.insertClass(register);
		// register.getClassno() == 새로 만들어진 classno
		
		if (tags != null) {
			for (String tagno : tags) {
				ClassTagDto dto = new ClassTagDto();
				dto.setTagNo(Integer.parseInt(tagno));
				dto.setClassno(register.getClassno());
				classMapper.insertClassTags(dto);
			}
		}
		
		
	}

	@Override
	public void editClass(ClassDto register, String[] tags) {
		// register.getClassno() == 0
				classMapper.editClass(register);
				// register.getClassno() == 새로 만들어진 classno
				
				classMapper.deleteTags(register.getClassno());
				// 기존의 태그 삭제 처리( 클래스 번호 사용 )
				
				
				if (tags != null) {
					for (String tagno : tags) {
						ClassTagDto dto = new ClassTagDto();
						dto.setTagNo(Integer.parseInt(tagno));
						dto.setClassno(register.getClassno());
						classMapper.insertClassTags(dto);
					}
				}
	}

	@Override
	public void applicationClass(ApplicationDto apply) {
		
		classMapper.applicationClass(apply);
		
	}

//	@Override
//	public List<ClassDto> findClassName() {
//		List<ClassDto> forAcaName = classMapper.findClassName();
//		return forAcaName;
//	}

}
