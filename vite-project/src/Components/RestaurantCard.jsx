// import { restaurants } from "../utils/mockData";
// function RestaurantCard(props)
// {
//     const {name, rating , time , cuisine , img}=props.resDetails;
//     return(<>
//     <div className="m-4 bord w-fit p-3">
//         <img src={img} alt="" width="200px" height="200px"
//         className="rounded-b-xl h-32"/>
//         <h2 className="font-bold">{name}</h2>
//         <span>{rating}</span>
//         <span>{time}</span>
//         <p>{cuisine}</p>
//     </div>
    
//     </>)
// }
// export default RestaurantCard;
function RestaurantCard(props) {
    const { name, rating, time, cuisine, img } = props.resDetails;
  
    // Make sure that the name property is a string
    const nameString = typeof name === 'string' ? name : JSON.stringify(name);
  
    return (
      <div className="m-4 bord w-fit p-3">
        <img src={img} alt="" width="200px" height="200px" className="rounded-b-xl h-32" />
        <h2 className="font-bold">{nameString}</h2>
        <span>{rating}</span>
        <span>{time}</span>
        <p>{cuisine}</p>
      </div>
    );
  }
  export default RestaurantCard;