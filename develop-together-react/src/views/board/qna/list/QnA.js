import { useLocation } from "react-router-dom";
import QnAList from "./QnAList";

const QnA = (props) => {

    const location = useLocation();
    const loginInfo = location.state.loginInfo;

    return (
        <>
            <QnAList loginInfo={loginInfo} />
        </>
    );

};

export default QnA;
