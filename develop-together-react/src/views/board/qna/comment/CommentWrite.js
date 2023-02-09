import { CButton, CFormTextarea } from '@coreui/react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Editor from '../../other/Editor';

const HoverBlueBlock = styled.div`
.hoverBlue:hover {color: #24a0ed;}
img {
  width: 100%
}
`;

const CommentWrite = ({ boardNo, loginInfo }) => {
  
  const navigate = useNavigate();
  const [comment, setComment] = useState({
    boardNo: boardNo,
    memberId: '',
    content: '',
  })

  const setContent = (data) => {
    setComment({...comment, "content": data})
  }

  const insertComment = () => {
    const url = "http://127.0.0.1:8081/board/qnaWriteComment";
    if (comment.content === '') {
      alert('내용을 입력해주세요')
    } else {
      axios.post(url, {...comment, "memberId": loginInfo.memberId}, { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
          .then( response => {
            alert('댓글이 등록되었습니다');
            navigate('/board/qna/detail', {state: { loginInfo: loginInfo, boardNo: boardNo }});
            window.location.reload();
          })
          .catch( e => {
            alert('error');
          });
    }
  }
  
  return (
    <>
      <HoverBlueBlock>
        {
          (loginInfo === null) ?
            <div style={{border: "1px solid", borderRadius: 10, padding: 20, borderColor: "lightgray"}}>
              <CFormTextarea style={{resize: "none", borderColor: "lightgray"}} readOnly>
                댓글을 쓰려면 로그인이 필요합니다.
              </CFormTextarea>
              <div style={{marginTop: 10, textAlign: "right", marginBottom: 10}}>
                <CButton color="info"
                          onClick={() => {alert("로그인이 필요합니다")
                                          navigate('/login')}}
                          style={{color: 'white',
                                  fontSize: 12,
                                  border: "none",
                                  marginRight: "auto",
                                  paddingLeft: 30,
                                  paddingRight: 30,
                                  paddingTop: 10,
                                  paddingBottom: 10}}>댓글 쓰기</CButton>
              </div>
            </div> :
            <div style={{border: "1px solid", borderRadius: 10, padding: 20, borderColor: "lightgray"}}>
              <Editor setContent={setContent} />
              <div style={{marginTop: 10, textAlign: "right", marginBottom: 10}}>
                <CButton color="info"
                          onClick={(e) => { if (window.confirm("댓글을 등록하시겠습니까?")) {
                                            insertComment(comment);
                                            e.preventDefault();
                                            } else {
                                            console.log("등록 취소");
                                            }}}
                          style={{color: 'white',
                                  fontSize: 12,
                                  border: "none",
                                  marginRight: "auto",
                                  paddingLeft: 30,
                                  paddingRight: 30,
                                  paddingTop: 10,
                                  paddingBottom: 10}}>댓글 쓰기</CButton>
              </div>
            </div>
        }
      </HoverBlueBlock>
    </>
  )
}

export default CommentWrite
