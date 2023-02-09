import { cilCheckCircle } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CButton, CNavLink } from '@coreui/react';
import moment from 'moment/moment';
import { BsChatLeftDots, BsEye } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HoverBlueBlock = styled.div`
.hoverBlue:hover {color: #24a0ed;}
`;

const QnATagSearchItem = ({ result, loginInfo, onSetTopicNo }) => {
  const { /* content, deleted, */ boardNo, memberId, title, regDate, views, topicName, tags, topicNo } = result;
  
  return (
    <>
      
      <tr>
        <td colSpan={3}>
          <div style={{marginTop: 10, marginBottom: 10}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'inline-block'}}>{memberId} · {moment(regDate).startOf('hour').fromNow()}</div>
            <div style={{display: 'inline-block', textAlign: 'right', marginLeft: 'auto'}}><CIcon icon={cilCheckCircle} size="lg" /></div>
          </div>
          <HoverBlueBlock>
            <CNavLink to='/board/qna/detail' component={NavLink} style={{display: 'inline-block', marginRight: 10}} state={{ boardNo: boardNo, loginInfo: loginInfo }}>
              <div style={{fontWeight: 'bold', fontSize: 18, marginTop: 8, marginBottom: 8}} class="hoverBlue">{title}</div>
            </CNavLink>
          </HoverBlueBlock>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>

              <CButton color='light'
                       size='sm'
                       onClick={ () => {
                        onSetTopicNo({ topicNo: topicNo })
                       }}
                       style={{color: '#24a0ed',
                               paddingTop: 0,
                               paddingBottom: 0,
                               marginRight: 10,
                               display: 'inline-block'}}>{topicName}</CButton>
              {
                tags.map((tag) => {
                  const { tagName } = tag;
                  return  (
                            <CNavLink to='/board/qna/tagsearch' component={NavLink} style={{display: 'inline-block', marginRight: 10}} state={{ tagName: tagName, loginInfo: loginInfo }}>
                              <HoverBlueBlock>
                                <div class="hoverBlue">#{ tagName }</div>
                              </HoverBlueBlock>
                            </CNavLink>
                          )
                })
              }
            </div>
            <div style={{fontSize: 16}}><BsEye />&nbsp;{views}&nbsp;&nbsp;&nbsp;&nbsp;<BsChatLeftDots />&nbsp;댓글수</div>
            
          </div>
          </div>
        </td>
      </tr>
    </>
  )
}

export default QnATagSearchItem
