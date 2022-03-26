import React, { useState, useEffect } from "react";

//services
import { fetchCategory } from "../../services/fetch.service";

//components
import Button from "../Button/Button";

export default function CatCardSelector() {
  const [fetchedCategories, setFetchedCategories] = useState([]);
  const [selectedData, setSelectedData] = useState({
    categoryId: "",
    qty: 10
  });

  useEffect(() => {
    fetchCategory().then((categories) => {
      setFetchedCategories(categories);
    });
  }, [fetchedCategories]);

  const handleCategorySelection = (e) => {
    setSelectedData({
      ...selectedData,
      categoryId: e.target.value
    });
  };
  const handleQuantitySelection = () => {
    setSelectedData({
      ...selectedData,
      qty: (selectedData.qty += 10)
    });
  };
  const handleSubmit = () => {
    console.log(selectedData);
  };

  return (
    <div>
      <div>
        <select onChange={handleCategorySelection}>
          {fetchedCategories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <Button buttonText={"+10"} buttonHandler={handleQuantitySelection} />
      </div>
      <div>
        <Button buttonText={"Submit"} buttonHandler={handleSubmit} />
      </div>
    </div>
  );
}
