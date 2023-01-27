import { cilAlignLeft, cilCheckCircle, cilLoopCircular, cilPencil } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCol, CFormInput, CNavLink } from '@coreui/react'
import { NavLink } from 'react-router-dom'

const QnA = () => {
  return (
    <>
      <CCol xs={10} style={{margin: 'auto'}}>
        <CCard className="mb-4" style={{border: 0}}>
          <CCardBody>
            <div style={{display: 'flex'}}>
              <div style={{display: 'inline-block', marginRight: 'auto'}}>
                <CButton color="info" style={{color: 'white', fontSize: 12}}><CIcon icon={cilPencil} size="sm"/> 작성하기</CButton>
              </div>
              <div style={{textAlign: 'center', display: 'inline-block', width: '70%', margin: 'auto'}}>
                <CButton color='light' variant='ghost' style={{color: 'black', marginRight: 20}}>기술</CButton>
                <CButton color='light' variant='ghost' style={{color: 'black', marginRight: 20}}>커리어</CButton>
                <CButton color='light' variant='ghost' style={{color: 'black', marginRight: 20}}>기타</CButton>
                <CButton color='light' variant='ghost' style={{color: 'black', marginRight: 20}}>전체</CButton>
              </div>
              <div style={{display: 'inline-block', marginLeft: 'auto'}}>
                <CButton color="dark" variant='outline' style={{fontSize: 12}}><CIcon icon={cilAlignLeft} size="sm"/> 추천순</CButton>
              </div>
            </div>
            <hr />
          <table className="table">
            <thead>
              <tr>
                <th><CIcon icon={cilLoopCircular} size="lg"/></th>
                <th><CFormInput type="text" placeholder="Q&A 내에서 검색" style={{borderRadius: 40, width: '30%', margin: 'auto'}}/></th>
                <th><div style={{textAlign: 'right'}}>Example</div></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={3}>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'inline-block'}}>작성자, 작성일자</div>
                    <div style={{display: 'inline-block', textAlign: 'right', marginLeft: 'auto'}}><CIcon icon={cilCheckCircle} size="lg" /></div>
                  </div>
                  <div style={{fontWeight: 'bold', fontSize: 20, marginTop: 5, marginBottom: 5}}>제목입니다</div>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div><CButton color='light' size='sm' style={{color: '#24a0ed', paddingTop: 0, paddingBottom: 0, marginRight: 10, display: 'inline-block'}}>토픽</CButton>
                    <CNavLink to='/dashboard' component={NavLink} style={{display: 'inline-block'}}>#태그</CNavLink></div>
                    <div> 조회수, 댓글수</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </CCardBody>
      </CCard>
      </CCol>
    </>
  )
}

export default QnA
