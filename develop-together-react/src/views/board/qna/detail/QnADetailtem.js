import { CNavLink } from '@coreui/react';
import axios from 'axios';
import moment from 'moment';
import { BsEye } from 'react-icons/bs';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CommentList from '../comment/CommentList';
import CommentWrite from '../comment/CommentWrite';

const HoverBlueBlock = styled.div`
.hoverBlue:hover {color: #24a0ed;}
img {
  width: 100%
}
`;

const QnADetailItem = ({ result, loginInfo }) => {
  const { /* deleted, */ boardNo, memberId, title, content, regDate, views, topicName, tags, topicNo, comments, chosen } = result;
  console.log(result)
  const navigate = useNavigate();

  let commentCount
  if (comments === null) {
    commentCount = 0
  } else {
    commentCount = comments.length
  }
  
  const deleteBoard = () => {
    const url = `http://127.0.0.1:8081/board/qnaDelete?boardNo=${boardNo}`;
    axios.get(url)
         .then( response => {
          alert('게시물이 삭제되었습니다');
          navigate('/board/qna/list', {state: { loginInfo: loginInfo }});
         })
         .catch( e => {
          alert('error');
         });
  }

  return (
    <>
      <HoverBlueBlock>
        <div style={{display: "inline-block", marginRight: 5}} class="hoverBlue">Q&A</div>/
        <div style={{display: "inline-block", marginLeft: 5}}
             class="hoverBlue"
             onClick={() => {
              navigate('/board/qna/list', {state: { loginInfo: loginInfo, topicNo: topicNo }});
             }} >{topicName}</div>
        <hr />
        <div>
          <div style={{display: "flex"}}>
            <div style={{display: 'inline-block', }}>{memberId}</div>
            { 
              loginInfo !== null && loginInfo.memberId === memberId ?
                <div style={{display: "inline-block", marginLeft: "auto"}}>
                  <div className='hoverBlue'
                      onClick={() => {
                        navigate('/board/qna/edit', {state: { loginInfo: loginInfo, result: result }});
                      }}
                      style={{display: 'inline-block', marginRight: 10}}>수정</div>
                  <div className='hoverBlue'
                       onClick={(e) => { if (window.confirm("삭제하시겠습니까?")) {
                                          deleteBoard(boardNo);
                                          e.preventDefault();
                                         } else {
                                          console.log("삭제 취소");
                                         }}}
                      style={{display: 'inline-block'}}>삭제</div>
                </div> : ''
            }
          </div>
          <div>{moment(regDate).startOf('hour').fromNow()} · <BsEye /> {views}</div>
          
          
          <div style={{fontWeight: "bold", fontSize: 30, marginTop: 20}}>{title}</div>
          
          <div style={{marginTop: 30, marginBottom: 30}}>
            <div dangerouslySetInnerHTML={{__html: content}}></div>
          </div>
          
          <div style={{marginBottom: 30}}>
          {
            tags.map((tag) => {
              const { tagName, tagNo } = tag;
              return  (
                        <CNavLink to='/board/qna/tagsearch'
                                  component={NavLink}
                                  style={{ display: 'inline-block', marginRight: 10 }}
                                  state={{ tagNo: tagNo, tagName: tagName, loginInfo: loginInfo }}>
                          <div class="hoverBlue"
                                style={{backgroundColor: 'gainsboro',
                                        borderRadius: 15,
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                        paddingTop: 1,
                                        paddingBottom: 1,
                                        fontSize: 14}} >#{ tagName }</div>
                        </CNavLink>
                      )
            })
          }
          </div>
        </div>
        <hr />
        <div>
          <div style={{marginBottom: 30}}>{commentCount}개의 댓글</div>
          <CommentWrite loginInfo={loginInfo} boardNo={boardNo} />
        </div>
        <CommentList loginInfo={loginInfo} comments={comments} writer={memberId} chosen={chosen} />
      </HoverBlueBlock>
    </>
  )
}

export default QnADetailItem
