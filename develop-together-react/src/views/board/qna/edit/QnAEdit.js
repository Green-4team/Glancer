import { CButton, CCard, CCardBody, CCol, CForm, CFormInput, CFormLabel, CFormSelect } from "@coreui/react";
import Tagify from "@yaireo/tagify";
import "@yaireo/tagify/dist/tagify.css"; // Tagify CSS
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Editor from "../../other/Editor";

const TagBlock = styled.div`
.tagify{    
  width: 100%;
  height: 38px;
  border-color: silver;
  border-radius: 5px;
}
`;

const SelectBlock = styled.div`
.selected{    
 option {
  selected
 }
}
`;

const QnAEdit = ({loginInfo, result}) => {

  const { /* regDate, topicName, regDate, deleted, */ boardNo, memberId, title, content, views, tags, topicNo } = result;
  
  const input = document.querySelector('input[name=basic]');
  let tagify = new Tagify(input); // initialize Tagify

  // 태그가 추가되면 이벤트 발생
  tagify.on('add', function() {
    console.log(tagify.value); // 입력된 태그 정보 객체
  })

  let tagnames = null;
  if(tags.length > 0) {
    tagnames = tags.map((tag)=> tag.tagName)
  }

  const [board, setBoard] = useState({
    boardNo: boardNo,
    topicNo: topicNo,
    memberId: memberId,
    title: title,
    content: content,
    tagNames: tagnames.toString(),
    views: views
  })  

  const navigate = useNavigate();
  const editBoard = () => {
    const url = "http://127.0.0.1:8081/board/qnaEdit";
    let tags = null;
    if(tagify.value.length > 0) {
      tags = tagify.value.map((v)=> v.value)
    }
    
    if (board.topicNo === '') {
      alert('토픽을 선택해주세요')
    } else if (board.title === '') {
      alert('제목을 입력해주세요')
    } else if (board.content === '') {
      alert('내용을 입력해주세요')
    } else {
    axios.post(url, {...board, "tagNames": tags.toString()}, { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
          .then( response => {
            alert('게시물이 수정되었습니다');
            navigate('/board/qna/detail', {state: { loginInfo: loginInfo, boardNo: boardNo }});
          })
          .catch( e => {
            alert('error');
          });
    }
  };

  const setContent = (data) => {
    setBoard({...board, "content": data})
  }

  useEffect(()=> {
    if (loginInfo === null) {
      alert("로그인이 필요합니다")
      navigate('/login');
    } 
  })
  
  return (
    <>
      <CCol xs={8} style={{margin: 'auto'}}>
        <CCard className="mb-4" style={{border: 0}}>
          <CCardBody>
            <CForm>
            <h2>궁금증 해결하기</h2>
            <div style={{marginTop: 30}}>
              <CFormLabel>토픽</CFormLabel>
              <SelectBlock>
              <CFormSelect value={board.topicNo} onChange={(e) => {setBoard({...board, "topicNo": e.target.value})}}>
                <option value={1}>기술</option>
                <option class={{...(board.topicNo === 2 ? '.seleted' : '')}} value={2}>커리어</option>
                <option class={{...(board.topicNo === 3 ? '.seleted' : '')}} value={3}>기타</option>
              </CFormSelect>
              </SelectBlock>
            </div>
            <div style={{marginTop: 30}}>
              <CFormLabel>제목</CFormLabel>
              <CFormInput value={board.title} onChange={(e) => {setBoard({...board, "title": e.target.value})}} />
            </div>
            <div style={{marginTop: 30}}>
              <CFormLabel>태그</CFormLabel>
              <TagBlock>  
                <input value={board.tagNames}
                       onChange={(e) => {setBoard({...board, "tagNames": e.target.value})}}
                       style={{ width: '100%', 
                                height: '38px',
                                border: 'solid 1px',
                                borderColor: 'silver',
                                borderRadius: '5px' }} name='basic'></input>
              </TagBlock>
            </div>
            <div style={{marginTop: 30}}>
              <CFormLabel>본문</CFormLabel>
              <Editor setContent={setContent} data={board.content} />
            </div>
            <div style={{textAlign: "right"}}>
            <CButton color="light"
                     onClick={() => { if (window.confirm("수정을 취소하시겠습니까?")) {
                                      navigate('/board/qna/detail', {state: { loginInfo: loginInfo, boardNo: boardNo }});
                                      } else {
                                        console.log("작성 취소");
                                      }}}>취소</CButton>
            <CButton color="info"
                     style={{color: 'white', marginLeft: 10}}
                     onClick={(e) => { console.log(board)
                                       if (window.confirm("수정을 완료하시겠습니까?")) {
                                        editBoard(board);
                                        e.preventDefault();
                                       } else {
                                        console.log("등록 취소");
                                       }}}>수정</CButton>
            </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  );
};

export default QnAEdit;
