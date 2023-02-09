import { CCard, CCardBody, CCardHeader, CCol, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const FreeLancerProfil = ({loginInfo}) => {

    const [FreeLancerInfo, setFreeLancerInfo] = useState({});

    useEffect(() => {
        const loadFreelancerDetailInfo = async (e) => {
            const url = `http://127.0.0.1:8081/account/loadFreelancerInfo?memberId=${loginInfo.memberId}`;
            const response = await axios.get(url);
            setFreeLancerInfo(response.data.results);
            console.log(response.data.results);
        };
        loadFreelancerDetailInfo();
    }, [loginInfo.memberId]);


    

    return (
        <>
        <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>{loginInfo.memberId}님의 프로필</strong>&nbsp;&nbsp;&nbsp;<Link to="/FreeEdit" style={{color:'black'}} state={{FreeLancerInfo:FreeLancerInfo}}>프로필 수정</Link>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">              
            </p>        
              <CTable hover>
                {/* <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead> */}
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row"><strong>이름</strong></CTableHeaderCell>
                    <CTableDataCell>{FreeLancerInfo.name}</CTableDataCell>
                    <CTableDataCell><strong>생년월일</strong></CTableDataCell>
                    <CTableDataCell>{FreeLancerInfo.birthday}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row"><strong>EMail</strong></CTableHeaderCell>
                    <CTableDataCell>{FreeLancerInfo.email}</CTableDataCell>
                    <CTableDataCell><strong>전화번호</strong></CTableDataCell>
                    <CTableDataCell>{FreeLancerInfo.phone}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row"><strong>직종</strong></CTableHeaderCell>
                    <CTableDataCell>{FreeLancerInfo.occupation}</CTableDataCell>
                    <CTableDataCell><strong>업무시작일</strong></CTableDataCell>
                    <CTableDataCell>{FreeLancerInfo.startdate}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row"><strong>업무가능여부</strong></CTableHeaderCell>
                    <CTableDataCell>{FreeLancerInfo.workstate === true ? <div>가능</div> : <div> 불가능 </div>}</CTableDataCell>                    
                  </CTableRow>
                </CTableBody>
              </CTable>    
          </CCardBody>
        </CCard>
      </CCol>
        </>


    )


}

export default FreeLancerProfil