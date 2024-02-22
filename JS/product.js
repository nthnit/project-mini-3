import { drawProduct } from "./drawProduct.js";
import { params, buttonSearch, filter, pagePrev, pageNext, pageNum, inputSearch } from "./variable.js";

drawProduct();

//Search


const search = () => {
    params.q = inputSearch.value;
    drawProduct();
}

buttonSearch.addEventListener("click", () => {
    search();
});
inputSearch.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        search();
    }
});
//End Search

//Filter
filter.addEventListener("change", (e) => {
    console.log(e.target.value);
    switch (e.target.value) {
        case "preset":
            params.sort = "";
            params.order = "";
            break;
        case "price_up":
            params.sort = "price";
            params.order = "asc";
            break;
        case "price_down":
            params.sort = "price";
            params.order = "desc";
            break;
        case "much_discount":
            params.sort = "discountPercentage";
            params.order = "desc";
            break;
        default:
            break;
    }
    drawProduct();
});
//End Filter

//Pagination


pagePrev.addEventListener("click", () => {
    if (params.page > 1) {
        params.page = params.page - 1;
        pageNum.innerHTML = params.page;
        drawProduct();
    }

});
pageNext.addEventListener("click", () => {
    params.page = params.page + 1;
    pageNum.innerHTML = params.page;
    drawProduct();
});
//End Pagination