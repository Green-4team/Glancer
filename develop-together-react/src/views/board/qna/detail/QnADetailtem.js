import { CButton, CFormTextarea, CNavLink } from '@coreui/react';
import moment from 'moment';
import { BsEye } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HoverBlueBlock = styled.div`
.hoverBlue:hover {color: #24a0ed;}
`;

const QnADetailItem = ({ result }) => {
  const { /* boardNo, topicNo, deleted, */ memberId, title, content, regDate, views, topicName, tags } = result;

  return (
    <>
      <HoverBlueBlock>
        <div style={{display: "inline-block", marginRight: 5}} class="hoverBlue">Q&A</div>/
        <div style={{display: "inline-block", marginLeft: 5}} class="hoverBlue">{topicName}</div>
        <hr />
        <div>
          <div>{memberId}</div>
          <div>{moment(regDate).startOf('hour').fromNow()} · <BsEye /> {views}</div>
          <div style={{fontWeight: "bold", fontSize: 30, marginTop: 20}}>{title}</div>
          <div style={{marginTop: 30, marginBottom: 30}}>
            <div dangerouslySetInnerHTML={{__html: content}}></div>
          </div>
          
          <div style={{marginBottom: 30}}>
          {
            tags.map((tag) => {
              const { tagName } = tag;
              return  (
                        <CNavLink to='/dashboard' component={NavLink} style={{display: 'inline-block', marginRight: 10}}>
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
          <div style={{marginBottom: 30}}>0개의 댓글</div>
          <div style={{border: "1px solid", borderRadius: 10, padding: 20, borderColor: "lightgray"}}>
            <CFormTextarea style={{resize: "none", borderColor: "lightgray"}} readOnly>
              댓글을 쓰려면 로그인이 필요합니다.
            </CFormTextarea>
            <div style={{marginTop: 10, textAlign: "right", marginBottom: 10}}>
              <CButton color="info"
                        style={{color: 'white',
                                fontSize: 12,
                                border: "none",
                                marginRight: "auto",
                                paddingLeft: 30,
                                paddingRight: 30,
                                paddingTop: 10,
                                paddingBottom: 10}}
                        disabled>댓글 쓰기</CButton>
            </div>
          </div>
        </div>
        <div></div>
      </HoverBlueBlock>
    </>
  )
}

export default QnADetailItem
