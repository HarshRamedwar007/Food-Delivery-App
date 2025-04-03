import { restaurants } from "../utils/mockData";
function Search(props) {
  function handleSearch(searchText) {
    const filteredrestaurants = restaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    props.filterFunc(filteredrestaurants);
  }
  return (
    <>
      <input
        type="text"
        className="border -zinc-950 border-2 m-5"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </>
  );
}
export default Search;
