import React, { useState, useEffect } from "react";

//services
import { fetchCategory } from "../../services/fetch.service";

//components
import Button from "../Button/Button";
import CatCardGenerator from "../CatCardGenerator/CatCardGenerator";

//UI
import "./CatCardSelector.css";

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
  }, [selectedData]);

  const handleCategorySelection = (e) => {
    setSelectedData({
      ...selectedData,
      categoryId: e.target.value
    });
  };
  const handleIncrementQuantity = () => {
    setSelectedData({
      ...selectedData,
      qty: (selectedData.qty += 10)
    });
  };

  const handleDecrementQuantity = () => {
    if (selectedData.qty === 10) {
      setSelectedData({
        ...selectedData,
        qty: (selectedData.qty = 10)
      });
    } else {
      setSelectedData({
        ...selectedData,
        qty: (selectedData.qty -= 10)
      });
    }
  };

  return (
    <div>
      <div className="selector">
        <div>
          <h4>Select Cat :</h4>
        </div>
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
          <Button buttonText={"+10"} buttonHandler={handleIncrementQuantity} />
        </div>
        <div>
          <Button buttonText={"-10"} buttonHandler={handleDecrementQuantity} />
        </div>
      </div>
      <div className="generator">
        <CatCardGenerator
          categoryId={selectedData.categoryId}
          qty={selectedData.qty}
        />
      </div>
    </div>
  );
}
