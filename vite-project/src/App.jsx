import Header from "./Components/Header";
import Body from "./Components/Body";
import { Outlet } from "react-router-dom";
import {Provider} from "react-redux";
import appStore from "./utils/store";
function App()
{
 
 return(<>
 <Provider store={appStore}>
 <Header/>
 <Outlet/>

 </Provider>
 
 </>)
}
export default App;
