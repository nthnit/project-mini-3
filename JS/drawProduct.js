import { API_PRODUCT } from "./constant.js";
import { fetchApi } from "./fetchApi.js";
import { params } from "./variable.js";

const products = document.querySelector("#product");
export const drawProduct = () => {
    let category = "";
    if (params.category != "") {
        category = `&category=${params.category}`;
    }
    const api = `${API_PRODUCT}?q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}${category}`;
    fetchApi(api)
        .then(data => {
            let htmls = data.map(item => {
                // console.log(item);
                return `
            <div class="product_item">
            <div class="product_image">
                <img src="${item.thumbnail}" alt="${item.title}">
                <div class="discount_percent">
                ${item.discountPercentage}%
                </div>
            </div>
            <div class="product_content">
                <h3 class="product_title">
                ${item.title}
                </h3>
                <div class="product_meta">
                    <div class="product_price">
                     $${item.price}
                    </div>
                    <div class="product_stock">
                    ${item.stock} left
                    </div>
                </div>
            </div>
        </div>
        `;
            })
            products.innerHTML = htmls.join("");
        })
}

