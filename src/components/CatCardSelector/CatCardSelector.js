import React, { useState, useEffect } from "react";

//services
import { fetchCategory } from "../../services/fetch.service";

//components
import Button from "../Button/Button";

export default function CatCardSelector() {
  const [fetchedCategories, setFetchedCategories] = useState([]);

  useEffect(() => {
    fetchCategory().then((categories) => {
      setFetchedCategories(categories);
    });
  }, [fetchedCategories]);

  ///event handlers
  const handleClick = () => {
    console.log("click");
  };

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
      <Button buttonText={"+10"} buttonHandler={handleClick} />
    </div>
  );
}
