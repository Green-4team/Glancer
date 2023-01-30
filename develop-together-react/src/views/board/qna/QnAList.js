import { cilAlignLeft, cilLoopCircular, cilPencil } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CButton, CCard, CCardBody, CCol, CFormInput } from "@coreui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import QnAListItem from "./QnAListItem";

const QnAList = (props) => {
  const [results, setResults] = useState(null);
  const [page, setPage] = useState(1);

  // useEffect : mount(초기화), update(상태변화) 이벤트 처리기 등록
  useEffect(() => {
    const loadQnAList = async (e) => {
      const url = `http://127.0.0.1:8081/board/qnaList?pageNo=${page}`;
      const response = await axios.get(url);
      setResults(response.data.results);
      setPage(response.data.page);
    };
    loadQnAList();
  }, [page]);

  if (!results) {
    return;
  }

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
                <CButton color="dark" variant='outline' style={{fontSize: 12}}><CIcon icon={cilAlignLeft} size="sm"/> 최신순</CButton>
              </div>
            </div>
            <hr />
            <table className="table">
              <thead>
                <tr>
                  <th style={{width: "20%"}}><CIcon icon={cilLoopCircular} size="lg"/></th>
                  <th style={{width: "60%"}}><CFormInput type="text" placeholder="Q&A 내에서 검색" style={{borderRadius: 40, width: '40%', margin: 'auto'}}/></th>
                  <th style={{width: "20%"}}><div style={{textAlign: 'right'}}>Example</div></th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => {
                  return <QnAListItem key={result.boardNo} result={result} />
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
