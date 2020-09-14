function hideInitial() {
  document.getElementById("expandedcontainer").style.display = "none"
  document.querySelectorAll(".col-2").forEach(function (el) {
    el.style.display = "none"
  })
}

document.getElementById("column-1").addEventListener("mouseover", function (e) {
  let selection = e.target.getAttribute("href")
  console.log(selection)
  const hasHide = document.getElementById(selection).classList.contains("show")

  document.querySelectorAll(".col-2").forEach(function (el) {
    console.log(el)
    el.style.display = "none"
  })
  if (!hasHide) {
    document.getElementById(selection).style.display = "flex"
  }
})

document.getElementById("test").addEventListener("mouseover", function (e) {
  let selection = e.target.getAttribute("href")
  document.getElementById(selection).style.display = "contents"
})

// document.getElementById("test").addEventListener("mouseout", function (e) {
//   let selection = e.target.getAttribute("href")
//   // console.log(e)
//   document.getElementById(selection).style.display = "none"
// })

// document.getElementById("test").addEventListener(mousem, function (e) {
//   let selection = e.target.getAttribute("href")
//   document.getElementById(selection).style.display = "flex"
// })
