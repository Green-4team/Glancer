import { useLocation } from "react-router-dom";
import QnATagSearch from "./QnATagSearch";

const QnA = (props) => {

    const location = useLocation();
    const loginInfo = location.state.loginInfo;
    const tagNo = location.state.tagNo;
    const tagName = location.state.tagName;
    
    return (
        <>
            <QnATagSearch loginInfo={loginInfo} tagNo={tagNo} tagName={tagName} />
        </>
    );

};

export default QnA;
