const femaleProducts = [
    {
        img1: "images/Women Clothes/Cloth 1/red-mol.webp",
        img2: "images/Women Clothes/Cloth 2/red.jpeg",
        description: "Smocked-bodice dress",
        price: "Rs.1,299"
    },
    {
        img1: "images/Women Clothes/Cloth 1/blk-col.webp",
        img2: "./images/women-col/blk-col-mol.jpeg",
        description: "Overlock-detail-dress",
        price: "Rs.1,299"
    },
    {
        img1: "images/Women Clothes/Cloth 1/button-col.webp",
        img2: "./images/women-col/button-mol.webp",
        description: "Button-top vest top",
        price: "RS.5,000"
    },
    {
        img1: "images/Women Clothes/Cloth 1/gray-col.webp",
        img2: "./images/women-col/gray-col-mol.jpeg",
        description: "Dress with Flared Skirt",
        price: "Rs.4,000"
    },
    // {
    //     img1: "https://imgs.search.brave.com/C0nksxqDqVTP9CR84b1hBC4iZGSoQZUDKt5ij7sRtVU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzEtb3B1ZVVUTUwu/anBn",
    //     img2: "./images/women-col/gray-col-mol.jpeg",
    //     description: "Dress with Flared Skirt",
    //     price: "Rs.4,000.00"
    // },
    // {
    //     img1: "https://imgs.search.brave.com/C0nksxqDqVTP9CR84b1hBC4iZGSoQZUDKt5ij7sRtVU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzEtb3B1ZVVUTUwu/anBn",
    //     img2: "./images/women-col/gray-col-mol.jpeg",
    //     description: "Dress with Flared Skirt",
    //     price: "Rs.4,000.00"
    // },
    // {
    //     img1: "https://imgs.search.brave.com/C0nksxqDqVTP9CR84b1hBC4iZGSoQZUDKt5ij7sRtVU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzEtb3B1ZVVUTUwu/anBn",
    //     img2: "./images/women-col/gray-col-mol.jpeg",
    //     description: "Dress with Flared Skirt",
    //     price: "Rs.4,000.00"
    // },
    // {
    //     img1: "https://imgs.search.brave.com/C0nksxqDqVTP9CR84b1hBC4iZGSoQZUDKt5ij7sRtVU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzEtb3B1ZVVUTUwu/anBn",
    //     img2: "./images/women-col/gray-col-mol.jpeg",
    //     description: "Dress with Flared Skirt",
    //     price: "Rs.4,000.00"
    // }
];

const maleProducts = [
    {
        img1: "images/Men Clothes/Cloth 1/men1col.webp",
        img2: "./images/women-col/men1mol.jpeg",
        description: "linen-blend trousers",
        price: "Rs.2,699",
    },
    {
        img1: "images/Men Clothes/Cloth 1/reg-f-col.webp",
        img2:"images/Men Clothes/Cloth 2/reg-t-mol.jpeg",
        description: "Loose White Fit T-shirt",
        price: "Rs.1,299",
    },
    {
        img1: "images/Men Clothes/Cloth 1/lemon-m3-col.webp",
        img2: "images/Men Clothes/Cloth 2/lemon-m3.jpeg",
        description: "Fit Crinkled resort shirt",
        price: "Rs.1,999",
    },
    {
        img1: "images/Men Clothes/Cloth 1/whitman2-col.webp",
        img2: "images/Men Clothes/Cloth 2/reg-t-mol.jpeg",
        description: "Regular White T-shirt",
        price: "Rs.599",
    }
];

const femaleProductSection = document.getElementsByClassName('female-product')[0];
const maleProductSection = document.getElementsByClassName('male-product')[0];

let femaleProductCount = 8;

const renderProducts = () => {
    let femaleContainer = femaleProducts.slice(0, femaleProductCount).map((product) => {
        return `
            <div class="col-lg-3 col-md-6 py-2 col-sm-6 col-6 feature-card-column">
                <div class="box feature-card">
                    <div class="feature-card-image">
                        <img class="px-1 py-1" src="${product.img1}" alt="Feature Image" />
                    </div>
                    <div class="feature-card-content pb-2">
                        <p class="grey">${product.description}</p>
                    </div>
                    <hr class="rule" />
                    <div class="feature-card-heading pt-3">
                        <h1 class="grey">${product.price}</h1>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    femaleProductSection.innerHTML = femaleContainer;

    let maleContainer = maleProducts.map((product) => {
        return `
            <div class="col-lg-3 col-md-6 py-2 col-sm-6 col-6 feature-card-column">
                <div class="box feature-card">
                    <div class="feature-card-image">
                        <img class="px-1 py-1" src="${product.img1}" alt="Feature Image" />
                    </div>
                    <div class="feature-card-content pb-2">
                        <p class="grey">${product.description}</p>
                    </div>
                    <hr class="rule" />
                    <div class="feature-card-heading pt-3">
                        <h1 class="grey">${product.price}</h1>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    maleProductSection.innerHTML = maleContainer;
};

window.addEventListener('resize', () => {
    console.log('Changing size of female product');
    if (window.innerWidth <= 991) {
        femaleProductCount = 4;
    } else {
        femaleProductCount = 8;
    }
    renderProducts();
});

// Initial render
renderProducts();
