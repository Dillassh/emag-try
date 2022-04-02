const getHTMLForProductLI = (product) => {
	return `<li>${product.title}</li>`;
};

const getHTMLForProductDIV = (product) => {
	return `<div class="card">
			             <img class="size" src=${product.image}>
				<h2>${product.title}</h2>
				<p class="description">${product.description}</p>
				<p class="price"><a href="favorites.html" rel="stylesheet"><i class="material-icons">favorite_border</i> </a>                 ${product.price} Lei</p>
				<p class="category">${product.category}</p>
			</div>`;
};
// type: li, div
const createListOfProducts = (products, location, type) => {
	// apelam lista din HTML
	const list = document.querySelector(location);
	// declaram lista LI-urilor ca fiind goala
	let listOfProductsHTML = "";
	// facem functie forEach pentru a apela fiecare element di ARRAY-ul de produse
	products.forEach((product) => {
		// declaram constanta cu care vom adauga li-uri in dom
		let productLi = "";
		if (type === "div") {
			productLi = getHTMLForProductDIV(product);
		}
		// nu am inteles
		listOfProductsHTML = listOfProductsHTML + productLi;
	});

	list.innerHTML = listOfProductsHTML;
};

// apelam continutul din api
fetch("https://fakestoreapi.com/products", { method: "GET" })
	// cerem rezultatul de la back-end
	.then((res) => res.json())
	// afisam rezultatul primit de la back-end
	.then((products) => {
		createListOfProducts(products, "#products", "li");
		createListOfProducts(products, ".container_products", "div");
	});

// const searchInput = document.querySelector("[data-search]");
// console.log(searchInput);

// let products = [];

// searchInput.addEventListener("input", (e) => {
// 	const value = e.target.value;
// 	console.log(value);
// });

const search = () => {
	const searchbox = document.getElementById("search-item").value.toUpperCase();

	const storeItems = createListOfProducts;
	const card = document.querySelectorAll(".card");

	const pname = document.getElementsByTagName("h2");
	for (i = 0; i < pname.length; i++) {
		let match = card[i].getElementsByTagName("h2")[0];
		if (match) {
			let textvalue = match.textContent || match.innerHTML;

			if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
				card[i].style.display = "";
			} else {
				card[i].style.display = "none";
			}
		}
		console.log(pname);
	}
};
