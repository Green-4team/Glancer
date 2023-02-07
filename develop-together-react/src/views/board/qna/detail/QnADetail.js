import { CCard, CCardBody, CCol } from "@coreui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import QnADetailItem from "./QnADetailtem";

// const HoverBlueBlock = styled.div`
// div {
//   display: inline-block;
// }
// .hoverBlue:hover {color: #24a0ed;}
// `;

const QnADetail = ({ boardNo, loginInfo }) => {
  const [result, setResult] = useState(null);
  
  // useEffect : mount(초기화), update(상태변화) 이벤트 처리기 등록
  useEffect(() => {
    const loadQnAList = async (e) => {
      const url = `http://127.0.0.1:8081/board/qnaDetail?boardNo=${boardNo}`;
      const response = await axios.get(url);
      setResult(response.data.result);
      // setPage(response.data.page);
      // setPager(response.data.pager);
    };
    loadQnAList();
  }, [boardNo]);

  if (!result) {
    return;
  }
  // const {pageNo, pageCount} = pager;
  
  return (
    <>
      <CCol xs={8} style={{margin: 'auto'}}>
        <CCard className="mb-4" style={{border: 0}}>
          <CCardBody>
            <QnADetailItem key={result.boardNo} result={result} loginInfo={loginInfo} />
          </CCardBody>
        </CCard>
      </CCol>
    </>
  );
};

export default QnADetail;
