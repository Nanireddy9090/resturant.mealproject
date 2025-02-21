fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const productData = data.categories;
    const containerCards = productData.map((product) => {
      console.log(product);

      return `
        <div class="productcard">
          <img id="image" src="${product.strCategoryThumb}" + alt="${product.strCategory}">
          <h3>${product.strCategory}</h3>
        </div>
      `;
    }).join("");

    const container = document.getElementById('container');
    container.innerHTML = containerCards;
  })
  .catch((error) => {
    console.log(error);
  });   


  