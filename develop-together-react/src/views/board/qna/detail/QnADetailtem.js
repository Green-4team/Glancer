import { cilCheckCircle } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CNavLink } from '@coreui/react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const HoverBlueBlock = styled.div`
.hoverBlue:hover {color: #24a0ed;}
`;

const QnAListItem = ({ result }) => {
  const { boardNo, topicNo, memberId, title, content, regDate, views, deleted, topicName, tags } = result;

  return (
    <>
      
      <tr>
        <td colSpan={3}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'inline-block'}}>{memberId} {regDate}</div>
            <div style={{display: 'inline-block', textAlign: 'right', marginLeft: 'auto'}}><CIcon icon={cilCheckCircle} size="lg" /></div>
          </div>
          <HoverBlueBlock>
          <div style={{fontWeight: 'bold', fontSize: 18, marginTop: 8, marginBottom: 8}} class="hoverBlue">{title}</div>
          </HoverBlueBlock>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div><CButton color='light' size='sm' style={{color: '#24a0ed', paddingTop: 0, paddingBottom: 0, marginRight: 10, display: 'inline-block'}}>{topicName}</CButton>
              {
                tags.map((tag) => {
                  const { tagName } = tag;
                  return  (
                            <CNavLink to='/dashboard' component={NavLink} style={{display: 'inline-block', marginRight: 10}}>
                              <HoverBlueBlock>
                                <div class="hoverBlue">#{ tagName }</div>
                              </HoverBlueBlock>
                            </CNavLink>
                          )
                })
              }
            </div>
            <div>{views} 댓글수</div>
          </div>
        </td>
      </tr>
    </>
  )
}

export default QnAListItem
