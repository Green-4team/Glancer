import { useLocation } from "react-router-dom";
import QnADetail from "./QnADetail";

const QnA = (props) => {
    const location = useLocation();
    const boardNo = location.state.boardNo;
    const loginInfo = location.state.loginInfo;

    return (
        <>
            <QnADetail boardNo={ boardNo } loginInfo={ loginInfo } />
        </>
    );

};

export default QnA;
