const baseUrl = "http://localhost:3000/"
function GetProducts() {
    axios.get(baseUrl + "product")
        .then(res => {
            console.log(res.data);
            res.data.forEach(element => {
                document.querySelector(".items").innerHTML +=
                    `
                <div class="item">
                <img src="${element.img}"
                    alt="">
                <h1>${element.name}</h1>
                <span>${element.price}$</span>
            </div>
            `
            });
        })
        .catch(err => console.log(err))
}
if (document.querySelector(".items")) {
    GetProducts();

}

function AddProducts() {
    axios.post(baseUrl + "product", {
        name: document.getElementById("productName").value,
        img: document.getElementById("productImage").value,
        price: document.getElementById("productPrice").value,
        description: document.getElementById("productDescription").value
    })
        .then(res => {
            console.log(res);
            alert("Product added successfully")
        })
        .catch(err => console.log(err))

}
if (document.getElementById("addProductForm")) {

    document.getElementById("addProductForm").addEventListener("submit", function (e) {
        e.preventDefault();
        AddProducts();
            window.location.href = "admin.html"

    })
}
function GetAdminProducts() {
    axios.get(baseUrl + "product")
        .then(res => {
            console.log(res.data);
            res.data.forEach(element => {
                document.querySelector("#productsBody").innerHTML +=
                    `
              <tr>
              <td>${element.id}</td>
              <td>${element.name}</td>
              <td>${element.price}$</td>
              <td>${element.description}</td>
              <td><img src="${element.img}" alt="" width="50px"></td>
                <td>
                  <button  class="btn-edit">Edit</button>
                  <button  onclick="deleteProduct('${element.id}')" class="btn-delete">Delete</button>
                </td>
              </tr>
            `
            });

        })
        .catch(err => console.log(err))
}
if (document.querySelector("#productsBody")) {
    GetAdminProducts();

}
function deleteProduct(id) {
    axios.delete(baseUrl + "product/" + id)
        .then(res => {
            console.log(res);
            alert("Product deleted successfully")
        })
        .catch(err => console.log(err))
}