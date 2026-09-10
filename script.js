// ======================================================
// PRODUTOS
// ======================================================

const products = [

  {
    name: "Roleta de Açaí 1 Litro",
    cat: "Açaí",
    desc: "Uma combinação deliciosa para compartilhar ou aproveitar do seu jeito.",
    emoji: "🍧",
    art: "art-acai"
  },

  {
    name: "Açaí",
    cat: "Açaí",
    desc: "Açaí cremoso com diversas opções de acompanhamentos.",
    emoji: "🍓",
    art: "art-acai"
  },

  {
    name: "Picolé de Leite",
    cat: "Picolés",
    desc: "Cremoso, refrescante e perfeito para qualquer momento.",
    emoji: "🍭",
    art: "art-picole"
  },

  {
    name: "Sorvetes",
    cat: "Sorvetes",
    desc: "Diversos sabores para você escolher seus favoritos.",
    emoji: "🍦",
    art: "art-sorvete"
  },

  {
    name: "Milk-shake",
    cat: "Milk-shakes",
    desc: "Uma bebida cremosa e deliciosa para deixar o dia ainda melhor.",
    emoji: "🥤",
    art: "art-shake"
  },

  {
    name: "Potes de Sorvete",
    cat: "Potes",
    desc: "Leve seu sabor favorito para casa.",
    emoji: "🍨",
    art: "art-pote"
  },

  {
    name: "Mercearia",
    cat: "Mercearia",
    desc: "Produtos para completar sua compra com praticidade.",
    emoji: "🛒",
    art: "art-mercearia"
  }

];


// ======================================================
// LINK DO PEDIDO
// ======================================================

const orderUrl =
  "https://osenhordoacai.menudino.com/";


// ======================================================
// CRIAR CARD DO PRODUTO
// ======================================================

function createProductCard(product) {

  return `

    <article class="product">

      <div class="product-art ${product.art}">
        ${product.emoji}
      </div>

      <div class="product-info">

        <span class="tag">
          ${product.cat}
        </span>

        <h3>
          ${product.name}
        </h3>

        <p>
          ${product.desc}
        </p>

        <div class="product-footer">

          <span>
            Confira online
          </span>

          <a
            href="${orderUrl}"
            target="_blank"
            rel="noopener"
          >
            Pedir →
          </a>

        </div>

      </div>

    </article>

  `;

}


// ======================================================
// PRODUTOS EM DESTAQUE
// ======================================================

const featuredProducts =
  document.getElementById("featuredProducts");


featuredProducts.innerHTML =
  products
    .slice(0, 6)
    .map(createProductCard)
    .join("");


// ======================================================
// CARDÁPIO
// ======================================================

const menuProducts =
  document.getElementById("menuProducts");


// ======================================================
// RENDERIZAR CARDÁPIO
// ======================================================

function renderMenu(category = "Todos") {

  const filteredProducts =
    category === "Todos"
      ? products
      : products.filter(
          product => product.cat === category
        );


  menuProducts.innerHTML =
    filteredProducts
      .map(createProductCard)
      .join("");

}


// Inicializa o cardápio

renderMenu();


// ======================================================
// BOTÕES DAS CATEGORIAS DO CARDÁPIO
// ======================================================

document
  .querySelectorAll(".tab")
  .forEach(tab => {

    tab.addEventListener("click", () => {

      document
        .querySelectorAll(".tab")
        .forEach(button => {

          button.classList.remove("active");

        });


      tab.classList.add("active");


      renderMenu(
        tab.dataset.tab
      );

    });

  });


// ======================================================
// CATEGORIAS DA PRIMEIRA PARTE
// ======================================================

document
  .querySelectorAll(".category-card")
  .forEach(button => {

    button.addEventListener("click", () => {

      const category =
        button.dataset.category;


      document
        .querySelectorAll(".tab")
        .forEach(tab => {

          tab.classList.toggle(
            "active",
            tab.dataset.tab === category
          );

        });


      renderMenu(category);


      document
        .getElementById("cardapio")
        .scrollIntoView({
          behavior: "smooth"
        });

    });

  });


// ======================================================
// MENU MOBILE
// ======================================================

const menuToggle =
  document.querySelector(".menu-toggle");

const menu =
  document.querySelector(".menu");


menuToggle.addEventListener("click", () => {

  menu.classList.toggle("open");

});


// Fechar menu depois de clicar

document
  .querySelectorAll(".menu a")
  .forEach(link => {

    link.addEventListener("click", () => {

      menu.classList.remove("open");

    });

  });


// ======================================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ======================================================

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "reveal"
          );

        }

      });

    },
    {
      threshold: 0.08
    }
  );


// Elementos que terão animação

document
  .querySelectorAll(
    ".section-heading, " +
    ".category-card, " +
    ".product, " +
    ".review, " +
    ".gallery-item, " +
    ".about-card, " +
    ".contact-list > *"
  )
  .forEach(element => {

    observer.observe(element);

  });