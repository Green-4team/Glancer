import { useLocation } from "react-router-dom";
import QnATagSearch from "./QnATagSearch";

const QnA = (props) => {

    const location = useLocation();
    const loginInfo = location.state.loginInfo;
    const tagNo = location.state.tagNo;
    
    return (
        <>
            <QnATagSearch loginInfo={loginInfo} tagName={tagNo} />
        </>
    );

};

export default QnA;
