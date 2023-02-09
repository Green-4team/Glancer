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
            <strong>{loginInfo.memberId}님의 프로필</strong>&nbsp;&nbsp;&nbsp;<Link to="/CompanyEdit" style={{color:'black'}} state={{CompanyInfo:CompanyInfo}}>프로필 수정</Link>
          </CCardHeader>
          <CCardBody>
              <CTable hover>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row"><strong>기업명</strong></CTableHeaderCell>
                    <CTableDataCell>{CompanyInfo.name}</CTableDataCell>
                    <CTableDataCell><strong>담당자 명</strong></CTableDataCell>
                    <CTableDataCell>{CompanyInfo.mname}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row"><strong>담당자 직책</strong></CTableHeaderCell>
                    <CTableDataCell>{CompanyInfo.mpostion}</CTableDataCell>
                    <CTableDataCell><strong>담당자 연락처</strong></CTableDataCell>
                    <CTableDataCell>{CompanyInfo.mphone}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row"><strong>담당자 이메일</strong></CTableHeaderCell>
                    <CTableDataCell>{CompanyInfo.memail}</CTableDataCell>
                    <CTableDataCell><strong>주소</strong></CTableDataCell>
                    <CTableDataCell>{CompanyInfo.address}</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row"><strong>인원수</strong></CTableHeaderCell>
                    <CTableDataCell>{CompanyInfo.headcount}명</CTableDataCell>     
                    <CTableDataCell ><strong>사업 내용</strong></CTableDataCell>
                    <CTableDataCell>{CompanyInfo.contnent}명</CTableDataCell>                 
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row"><strong>연간 매출</strong></CTableHeaderCell>
                    <CTableDataCell>{CompanyInfo.annualsales}만원</CTableDataCell>     
                    <CTableHeaderCell scope="row"><strong>사업자 번호</strong></CTableHeaderCell>
                    <CTableDataCell>{CompanyInfo.crn}</CTableDataCell>                 
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row"><strong>사업자 등록증</strong></CTableHeaderCell>
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