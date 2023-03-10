import { useLocation } from "react-router-dom";
import QnAList from "./QnAList";

const QnA = (props) => {

    const location = useLocation();
    const loginInfo = location.state.loginInfo;
    const topicNo = location.state.topicNo;
    
    return (
        <>
            <QnAList loginInfo={loginInfo} topicNo={topicNo} />
        </>
    );

};

export default QnA;
