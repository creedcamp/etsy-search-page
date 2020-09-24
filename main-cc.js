//step 1 create a .map on the values inside of the array items.
//step 2 return it to index.html
//maybe try nesting inside of an all-encompasing function
const big = document.getElementById("items-container")
//attempted to filter for free shipping, but returned to much data, and returned it to wrong items as well.
// function filtered(item) {
//   console.log(item)
//   return item.filter(items.results[0]) == "Free shipping"
// },${filtered}
const arr = items.results
  .map((item) => {
    return `<div class="bla">
    <a href="${item.url}" target="_blank">
    <img class="images" src = "${item.Images[0].url_170x135}"/>
    <h3 style= "width: 48%;">${item.title}</h3>
    <p>From ${item.Shop.shop_name}</p>
    <p><div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div>, views${item.views}</p>
    <p>$${item.price}</p></a>
    </div>`
  })
  .join("")
console.log(arr)

big.innerHTML = arr
