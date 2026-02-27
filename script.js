document.addEventListener("DOMContentLoaded", function () {

    fetch("header.html")
        .then(response => response.text())
        .then(data => {

            // Inject header
            document.getElementById("header").innerHTML = data;

            /* =============================
               ทุกอย่างต้องอยู่หลัง inject
            ============================== */

            /* ---------- Currency ---------- */
            const currency = document.querySelector(".currency");
            const currencyItems = document.querySelectorAll(".currency-dropdown div");
            const currentCurrency = document.getElementById("currentCurrency");

            if (currency && currentCurrency) {

                // เปิด / ปิด dropdown
                currency.addEventListener("click", function (e) {
                    e.stopPropagation();
                    currency.classList.toggle("active");
                });

                // เปลี่ยนค่า currency
                currencyItems.forEach(item => {
                    item.addEventListener("click", function (e) {
                        e.stopPropagation();
                        currentCurrency.textContent = this.dataset.value;
                        currency.classList.remove("active");
                    });
                });

                // คลิกข้างนอกให้ปิด
                document.addEventListener("click", function (e) {
                    if (!currency.contains(e.target)) {
                        currency.classList.remove("active");
                    }
                });
            }

            /* ---------- Hamburger ---------- */
            const hamburger = document.getElementById("hamburger");
            const menu = document.getElementById("centerMenu");

            if (hamburger && menu) {
                hamburger.addEventListener("click", function () {
                    menu.classList.toggle("active");
                });
            }

            /* ---------- Editorial Mobile Toggle ---------- */
           const editorial = document.querySelector(".editorial");

if (editorial) {
    editorial.addEventListener("click", function (e) {

        if (window.innerWidth <= 768) {
            e.preventDefault();
            editorial.classList.toggle("active");
        }

    });
}



const floatingText = document.querySelector(".floating-text");

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    let maxSize = 240;   // ตอนอยู่บนสุด
    let minSize = 40;    // เล็กสุด
    let shrinkSpeed = 0.2;  // ความเร็วการหด

    let newSize = maxSize - scrollY * shrinkSpeed;

    if (newSize < minSize) newSize = minSize;

    floatingText.style.fontSize = newSize + "px";
});








const buttons = document.querySelectorAll(".button-group button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});





        })
        .catch(error => console.error("Error loading header:", error));

    /* ---------- Media Hover (อยู่นอก fetch ได้) ---------- */
    const mediaBox = document.querySelector(".featured-hover .media-box");
    const video = document.querySelector(".featured-hover .featured-video");

    if (mediaBox && video) {
        mediaBox.addEventListener("mouseenter", () => {
            video.play();
        });

        mediaBox.addEventListener("mouseleave", () => {
            video.pause();
            video.currentTime = 0;
        });
    }


    const dataSets = {
    1: [
        { title: "CAN I MODIFY OR CANCEL MY ORDER?", content: "Orders can only be modified or canceled within 1 hour of purchase. After this time, we begin processing your order to ensure fast delivery." },
        { title: "WHAT PAYMENT METHODS DO YOU ACCEPT?", content: "We accept major credit cards, debit cards, and selected online payment gateways. All transactions are securely processed." },
        { title: "WHY WAS MY ORDER CANCELLED?", content: "Orders may be cancelled due to payment verification issues, stock availability, or incomplete information. You will be notified via email if this occurs." }
    ],
    2: [
        { title: "DO YOU OFFER INTERNATIONAL SHIPPING?", content: "Items can be returnd within 14 days of receipt. provided they are unworn. unwashed. and in original condotion with tahs attached." },
        { title: "HOW LONG DOES DELIVERY TAKE?", content: "Domestic orders typically arrive within 2–5 business days. International deliveries may take 7–14 business days depending on customs processing." },
        { title: "HOW CAN I TRACK MY ORDER?", content: "Once your order has been shipped, you will receive a tracking number via email to monitor your delivery status in real time." }
    ],
    3: [
        { title: "WHAT IS YOUR RETURN POLICY?", content: "Items can be returned within 14 days of receipt, provided they are unworn, unwashed, and in original condition with tags attached." },
        { title: "CAN I EXCHANGE FOR A DIFFERENT SIZE?", content: "Yes, exchanges are available for size changes, subject to stock availability. Please contact our support team before sending the item back." },
        { title: "ARE SALE ITEMS REFUNDABLE?", content: "Sale items are final and cannot be refunded unless the item received is defective or incorrect." }
    ],
    4: [
        { title: "HOW DO I FIND MY CORRECT SIZE?", content: "เPlease refer to our size guide available on each product page. If you are between sizes, we recommend sizing up for a more relaxed fit." },
        { title: "ARE YOUR PRODUCTS TRUE TO SIZE?", content: "Our products are designed to fit true to size unless otherwise stated. Fit details are included in the product description." },
        { title: "HOW SHOULD I CARE FOR MY ITEMS?", content: "Care instructions are listed on the garment label and product page. We recommend washing in cold water and air drying to maintain quality." }
    ]
};

const buttons = document.querySelectorAll('.button-group button');
const items = document.querySelectorAll('.accordion-item');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const set = dataSets[button.dataset.set];

        items.forEach((item, index) => {
            item.querySelector('.title').textContent = set[index].title;
            item.querySelector('.accordion-content').textContent = set[index].content;
            item.classList.remove('active'); // ปิดทุกอันตอนเปลี่ยน
        });
    });
});

// accordion เปิดปิด
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        header.parentElement.classList.toggle('active');
    });
});

});
