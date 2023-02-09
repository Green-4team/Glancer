import { cilCheckCircle } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CButton } from '@coreui/react';
import axios from 'axios';
import moment from 'moment';
import { useState } from 'react';
import styled from 'styled-components';
import Editor from '../../other/Editor';

const HoverBlueBlock = styled.div`
.hoverBlue:hover {color: #24a0ed;}
img {
  width: 100%
}
`;

const CommentList = ({ comments, loginInfo, writer, chosen }) => {

  const [flag, setFlag] = useState(0);
  const [editcomment, setEditComment] = useState({
    commentNo: '',
    content: ''
  })

  const setContent = (data) => {
    setEditComment({...editcomment, "content": data})
  }

  const editComment = () => {
    const url = "http://127.0.0.1:8081/board/qnaEditComment";
    if (editcomment.content === '') {
      alert('내용을 입력해주세요')
    } else {
      console.log(editcomment)
    axios.post(url, editcomment, { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
          .then( response => {
            alert('댓글이 수정되었습니다');
            setFlag(0)
            window.location.reload();
          })
          .catch( e => {
            alert('error');
          });
    }
  }

  const deleteComment = (commentNo) => {
    const url = `http://127.0.0.1:8081/board/qnaDeleteComment?commentNo=${commentNo}`;
    axios.get(url)
         .then( response => {
          alert('댓글이 삭제되었습니다');
          window.location.reload();
         })
         .catch( e => {
          alert('error');
         });
  }

  const choseComment = (boardNo, commentNo) => {
    const url = `http://127.0.0.1:8081/board/qnaChooseComment?boardNo=${boardNo}&commentNo=${commentNo}`;
    axios.get(url)
         .then( response => {
          alert('댓글이 채택되었습니다');
          window.location.reload();
         })
         .catch( e => {
          alert('error');
         });
  }

  return (
    <>
      <HoverBlueBlock>
        <div style={{marginTop: 50}}>
          {
            comments.map((comment) => {
              const {commentNo, content, regDate, chose, memberId, boardNo} = comment;
              return (
                <div>
                  <hr />
                  {
                    flag === commentNo ? 
                    <div>
                      <Editor setContent={setContent} data={content} />
                      <CButton color="light"
                              onClick={(e) => { if (window.confirm("수정을 취소하시겠습니까?")) {
                                                  setFlag(0)
                                                } else {
                                                  console.log("수정 취소");
                                                }}}>취소</CButton>
                      <CButton color="info"
                              style={{color: 'white', marginLeft: 10}}
                              onClick={(e) => { if (window.confirm("수정을 완료하시겠습니까?")) {
                                                  editComment(comment);
                                                  e.preventDefault();
                                                } else {
                                                  console.log("등록 취소");
                                                }}}>수정</CButton>
                    </div> :
                    <div>
                      <div style={{display: 'flex'}}>
                        <div style={{display: 'inline-block', fontWeight: 'bold'}}>{memberId}</div>
                        {
                          chose === false ? 
                          <div style={{display: 'inline-block',
                                        marginLeft: 'auto'}}
                                onClick={ (e) => { if(loginInfo !== null && writer !== memberId && writer === loginInfo.memberId && chosen === false) {
                                                    if (window.confirm("채택하시겠습니까?")) {
                                                      choseComment(boardNo, commentNo);
                                                      e.preventDefault();
                                                    } else {
                                                      console.log("삭제 취소");
                                                    }
                                                  }}}><CIcon icon={cilCheckCircle} size="lg" /></div> :
                          <div style={{display: 'inline-block', marginLeft: 'auto', color: '#24a0ed'}}><CIcon icon={cilCheckCircle} size="lg" /></div>
                        }
                      </div>
                      <div>{moment(regDate).startOf('hour').fromNow()}</div>
                      <div style={{marginTop: 30, marginBottom: 30}}>
                        <div dangerouslySetInnerHTML={{__html: content}}></div>
                      </div>
                      <div style={{display: 'flex'}}>
                      { 
                        loginInfo !== null && loginInfo.memberId === memberId ?
                        <div style={{display: "inline-block", marginLeft: "auto"}}>
                          <div className='hoverBlue'
                              onClick={() => {
                                setFlag(commentNo);
                                setEditComment({...editcomment, "commentNo": commentNo})
                              }}
                              style={{display: 'inline-block', marginRight: 10}}>수정</div>
                          <div className='hoverBlue'
                              onClick={(e) => { if (window.confirm("삭제하시겠습니까?")) {
                                                  deleteComment(commentNo);
                                                  e.preventDefault();
                                                } else {
                                                  console.log("삭제 취소");
                                                }}}
                              style={{display: 'inline-block'}}>삭제</div>
                        </div> : ''
                      }
                      </div>
                    </div>
                  }
                </div>
              )
            })
          }
        </div>
      </HoverBlueBlock>
    </>
  )
}

export default CommentList
