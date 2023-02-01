import { ClassicEditor } from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { CButton, CCard, CCardBody, CCol, CForm, CFormInput, CFormLabel, CFormSelect, CNavLink } from "@coreui/react";
import axios from "axios";
import { Component, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import styled from "styled-components";
import CFormCKEditor from "../../other/CFormCKEditor";

const QnAWrite = (props) => {

  // const [result, setResult] = useState(null);
  
  // useEffect : mount(초기화), update(상태변화) 이벤트 처리기 등록
  // useEffect(() => {
  //   const loadQnAList = async (e) => {
  //     const url = `http://127.0.0.1:8081/board/qnaDetail?boardNo=`;
  //     const response = await axios.get(url);
  //     setResult(response.data.result);
  //     // setPage(response.data.page);
  //     // setPager(response.data.pager);
  //   };
  //   loadQnAList();
  // }, []);

  // if (!result) {
  //   return;
  // }
  // const {pageNo, pageCount} = pager;

  const [board, setBoard] = useState({
    topicno: '',
    memberid: 'gyu',
    title: '',
    content: ''
  })

  const insertBoard = () => {
    const url = "http://127.0.0.1:8081/board/qnaWrite";
    axios.post(url, board, { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
          .then( response => {
            alert('게시물이 등록되었습니다');
            Navigate('/board/qna/list');
          })
          .catch( e => {
            alert('error');
          });
  };

  return (
    <>
      <CCol xs={8} style={{margin: 'auto'}}>
        <CCard className="mb-4" style={{border: 0}}>
          <CCardBody>
            <CForm>
            <h2>궁금증 해결하기</h2>
            <div style={{marginTop: 30}}>
              <CFormLabel>토픽</CFormLabel>
              <CFormSelect value={board.topicno} onChange={(e) => {setBoard({...board, "topicno": e.target.value})}}>
                <option>토픽을 선택해주세요</option>
                <option value={1}>기술</option>
                <option value={2}>커리어</option>
                <option value={3}>기타</option>
              </CFormSelect>
            </div>
            <div style={{marginTop: 30}}>
              제목
              <CFormInput value={board.title} onChange={(e) => {setBoard({...board, "title": e.target.value})}} />
            </div>
            <div style={{marginTop: 30}}>
              태그<CFormInput></CFormInput>
            </div>
            <div style={{marginTop: 30}}>
              본문<CFormCKEditor onChange2={(data)=> {setBoard({...board, "content": data})}} />
            </div>
            <div style={{textAlign: "right"}}>
            <CButton color="light"
                     onClick={() => { if (window.confirm("작성을 취소하시겠습니까?")) {
                                        window.location.replace('#/board/qna/list');
                                        window.location.reload();
                                      } else {
                                        console.log("작성 취소");
                                      }}}>취소</CButton>
            <CButton color="info"
                     style={{color: 'white', marginLeft: 10}}
                     type="submit"
                     onClick={(e) => { if (window.confirm("게시물을 등록하시겠습니까?")) {
                                        insertBoard(board);
                                        e.preventDefault();
                                        console.log(board);
                                        // window.location.replace('#/board/qna/list');
                                        // window.location.reload();
                                      } else {
                                        console.log("등록 취소");
                                      }}}>등록</CButton>
            </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  );
};

export default QnAWrite;
