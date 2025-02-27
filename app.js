document.addEventListener("DOMContentLoaded", function () {
  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(response => response.json())
      .then(data => {
          const productData = data.categories;
          const container = document.getElementById("container");

          const containerCards = productData.map(product => {
              return `
                  <div class="productcard" onclick="viewCategory('${product.strCategory}', '${product.strCategoryThumb}')">
                      <img src="${product.strCategoryThumb}" alt="${product.strCategory}">
                      <h3>${product.strCategory}</h3>
                  </div>
              `;
          }).join("");

          container.innerHTML = containerCards;
      })
      .catch(error => console.error("Error fetching data:", error));
});

// Function to navigate to category details page
function viewCategory(title, image) {
  window.location.href = `category.html?title=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}`;
}
