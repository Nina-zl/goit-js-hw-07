const categories = document.querySelector("#categories");
const elements = categories.querySelectorAll(".item");

console.log(`Number of categories: ${elements.length}`);

elements.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("ul li").length;
  
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});