import { API_CARTEGORY } from "./constant.js";
import { drawProduct } from "./drawProduct.js";
import { fetchApi } from "./fetchApi.js";
import { category, params } from "./variable.js";
fetchApi(API_CARTEGORY)
    .then(data => {
        let htmls = data.map(item => {
            return `
        <div class="category_item" data-category="${item}">
        ${item}
        </div>
        `;
        })
        category.innerHTML = htmls.join("");

        const listCategory = document.querySelectorAll("#category .category_item");
        listCategory.forEach(item => {
            item.addEventListener("click", () => {
                params.category = item.getAttribute("data-category");
                drawProduct();
            })
        })
    })
