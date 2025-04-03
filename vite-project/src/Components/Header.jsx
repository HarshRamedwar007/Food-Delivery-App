import { Link } from "react-router-dom";
import Offers from "./Offers";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import appStore from "../utils/store";
import Login from "./Login";
function Header() {
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <nav className="flex justify-between px-4 border-b-2">
        <img
          src="data:image/png;base64,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"
          alt=""
          width="80px"
          height="80px"
        />

        <ul className="flex items-center mr-10 gap-10">
          <li>{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="offers">Offers</Link>
          </li>
          <li>
            <Link to="Help">Help</Link>
          </li>
          <li>
            <Link to="login">SignUp</Link>
          </li>
          <li>
            <Link to="search">Search</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
            <span>{cartItems.length}</span>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Header;
