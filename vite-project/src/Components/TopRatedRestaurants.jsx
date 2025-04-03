import { restaurants } from "../utils/mockData";
import Body from "./Body";
function TopRatedRestaurants(props)
{
    function FilterTopRated()
    {
        const TopRatedRestaurnt = props.restaurants.filter(res => res.rating > 4.755);
  props.TopRatedFunc(TopRatedRestaurnt);
    }
    return (
        <>
          <button className="border-2 bg-amber-200" onClick={FilterTopRated}>
            Top Rated
          </button>
        </>
      );
}
export default TopRatedRestaurants;