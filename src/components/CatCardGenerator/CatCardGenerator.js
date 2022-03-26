import React, { useState, useEffect } from "react";

//components
import CatCard from "../CatCard/CatCard";

//services
import fetchData from "../../services/fetch.service";

export default function CatCardGenerator() {
  const [fetchedCats, setFetchedCats] = useState([]);

  return (
    <div>
      {fetchedCats.map((cat) => {
        return <CatCard catName={cat.name} catImage={cat.url} />;
      })}
    </div>
  );
}
