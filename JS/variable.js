export let params = {
    q: "",
    sort: "",
    order: "",
    page: 1,
    limit: 9,
    category: ""
}
export const inputSearch = document.querySelector("#search input");
export const buttonSearch = document.querySelector("#search button");
export const filter = document.querySelector("#filter");
export const pagePrev = document.querySelector("#prevPage");
export const pageNext = document.querySelector("#nextPage");
export const pageNum = document.querySelector("#pageNum");
export const category = document.querySelector("#category");