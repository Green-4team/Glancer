import { CButton, CCard, CCardBody, CCol, CForm, CFormInput, CFormLabel, CFormSelect } from "@coreui/react";
import Tagify from "@yaireo/tagify";
import "@yaireo/tagify/dist/tagify.css"; // Tagify CSS
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CFormCKEditor from "../../other/CFormCKEditor";

const QnAWrite = ({loginInfo}) => {

  const input = document.querySelector('input[name=basic]');
  let tagify = new Tagify(input); // initialize Tagify

  // 태그가 추가되면 이벤트 발생
  tagify.on('add', function() {
    console.log(tagify.value); // 입력된 태그 정보 객체
  })

  const [board, setBoard] = useState({
    topicNo: '',
    memberId: '',
    title: '',
    content: '',
    tagNames: ''
  })

  const navigate = useNavigate();
  const insertBoard = () => {
    debugger;
    const url = "http://127.0.0.1:8081/board/qnaWrite";
    console.log(tagify.value)
    let tags = null;
    if(tagify.value.length > 0) {
      tags = tagify.value.map((v)=> v.value)
    }
    // setBoard({...board, "tag": tagify.value})
    console.log(board)
    axios.post(url, {...board, "memberId": loginInfo.loginInfo.memberId, "tagNames": tags.toString()}, { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
          .then( response => {
            alert('게시물이 등록되었습니다');
            navigate('/board/qna/list');
          })
          .catch( e => {
            alert('error');
          });
  };

  useEffect(()=> {
    if (loginInfo.loginInfo === null) {
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
              <CFormSelect value={board.topicNo} onChange={(e) => {setBoard({...board, "topicNo": e.target.value})}}>
                <option>토픽을 선택해주세요</option>
                <option value={1}>기술</option>
                <option value={2}>커리어</option>
                <option value={3}>기타</option>
              </CFormSelect>
            </div>
            <div style={{marginTop: 30}}>
              <CFormLabel>제목</CFormLabel>
              <CFormInput value={board.title} onChange={(e) => {setBoard({...board, "title": e.target.value})}} />
            </div>
            <div style={{marginTop: 30}}>
              <CFormLabel>태그</CFormLabel>
              {/* <MultipleValueTextInput
                onItemAdded={(item, allItems) => console.log(`item added: ${board.tag}`)}
                onItemDeleted={(item, allItems) => console.log(`item removed: ${board.tag}`)}
                placeholder="hi" /> */}

              <div>
                <input style={{border: 'solid 1px', borderColor: 'lightgray', width: 122, height: 42.5}} name='basic'></input>
              </div>

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
                     onClick={(e) => { if (window.confirm("게시물을 등록하시겠습니까?")) {
                                        insertBoard(board);
                                        e.preventDefault();
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
