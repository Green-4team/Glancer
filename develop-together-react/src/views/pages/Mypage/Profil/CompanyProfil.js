import { CCard, CCardBody, CCardHeader, CCol, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const CompanyProfil = ({loginInfo}) => {

    const [CompanyInfo, setCompanyInfo] = useState({});

    useEffect(() => {
        const loadCompanyDetailInfo = async (e) => {
            const url = `http://127.0.0.1:8081/account/loadCompanyrInfo?memberId=${loginInfo.memberId}`;
            const response = await axios.get(url);
            setCompanyInfo(response.data.results);
            console.log(response.data.results);
        };
        loadCompanyDetailInfo();
    }, [loginInfo.memberId]);

    console.log(CompanyInfo)
    

    return (
        <>
        <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>{loginInfo.memberId}님의 프로필</strong>&nbsp;&nbsp;&nbsp;<Link to="/CompanyEdit" style={{color:'black'}} state={{CompanyInfo:CompanyInfo, loginInfo:loginInfo}}>프로필 수정</Link>
          </CCardHeader>
          <CCardBody>
              <CTable hover>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">기업명</CTableHeaderCell>
                    <CTableDataCell>{CompanyInfo.name}</CTableDataCell>
                    <CTableDataCell>담당자 명</CTableDataCell>
                    <CTableDataCell>{CompanyInfo.mname}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">담당자 직책</CTableHeaderCell>
                    <CTableDataCell>{CompanyInfo.mpostion}</CTableDataCell>
                    <CTableDataCell>담당자 연락처</CTableDataCell>
                    <CTableDataCell>{CompanyInfo.mphone}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">담당자 이메일</CTableHeaderCell>
                    <CTableDataCell>{CompanyInfo.memail}</CTableDataCell>
                    <CTableDataCell>주소</CTableDataCell>
                    <CTableDataCell>{CompanyInfo.address}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">인원수</CTableHeaderCell>
                    <CTableDataCell>{CompanyInfo.headcount}명</CTableDataCell>     
                    <CTableDataCell >사업 내용</CTableDataCell>
                    <CTableDataCell>{CompanyInfo.contnent}명</CTableDataCell>                 
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">연간 매출</CTableHeaderCell>
                    <CTableDataCell>{CompanyInfo.annualsales}만원</CTableDataCell>     
                    <CTableHeaderCell scope="row">사업자 번호</CTableHeaderCell>
                    <CTableDataCell>{CompanyInfo.crn}</CTableDataCell>                 
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">사업자 등록증</CTableHeaderCell>
                    <CTableDataCell>{CompanyInfo.br}</CTableDataCell>                                    
                  </CTableRow>
                </CTableBody>
              </CTable>    
          </CCardBody>
        </CCard>
      </CCol>
        </>


    )


}

export default CompanyProfil