//function for fetching data by category

export default function fetchData(qty, categoryId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?limit=${qty}&page=1&category_ids=${categoryId}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

//function for fetching all the category names

export function fetchCategory() {
  return fetch(`https://api.thecatapi.com/v1/categories`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}
