import { useLocation } from "react-router-dom";
import QnAEdit from "./QnAEdit";

const QnA = (props) => {

    const location = useLocation();
    const loginInfo = location.state.loginInfo;
    const result = location.state.result;

    return (
        <>
            <QnAEdit loginInfo={loginInfo} result={result} />
        </>
    );

};

export default QnA;
