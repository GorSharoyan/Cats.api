import React, { useState, useEffect } from "react";

//services
import { fetchCategory } from "../../services/fetch.service";

export default function CatCardSelector() {
  const [fetchedCategories, setFetchedCategories] = useState([]);

  useEffect(() => {
    fetchCategory().then((categories) => {
      setFetchedCategories(categories);
    });
  }, [fetchedCategories]);

  return (
    <div>
      <select>
        {fetchedCategories.map((category) => {
          return (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
