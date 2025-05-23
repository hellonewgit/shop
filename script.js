const productsData = [
    {
        id: 1,
        title: "Кровать TATRAN",
        description: "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
        price: 120000,
        category: "bed",
        like: false,
        image: "img/product1.jpg" // можно заменить на реальные пути
    },
    {
        id: 2,
        title: "Кресло VILORA",
        description: "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань.",
        price: 21000,
        category: "chair",
        like: false,
        image: "img/product2.png"
    },
    {
        id: 3,
        title: "Стол MENU",
        description: "Европейский дуб - отличается особой прочностью и стабильностью.",
        price: 34000,
        category: "table",
        like: false,
        image: "img/product3.png"
    },
    {
        id: 4,
        title: "Диван ASKESTA",
        description: "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать.",
        price: 68000,
        category: "sofa",
        like: false,
        image: "img/product2.png"
    },
    {
        id: 5,
        title: "Кресло LUNAR",
        description: "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки.",
        price: 40000,
        category: "chair",
        like: false,
        image: "img/product3.png"
    },
    {
        id: 6,
        title: "Шкаф Nastan",
        description: "Мебель может быть оснащена разнообразными системами подсветки.",
        price: 80000,
        category: "wardrobe",
        like: false,
        image: "img/product1.jpg"
    }
];

const productsEl = document.querySelector('.products');

productsData.forEach(product => {
    const { title, description, price, image, id, category } = product;
    productsEl.innerHTML += `
            <article class="product" data-id="${id}" data-category="${category}" data-price="${price}">
                <div class="product__box">
                    <div class="product__icons">
                        <button class="product__icon product__add-btn" type="button" aria-label="Добавить в корзину">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </button>
                        <button class="product__icon product__like-btn" type="button" aria-label="Поставтиь лайк">
                            <i class="fa-duotone fa-solid fa-heart"></i>
                        </button>
                    </div>
                    <img src="${image}" alt="${title}" class="product__img">
                </div>
                <div class="product__content">
                    <h2 class="product__title">${title}</h2>
                    <p class="product__description">${description}</p>
                    <div class="product__price">${price} руб.</div>
                </div>
            </article>
            `
});

const cartProducts = [];

const productAddBtn = document.querySelectorAll('.product__add-btn');

productAddBtn.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const productId = event.target.closest('.product').dataset.id;
        const product = productsData.find(product => product.id === parseInt(productId));

        if (!cartProducts.includes(product)) {
            cartProducts.push(product);
        }

        console.log(cartProducts);
    })
})