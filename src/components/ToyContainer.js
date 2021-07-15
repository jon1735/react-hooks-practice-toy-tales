import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys }) {
const listOfToys = toys.map((toy) => {
  return (
    <ToyCard 
    toy={toy} 
    key={toy.id}
    />
  )
})


  return (
    <div id="toy-collection">{listOfToys}</div>
  );
}

export default ToyContainer;
