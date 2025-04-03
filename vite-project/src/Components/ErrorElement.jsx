import { useRouteError } from "react-router-dom";
function ErrorElement()
{ const err = useRouteError();
    
    return<>
    <h1>{err.data}</h1>
    <h2>{err.error}</h2>
    <h3>{err.status}</h3>
    <h5>{err.statusText}</h5>
    
    </>
}
export default ErrorElement;