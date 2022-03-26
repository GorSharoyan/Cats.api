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
