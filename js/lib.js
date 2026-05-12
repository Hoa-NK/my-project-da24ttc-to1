const productList = [
    { 
        id: "01", 
        name: "Kẹo sữa Mikita", 
        price: 45000, 
        image: "../assets/images/mikita.jpg", 
        productLink: "product-detail.html",
        desc: "Kẹo sữa Mikita – món kẹo tuổi thơ quen thuộc với vị sữa béo ngậy, ngọt dịu và tan chảy nhẹ nhàng trong miệng. Được làm từ sữa tươi nguyên chất và đường tinh luyện, mỗi viên kẹo có lớp vỏ ngoài mịn màng, màu trắng kem bắt mắt. Kẹo sữa Mikita không quá ngọt, hương vị thanh nhẹ, phù hợp cho cả trẻ em và người lớn. Kết cấu mềm dẻo vừa phải, không dính răng, dễ ăn. Đây là lựa chọn ăn vặt lành mạnh, giàu canxi từ sữa, thích hợp để nhâm nhi trong ngày hoặc bỏ túi mang theo. Bao bì gói kín bảo quản kẹo luôn tươi ngon, thơm mùi sữa đặc trưng không lẫn vào đâu được."
    },
    { 
        id: "02", 
        name: "Kẹo thập cẩm Oishi", 
        price: 32000, 
        image: "../assets/images/oishi.jpg", 
        productLink: "product-detail.html",
        desc: "Kẹo thập cẩm Oishi – bộ sưu tập hương vị đa dạng trong một gói, mang đến trải nghiệm ăn kẹo thú vị và bất ngờ mỗi lần thưởng thức. Mỗi gói bao gồm nhiều loại kẹo khác nhau với hương trái cây nhiệt đới như dâu, cam, nho, dứa, chanh và dưa hấu, đảm bảo không bao giờ nhàm chán. Kẹo có màu sắc rực rỡ bắt mắt, kết cấu cứng vừa, tan dần trong miệng để lại vị ngọt thanh và hương thơm đặc trưng của từng loại trái cây. Sản phẩm được sản xuất theo tiêu chuẩn vệ sinh an toàn thực phẩm nghiêm ngặt, không chứa chất bảo quản độc hại. Thích hợp để chia sẻ cùng bạn bè, đồng nghiệp hoặc để trong xe, túi xách nhâm nhi mọi lúc."
    },
    { 
        id: "03", 
        name: "Kẹo dẻo Chupa Chups", 
        price: 55000, 
        image: "../assets/images/chupachups.jpg", 
        productLink: "product-detail.html",
        desc: "Kẹo dẻo Chupa Chups – phiên bản kẹo dẻo mới nhất từ thương hiệu kẹo nổi tiếng toàn cầu, mang đến trải nghiệm hoàn toàn khác biệt so với kẹo mút truyền thống. Mỗi viên kẹo dẻo được tạo hình ngộ nghĩnh nhiều màu sắc, làm từ gelatin cao cấp với hương vị trái cây tự nhiên đậm đà như dâu tây, cam, táo xanh và cherry. Độ dẻo dai vừa phải, không quá cứng cũng không quá mềm, mang lại cảm giác nhai vui miệng, hương thơm lan tỏa từ từ. Sản phẩm không chứa màu nhân tạo, an toàn cho trẻ em từ 3 tuổi trở lên. Bao bì đầy màu sắc với hình ảnh thương hiệu Chupa Chups quen thuộc, là món quà nhỏ dễ thương dành cho các bé."
    },
    { 
        id: "04", 
        name: "Kẹo Sugus hương trái cây", 
        price: 40000, 
        image: "../assets/images/sugus.jpg", 
        productLink: "product-detail.html",
        desc: "Kẹo Sugus – thương hiệu kẹo mềm hương trái cây huyền thoại có mặt trên toàn thế giới từ năm 1931, được hàng triệu người yêu thích qua nhiều thế hệ. Mỗi viên kẹo vuông vức nhỏ nhắn được gói trong giấy màu rực rỡ tương ứng với từng hương vị: đỏ là dâu, cam là cam, vàng là chanh, xanh lá là táo. Kết cấu kẹo mềm dẻo đặc trưng, cắn vào tan ngay, hương trái cây tươi tự nhiên bùng nổ trong miệng mà không hề gắt hay nhân tạo. Không chứa chất béo, phù hợp ăn vặt hằng ngày. Hộp thiếc Sugus cổ điển hoặc túi gói tiện lợi đều là lựa chọn tuyệt vời để chia sẻ hay bỏ túi mang theo trong những chuyến đi xa."
    },
    { 
        id: "05", 
        name: "Kẹo Dynamite Big Bang hương bạc hà nhân socola gói 112g", 
        price: 68000, 
        image: "../assets/images/dynamite-bigbang.jpg", 
        productLink: "product-detail.html",
        desc: "Kẹo Dynamite Big Bang hương bạc hà nhân socola – cú nổ hương vị mạnh mẽ kết hợp giữa bạc hà mát lạnh sảng khoái bên ngoài và socola đậm đà ngọt ngào ẩn bên trong. Mỗi viên kẹo nhỏ gọn nhưng chứa đựng sự bùng nổ hương vị hai tầng thú vị, cắn vào lớp vỏ bạc hà giòn mát rồi chạm đến nhân socola mềm tan, tạo nên sự tương phản hoàn hảo. Gói 112g vừa đủ để nhâm nhi cả ngày hoặc chia sẻ cùng bạn bè. Hương bạc hà đậm đà giúp hơi thở thơm mát lâu dài, nhân socola bổ sung năng lượng nhẹ nhàng. Sản phẩm được ưa chuộng tại nhiều quốc gia châu Á, là lựa chọn ăn vặt cực hot trong giới trẻ hiện nay."
    },
    { 
        id: "06", 
        name: "Kẹo ngậm không đường Mentos hương bạc hà hộp 35g", 
        price: 28000, 
        image: "../assets/images/mentos-mint.jpg", 
        productLink: "product-detail.html",
        desc: "Kẹo ngậm không đường Mentos hương bạc hà – giải pháp hơi thở thơm mát tức thì dành cho người bận rộn, không lo tăng cân hay ảnh hưởng đến sức khỏe răng miệng. Mỗi viên kẹo nhỏ bọc đường không calo với hương bạc hà tươi mát, tan chảy từ từ mang lại cảm giác mát lạnh, sảng khoái kéo dài. Không chứa đường, phù hợp cho người ăn kiêng, tiểu đường hoặc đang niềng răng. Hộp nhỏ gọn 35g dễ dàng bỏ vào túi áo, túi xách, tiện lợi dùng sau bữa ăn, trước cuộc họp hay hẹn hò. Thương hiệu Mentos được tin dùng toàn cầu với hơn 70 năm kinh nghiệm sản xuất kẹo, đảm bảo chất lượng và hương vị ổn định trong từng viên kẹo."
    },
    { 
        id: "07", 
        name: "Kẹo cà phê Cappuccino KOPIKO gói 140g", 
        price: 52000, 
        image: "../assets/images/kopiko-cappuccino.jpg", 
        productLink: "product-detail.html",
        desc: "Kẹo cà phê Cappuccino KOPIKO – tinh túy của tách cappuccino Ý thu nhỏ trong từng viên kẹo nhỏ xinh, mang đến nguồn năng lượng và hương thơm cà phê đặc trưng bất cứ lúc nào bạn cần. Được chiết xuất từ hạt cà phê Arabica thượng hạng, mỗi viên kẹo có lớp vỏ cứng bóng mượt, cắn vào tan chảy để lộ vị cà phê đậm đà pha chút béo ngậy của sữa cappuccino mịn màng. Gói 140g vừa đủ để nhâm nhi trong ngày dài làm việc, học tập hoặc lái xe đường dài cần tỉnh táo. KOPIKO là thương hiệu kẹo cà phê số 1 châu Á, được yêu thích tại hơn 60 quốc gia. Thay thế hoàn hảo cho ly cà phê khi bạn đang bận hoặc không có điều kiện pha cà phê."
    },
    { 
        id: "08", 
        name: "Kẹo gum Lotte Xylitol hương Lime Mint hũ 55.1g", 
        price: 48000, 
        image: "../assets/images/lotte-xylitol.jpg", 
        productLink: "product-detail.html",
        desc: "Kẹo gum không đường Lotte Xylitol hương Lime Mint – sự kết hợp bùng nổ giữa vị chua tươi của chanh lime và bạc hà mát lạnh, mang đến hơi thở sảng khoái và bảo vệ răng miệng hiệu quả. Xylitol – thành phần chủ lực của sản phẩm – là chất tạo ngọt tự nhiên từ gỗ bạch dương, được chứng minh khoa học giúp ngăn ngừa sâu răng, kích thích tiết nước bọt và trung hòa axit trong miệng. Hũ nhỏ gọn tiện lợi, nắp đậy chặt giữ kẹo luôn tươi và không bị ẩm. Mỗi viên kẹo có lớp vỏ giòn tan với nhân gum dẻo, nhai vui miệng và hương thơm kéo dài. Sản phẩm được bác sĩ nha khoa Nhật Bản khuyên dùng, lý tưởng sau bữa ăn hoặc trước các cuộc gặp gỡ quan trọng."
    },
    { 
        id: "09", 
        name: "Kẹo Alpenliebe hương xoài nhân muối ớt gói 87g", 
        price: 38000, 
        image: "../assets/images/alpenliebe-xoai.jpg", 
        productLink: "product-detail.html",
        desc: "Kẹo Alpenliebe hương xoài nhân muối ớt – cú twist táo bạo của thương hiệu kẹo hàng đầu châu Á, kết hợp giữa vị ngọt thơm của xoài chín cây và phần nhân muối ớt cay nồng kích thích vị giác theo cách không ngờ tới. Lớp vỏ ngoài vàng óng màu xoài chín, ngọt dịu và thơm đặc trưng, tan dần để lộ phần nhân muối ớt đậm đà, cay nhẹ và mặn vừa, tạo nên tổng thể hương vị ngọt-cay-mặn hòa quyện đầy thú vị. Đây là phiên bản đặc biệt mang hơi thở ẩm thực Đông Nam Á vào chiếc kẹo bé nhỏ. Gói 87g tiện lợi mang theo bất cứ đâu. Sản phẩm cực hot trong cộng đồng mạng, được nhiều bạn trẻ review và chia sẻ rộng rãi trên các nền tảng mạng xã hội."
    },
    { 
        id: "10", 
        name: "Kẹo mềm Alpenliebe 2Chew hương nho gói 73.5g (3 thanh)", 
        price: 35000, 
        image: "../assets/images/alpenliebe-2chew.jpg", 
        productLink: "product-detail.html",
        desc: "Kẹo mềm Alpenliebe 2Chew hương nho – phiên bản kẹo thanh độc đáo mang công thức hai lớp hương vị nho đặc sắc trong một thanh kẹo nhỏ gọn. Mỗi thanh kẹo có phần nhân mềm dẻo và lớp áo ngoài mịn màng, hương nho đen Mỹ đậm đà thoảng qua ngay từ lần cắn đầu tiên, để lại dư vị ngọt ngào, nhẹ nhàng. Gói 73.5g gồm 3 thanh riêng biệt, tiện lợi để dùng dần hoặc chia sẻ cùng bạn bè. Kết cấu kẹo mềm, dễ cắn, không dính răng, phù hợp cho mọi lứa tuổi. Alpenliebe 2Chew là sản phẩm mới được ra mắt thị trường và nhanh chóng chiếm được cảm tình của người tiêu dùng nhờ hương vị thơm ngon, lạ miệng và hình thức thanh kẹo tiện dụng, sang trọng hơn so với kẹo viên thông thường."
    }
];


function loadProduct(products)
{
    for(let i = 0; i<products.length; i++)
    {
        addProduct_v2(products[i]);
    }
}

function addProduct_v2(product)
{
    //Tạo thẻ div khung chứa 1 sản phẩm  - product item
            const productItem = document.createElement("div");

            //Thêm thuộc tinh cho thẻ div
            productItem.setAttribute("class", "product-item");

            //Tạo khung số 1 - chứa ảnh - product image
            const productImage = document.createElement("div");

            //Thêm thuộc tinh cho thẻ div
            productImage.setAttribute("class", "product-image h-75");

            //Thêm ảnh vào khung chứa
            const myImage = document.createElement("img");
            myImage.setAttribute("src", product.image);
            myImage.setAttribute("alt", product.name);
            myImage.setAttribute("class", "img-fluid h-100 object-fit-cover");

            //Gắn hình vào khung chứa product image
            productImage.appendChild(myImage);


            //Tạo khung số 2 - chứa thông tin sản phẩm - product info
            const productInfo = document.createElement("div");

            //Thêm thuộc tinh cho thẻ div
            productInfo.setAttribute("class", "product-info text-center h-25");

            //Thêm đối tượng p, a cho khung chứa product info
            const productName = document.createElement("p");
            const productNameText = document.createTextNode(product.name);
            productName.appendChild(productNameText);

            //gắn vào khung chứa
            productInfo.appendChild(productName);

            //Thêm đối tượng p, a cho khung chứa product info
            const productPrice = document.createElement("p");
            const productPriceText = document.createTextNode(product.price+"/túi");
            productPrice.setAttribute("class","text-danger fw-bold");
            productPrice.appendChild(productPriceText);

            //gắn vào khung chứa
             productInfo.appendChild(productPrice);


            const productLink = document.createElement("a");
            const productLinkText = document.createTextNode("Xem chi tiết");
            productLink.setAttribute("href",product.productLink+"?id="+product.id);
            productLink.appendChild(productLinkText);
            productLink.setAttribute("class", "btn btn-info");

            //Gắn link cho product Info
            productInfo.appendChild(productLink);

            //Gắn 2 khung chứa image và info vào product item
            productItem.appendChild(productImage);
            productItem.appendChild(productInfo);

            //Gắn product item vào product list
            document.getElementById("product-list").appendChild(productItem);
}

function addProduct(id, name, price, image, hyperLink)
{
    //Tạo thẻ div khung chứa 1 sản phẩm  - product item
            const productItem = document.createElement("div");

            //Thêm thuộc tinh cho thẻ div
            productItem.setAttribute("class", "product-item");

            //Tạo khung số 1 - chứa ảnh - product image
            const productImage = document.createElement("div");

            //Thêm thuộc tinh cho thẻ div
            productImage.setAttribute("class", "product-image h-75");

            //Thêm ảnh vào khung chứa
            const myImage = document.createElement("img");
            myImage.setAttribute("src", image);
            myImage.setAttribute("alt", name);
            myImage.setAttribute("class", "img-fluid h-100 object-fit-cover");

            //Gắn hình vào khung chứa product image
            productImage.appendChild(myImage);


            //Tạo khung số 2 - chứa thông tin sản phẩm - product info
            const productInfo = document.createElement("div");

            //Thêm thuộc tinh cho thẻ div
            productInfo.setAttribute("class", "product-info text-center h-25");

            //Thêm đối tượng p, a cho khung chứa product info
            const productName = document.createElement("p");
            const productNameText = document.createTextNode(name);
            productName.appendChild(productNameText);

            //gắn vào khung chứa
            productInfo.appendChild(productName);

            //Thêm đối tượng p, a cho khung chứa product info
            const productPrice = document.createElement("p");
            const productPriceText = document.createTextNode(price+"/túi");
            productPrice.setAttribute("class","text-danger fw-bold");
            productPrice.appendChild(productPriceText);

            //gắn vào khung chứa
             productInfo.appendChild(productPrice);


            const productLink = document.createElement("a");
            const productLinkText = document.createTextNode("Xem chi tiết");
            productLink.setAttribute("href",hyperLink+"?id="+id);
            productLink.appendChild(productLinkText);
            productLink.setAttribute("class", "btn btn-info");

            //Gắn link cho product Info
            productInfo.appendChild(productLink);

            //Gắn 2 khung chứa image và info vào product item
            productItem.appendChild(productImage);
            productItem.appendChild(productInfo);

            //Gắn product item vào product list
            document.getElementById("product-list").appendChild(productItem);
}