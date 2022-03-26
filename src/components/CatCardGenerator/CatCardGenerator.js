import React, { useState, useEffect } from "react";

//components
import CatCard from "../CatCard/CatCard";
import CatCardSelector from "../CatCardSelector/CatCardSelector";

//services
import fetchData from "../../services/fetch.service";

export default function CatCardGenerator(selectedData) {
  const [fetchedCats, setFetchedCats] = useState([]);

  useEffect(() => {
    fetchData(selectedData.qty, selectedData.categoryId).then((cats) => {
      setFetchedCats(cats);
    });
  }, [selectedData]);

  return (
    <div>
      {fetchedCats.map((cat) => {
        return <CatCard catName={cat.name} catImage={cat.url} />;
      })}
    </div>
  );
}
