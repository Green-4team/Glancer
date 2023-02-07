import { cilAlignLeft, cilChevronDoubleLeft, cilChevronDoubleRight, cilLoopCircular, cilPencil } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CButton, CCard, CCardBody, CCol, CFormInput, CNavLink } from "@coreui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import QnAListItem from "./QnAListItem";

const HoverBlueBlock = styled.div`
div {
  display: inline-block;
}
.hoverBlue:hover {color: #24a0ed;}
`;

const QnAList = (loginInfo) => {
  const [results, setResults] = useState(null);
  const [page, setPage] = useState(1);
  const [pager, setPager] = useState(null);

  // useEffect : mount(초기화), update(상태변화) 이벤트 처리기 등록
  useEffect(() => {
    const loadQnAList = async (e) => {
      const url = `http://127.0.0.1:8081/board/qnaList?pageNo=${page}`;
      const response = await axios.get(url);
      setResults(response.data.results);
      setPage(response.data.page);
      setPager(response.data.pager);
    };
    loadQnAList();
  }, [page]);

  if (!results) {
    return;
  }
  const {pageNo, pageCount} = pager;
  
  return (
    <>
      <CCol xs={8} style={{margin: 'auto'}}>
        <CCard className="mb-4" style={{border: 0}}>
          <CCardBody>
            <div style={{display: 'flex'}}>
              <div style={{display: 'inline-block', marginRight: 'auto'}}>
                <CNavLink to='/board/qna/write' component={NavLink} style={{display: 'inline-block', marginRight: 10}} state={{ loginInfo: loginInfo}}>
                  <CButton color="info" style={{color: 'white', fontSize: 12}}><CIcon icon={cilPencil} size="sm"/> 작성하기</CButton>
                </CNavLink>
              </div>
              <div style={{textAlign: 'center', display: 'inline-block', width: '70%', margin: 'auto'}}>
                <CButton color='light' variant='ghost' style={{color: 'black', marginRight: 20}}>기술</CButton>
                <CButton color='light' variant='ghost' style={{color: 'black', marginRight: 20}}>커리어</CButton>
                <CButton color='light' variant='ghost' style={{color: 'black', marginRight: 20}}>기타</CButton>
                <CButton color='light' variant='ghost' style={{color: 'black', marginRight: 20}}>전체</CButton>
              </div>
              <div style={{display: 'inline-block', marginLeft: 'auto'}}>
                <CButton color="dark" variant='outline' style={{fontSize: 12}}><CIcon icon={cilAlignLeft} size="sm"/> 최신순</CButton>
              </div>
            </div>
            <hr />
            <table className="table">
              <thead>
                <tr style={{verticalAlign: "middle"}}>
                  <th style={{width: "30%"}}>
                    <HoverBlueBlock>
                      <div class="hoverBlue">
                        <CIcon icon={cilLoopCircular} size="lg"/>
                      </div>
                    </HoverBlueBlock>
                  </th>
                  <th style={{width: "40%"}}><CFormInput type="text" placeholder="Q&A 내에서 검색" style={{borderRadius: 40, width: '60%', margin: 'auto'}}/></th>
                  <th style={{width: "30%"}}>
                    <div style={{textAlign: 'right', fontWeight: "normal", fontSize: 14}}>
                      <HoverBlueBlock>
                        <div>{pageNo} / {pageCount} 페이지</div>
                        <CButton onClick={() => setPage(page - 1)}
                                 disabled={page === 1}
                                 style={{marginLeft: 16, color: "black", backgroundColor: "white", border: "none"}}>
                          <div class="hoverBlue"><CIcon icon={cilChevronDoubleLeft} size="lg" /></div>
                        </CButton>
                        <CButton onClick={() => setPage(page + 1)}
                                 disabled={page === pageCount}
                                 style={{color: "black", backgroundColor: "white", border: "none"}}>
                          <div class="hoverBlue"><CIcon icon={cilChevronDoubleRight} size="lg" /></div>
                        </CButton>
                      </HoverBlueBlock>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => {
                  return <QnAListItem key={result.boardNo} result={result} loginInfo={loginInfo} />
                })}
              </tbody>
            </table>
              {/* <Pagination total={500} page={page} setPage={setPage} /> */}
          </CCardBody>
        </CCard>
      </CCol>
    </>
  );
};

export default QnAList;
