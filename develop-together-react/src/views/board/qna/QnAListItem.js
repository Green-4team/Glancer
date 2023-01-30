import { cilCheckCircle } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CNavLink } from '@coreui/react'
import { NavLink } from 'react-router-dom'

const QnAListItem = ({ result }) => {
  const { boardNo, topicNo, memberId, title, content, regDate, views, deleted } = result;

  return (
    <>
      <tr>
        <td colSpan={3}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'inline-block'}}>{memberId} {regDate}</div>
            <div style={{display: 'inline-block', textAlign: 'right', marginLeft: 'auto'}}><CIcon icon={cilCheckCircle} size="lg" /></div>
          </div>
          <div style={{fontWeight: 'bold', fontSize: 20, marginTop: 5, marginBottom: 5}}>{title}</div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div><CButton color='light' size='sm' style={{color: '#24a0ed', paddingTop: 0, paddingBottom: 0, marginRight: 10, display: 'inline-block'}}>{topicNo}</CButton>
            <CNavLink to='/dashboard' component={NavLink} style={{display: 'inline-block'}}>#태그 #태그 #태그</CNavLink></div>
            <div>{views} 댓글수</div>
          </div>
        </td>
      </tr>
    </>
  )
}

export default QnAListItem
