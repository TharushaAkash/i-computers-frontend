import { useLocation } from "react-router-dom";

export default function OverviewPage(){
    const location = useLocation();
    const product = location.state;
    return(
        <div>
            <h1>Overview Page</h1>
        </div>
    )
}