const addModal = document.getElementById("addProductModal");
const closeModal = document.getElementById("editProductModal");
let products = [
    {
      id: "P001",
      name: "iPhone 15 Pro",
      image: "https://example.com/iphone15pro.png",
      description: "Điện thoại flagship của Apple, cực kỳ mạnh mẽ",
      price: 999,
      stock: 50
    }, 
    {
      id: "P002",
      name: "Samsung Galaxy S24",
      image: "https://example.com/galaxyS24.png",
      description: "Smartphone cao cấp của Samsung, camera siêu đỉnh",
      price: 899,
      stock: 30
    }
  ];


function openAdd(){
    addModal.style.display="block";

}
function closeAdd(){
    addModal.style.display="none";

}

function renderList(List) {
    const tbodies = document.getElementById("tbody");
    tbodies.innerHTML="";
    List.forEach( (pro ,index ) =>{
        const tr = document.createElement("tr");
        tr.innerHTML =`
        <td>${index + 1}</td>
          <td>${pro.id}</td>
          <td>${pro.name}</td>
          <td><img src="${pro.image}" width="50"></td>
          <td>${pro.description}</td>
          <td>${pro.price}</td>
          <td>${pro.stock}</td>
          <td>
            <button  onclick="deleteProduct ('${pro.id}')">Delete</button>
            <button>edit</button>
          </td>
        `;
        tbodies.appendChild(tr);
    });
}
renderList(products);

function addProducts(event){
    event.preventDefault();
   const idNew = document.getElementById("productId").value.trim();
   const nameNew = document.getElementById("productName").value.trim();

   const imgNew = document.getElementById("productImage").value.trim();
   const desNew = document.getElementById("productDescription").value.trim();
   const priceNew = document.getElementById("productPrice").value.trim();
   const stockNew = document.getElementById("productStock").value.trim();

   const newProducts = {
      id: idNew,
      name: nameNew ,
      image: imgNew,
      description: desNew,
      price:priceNew,
      stock:stockNew, 
   };
   products.push(newProducts);
   renderList(products);
   closeAdd();
}
function deleteProduct (id){
    if (confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
        products =products.filter( prod =>prod.id !== id );
        renderList(products);
      }

}
function searchProduct() {
    const keyword = document.getElementById("searchInput").value.trim().toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(keyword) || 
        product.description.toLowerCase().includes(keyword)
    );

    renderList(filteredProducts);
}
