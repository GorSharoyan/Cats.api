import React, { useState, useEffect } from "react";

//components
import CatCard from "../CatCard/CatCard";
import CatCardSelector from "../CatCardSelector/CatCardSelector";

//services
import fetchData from "../../services/fetch.service";

export default function CatCardGenerator({ qty, categoryId }) {
  const [fetchedCats, setFetchedCats] = useState([]);

  useEffect(() => {
    fetchData(qty, categoryId).then((cats) => {
      setFetchedCats(cats);
    });
  }, [qty, categoryId]);

  return (
    <div>
      {fetchedCats.map((cat) => {
        return <CatCard catName={cat.name} catImage={cat.url} />;
      })}
    </div>
  );
}
