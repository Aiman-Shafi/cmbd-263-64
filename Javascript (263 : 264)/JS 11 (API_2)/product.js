const allProducts = document.getElementById("product-section");
const loader = document.getElementById("loader");
const API = "https://fakestoreapi.com/products?limit=50";
const errorDiv = document.getElementById("error");

const fetchAllProducts = async (url) => {
  try {
    showLoader();
    const res = await fetch(url);
    // check is resonse is okay or not!
    if (!res.ok) {
      throw new Error("Something went Wrong..");
    }

    const data = await res.json();
    hideLoader();
    displayProducts(data);
  } catch (error) {
    console.log(error);
    hideLoader();
    errorDiv.innerHTML = `<h4>Something Went Wrong..Try again later</h4>`;
  }
};

const showLoader = () => {
  loader.style.display = "block";
};

const hideLoader = () => {
  loader.style.display = "none";
};

const displayProducts = (products) => {
  products.forEach((product) => {
    allProducts.innerHTML += `
        <div>
            <a href="#" class="group block">
              <img
                src=${product.image}
                class="h-[350px] w-full object-contain sm:h-[450px]"
              />

              <div class="mt-3 flex justify-between text-sm">
                <div>
                  <h3
                    class="text-gray-900 group-hover:underline group-hover:underline-offset-4"
                  >
                    ${product.title.slice(0, 30)}..
                  </h3>

                  <p class="mt-1.5 text-pretty text-xs text-gray-500">
                    ${product.description.slice(0, 100)}...
                  </p>
                </div>

                <p class="text-gray-900">$${product.price}</p>
              </div>
            </a>
        </div>`;
  });
};

hideLoader();
fetchAllProducts(API);
