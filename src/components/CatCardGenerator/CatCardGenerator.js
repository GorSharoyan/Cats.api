import React, { useState, useEffect } from "react";

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
