import { CCard, CCardBody, CCol, CFormInput, CFormLabel, CFormSelect } from "@coreui/react";
import axios from "axios";
import { useEffect, useState } from "react";

// const HoverBlueBlock = styled.div`
// div {
//   display: inline-block;
// }
// .hoverBlue:hover {color: #24a0ed;}
// `;

const QnAWrite = (props) => {
  // const [result, setResult] = useState(null);
  
  // useEffect : mount(초기화), update(상태변화) 이벤트 처리기 등록
  // useEffect(() => {
  //   const loadQnAList = async (e) => {
  //     const url = `http://127.0.0.1:8081/board/qnaDetail?boardNo=`;
  //     const response = await axios.get(url);
  //     setResult(response.data.result);
  //     // setPage(response.data.page);
  //     // setPager(response.data.pager);
  //   };
  //   loadQnAList();
  // }, []);

  // if (!result) {
  //   return;
  // }
  // const {pageNo, pageCount} = pager;
  
  return (
    <>
      <CCol xs={8} style={{margin: 'auto'}}>
        <CCard className="mb-4" style={{border: 0}}>
          <CCardBody>
            <h2>궁금증 해결하기</h2>
            <div style={{marginTop: 30}}>
              <CFormLabel>토픽</CFormLabel>
            </div>
            <CFormSelect>
              <option>토픽을 선택해주세요</option>
              <option>기술</option>
              <option>커리어</option>
              <option>기타</option>
            </CFormSelect>
            제목
            <CFormInput></CFormInput>
            태그
            <CFormInput></CFormInput>
            본문
        
          </CCardBody>
        </CCard>
      </CCol>
    </>
  );
};

export default QnAWrite;
