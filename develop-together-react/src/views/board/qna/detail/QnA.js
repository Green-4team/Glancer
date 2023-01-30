import { useLocation } from "react-router-dom";
import QnADetail from "./QnADetail";

const QnA = (props) => {
    const location = useLocation();
    const boardNo = location.state.boardNo;

    return (
        <>
            <QnADetail boardNo={ boardNo } />
        </>
    );

};

export default QnA;
