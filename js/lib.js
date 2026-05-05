const productList = [
    {id: "01", name: "Cua hoàng đế (King Crab)", price: 2390000, image: "../assets/images/batlua.jpg", productLink: "https://haisanhoanggia.com/products/king-crab-do"},
    {id: "02", name: "Tôm hùm Alaska", price: 1490000, image: "../assets/images/batlua.jpg", productLink: "https://www.ekago.vn/tom-hum-alaska-size-0-5-kg"},
    {id: "03", name: "Bạch tuộc tươi", price: 490000, image: "../assets/images/batlua.jpg", productLink: "https://haisannhatminh.com/bach-tuoc"},
    {id: "04", name: "Cá hồi Na Uy (Salmon)", price: 450000, image: "../assets/images/batlua.jpg", productLink: "https://haisannhatminh.com/moi-nhat"},
    {id: "05", name: "Mực ống tươi loại 1", price: 169000, image: "../assets/images/batlua.jpg", productLink: "https://haisanhoanggia.com/products/king-crab-do"},
    {id: "06", name: "Hàu sữa Canada", price: 55000, image: "../assets/images/batlua.jpg", productLink: "https://haisanhoanggia.com/products/king-crab-do"},
    {id: "07", name: "Ghẹ xanh loại 1", price: 790000, image: "../assets/images/batlua.jpg", productLink: "https://haisanhoanggia.com/products/king-crab-do"},
    {id: "08", name: "Cá thu 1 nắng", price: 590000, image: "../assets/images/batlua.jpg", productLink: "https://haisanhoanggia.com/products/ca-thu-1-nang-3-khoanh-kg-goi"},
    {id: "09", name: "Tôm sú cỡ lớn", price: 489000, image: "../assets/images/batlua.jpg", productLink: "https://haisanhoanggia.com/products/king-crab-do"},
    {id: "10", name: "Sò điệp Hokkaido (Scallop)", price: 649000, image: "../assets/images/batlua.jpg", productLink: "https://haisanhoanggia.com/products/king-crab-do"},
];

function addProduct(id, name, price, image, hyperlink) {
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "product-item");

    // --- Ảnh ---
    const productImage = document.createElement("div");
    productImage.setAttribute("class", "product-image");

    const Img = document.createElement("img");
    Img.setAttribute("src", image);
    Img.setAttribute("alt", name);
    Img.setAttribute("class", "img-fluid");
    productImage.appendChild(Img);

    // --- Thông tin ---
    const productInfo = document.createElement("div");
    productInfo.setAttribute("class", "product-info");

    const productName = document.createElement("p");
    const productNameText = document.createTextNode(name);
    productName.appendChild(productNameText);

    const productPrice = document.createElement("p");
    const productPriceText = document.createTextNode(price.toLocaleString("vi-VN") + "đ");
    productPrice.appendChild(productPriceText);

    const productLink = document.createElement("a");
    const productLinkText = document.createTextNode("Xem chi tiết");
    productLink.appendChild(productLinkText);
    productLink.setAttribute("href", hyperlink);
    productLink.setAttribute("class", "btn-info");

    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productLink);

    // --- Ghép vào product-list ---
    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);
    document.getElementById("product-list").appendChild(productItem);
}