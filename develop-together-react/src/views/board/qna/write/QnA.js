import { useLocation } from "react-router-dom";
import QnAWrite from "./QnAWrite";

const QnA = (props) => {

    const location = useLocation();
    const loginInfo = location.state.loginInfo;

    return (
        <>
            <QnAWrite loginInfo={loginInfo} />
        </>
    );

};

export default QnA;
