import React, { useState, useEffect } from "react";

//components
import CatCard from "../CatCard/CatCard";

//services
import fetchData from "../../services/fetch.service";

//UI
import "./CatCardGenerator.css";

export default function CatCardGenerator({ qty, categoryId }) {
  const [fetchedCats, setFetchedCats] = useState([]);

  useEffect(() => {
    fetchData(qty, categoryId).then((cats) => {
      setFetchedCats(cats);
    });
  }, [qty, categoryId]);

  return (
    <div className="generator">
      {fetchedCats.map((cat) => {
        return <CatCard key={cat.id} catImage={cat.url} />;
      })}
    </div>
  );
}
