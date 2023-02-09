import { CCard, CCardBody, CCardHeader, CCol, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const AcademyProfil = ({loginInfo}) => {

    const [AcademyInfo, setAcademyInfo] = useState({});

    useEffect(() => {
        const loadCompanyDetailInfo = async (e) => {
            const url = `http://127.0.0.1:8081/account/loadCompanyrInfo?memberId=${loginInfo.memberId}`;
            const response = await axios.get(url);
            setAcademyInfo(response.data.results);
            console.log(response.data.results);
        };
        loadCompanyDetailInfo();
    }, [loginInfo.memberId]);

    console.log(AcademyInfo)
    

    return (
        <>
        <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>{loginInfo.memberId}님의 프로필</strong>&nbsp;&nbsp;&nbsp;<Link to="/AcademyEdit" style={{color:'black'}} state={{AcademyInfo:AcademyInfo}}>프로필 수정</Link>
          </CCardHeader>
          <CCardBody>
              <CTable hover>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row"><strong>학원명</strong></CTableHeaderCell>
                    <CTableDataCell>{AcademyInfo.name}</CTableDataCell>
                    <CTableDataCell><strong>담당자 명</strong></CTableDataCell>
                    <CTableDataCell>{AcademyInfo.mname}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row"><strong>담당자 직책</strong></CTableHeaderCell>
                    <CTableDataCell>{AcademyInfo.mpostion}</CTableDataCell>
                    <CTableDataCell><strong>담당자 연락처</strong></CTableDataCell>
                    <CTableDataCell>{AcademyInfo.mphone}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row"><strong>담당자 이메일</strong></CTableHeaderCell>
                    <CTableDataCell>{AcademyInfo.memail}</CTableDataCell>
                    <CTableDataCell><strong>주소</strong></CTableDataCell>
                    <CTableDataCell>{AcademyInfo.address}</CTableDataCell>
                  </CTableRow>                 
                </CTableBody>
              </CTable>    
          </CCardBody>
        </CCard>
      </CCol>
        </>


    )


}

export default AcademyProfil