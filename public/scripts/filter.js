let ids = [];
let products = {
  products: [
    {
      name: "Cassels Milk Stou",
      description: "Cassels & Sons Brewing. Cerveza porter y stout.",
      price: 75000,
      img: "cassels.png",
      filterId: 1,
    },
    {
      name: "Camba Pale Ale",
      description: "La Souche Franc-Bois d’hiver. Cerveza pale.",
      price: 85300,
      img: "camba.png",
      filterId: 2,
    },
    {
      name: "Votus Nº 001",
      description: "India Pale Ale del año 2019. Nº 001 Red IPA.",
      price: 75000,
      img: "votus.png",
      filterId: 3,
    },
    {
      name: "Prairie Artisian",
      description: "Ales Prairie Noir Whiskey Barrel Aged Imperial Stout 12oz.",
      price: 85300,
      img: "prairie-artisian.png",
      filterId: 1,
    },
    {
      name: "Lost Abbey",
      description: "The Lost Abbey Citrus Sin American Wild Ale 750ml.",
      price: 75000,
      img: "lost-abbey.png",
      filterId: 2,
    },
    {
      name: "Prairie",
      description: "Prairie Artisa Ales Paradise Imperial Stout 12oz.",
      price: 85300,
      img: "prairie.png",
      filterId: 3,
    },
    {
      name: "Redrice",
      description: "Hitachino Nest Beer Red Rice Ale 330ml.",
      price: 85300,
      img: "redrice.png",
      filterId: 1,
    },
    {
      name: "Cascade",
      description: "Cascade Brewing 2017 Brunch Line BA NORTHWEST Sour Ale.",
      price: 175000,
      img: "cascade.png",
      filterId: 2,
    },
    {
      name: "Topa Topa",
      description: "Topa Topa BREWING CO. 5th Year Anniversary clear Ipa 16oz.",
      price: 85300,
      img: "topa.png",
      filterId: 3,
    },
    {
      name: "Mira Brune Nº 6",
      description: "Brown Ale, Brown Mira American Style.",
      price: 375000,
      img: "mira.png",
      filterId: 1,
    },
  ],
};
class Filter {
  constructor(data) {
    this.data = data;
    this.render();
  }

  render() {
    let titulo = document.createElement("h1"); //crear elementos html
    let texto = document.createTextNode("Soy un titulo"); //crear texto para el titulo
    titulo.appendChild(texto); //le agregamos el texto al titulo
    //buscamos el elemento content y le agregamos el titulo
    document.getElementById("content").appendChild(titulo);
    console.log(titulo);
  }

  handleChange(check) {
    /*
      aca debes revisar que botonoes están check
       */
  }
  filter() {
    /* Aca debes filtrar segun el filtro seleccionado */
  }

  cleanFilter() {
    /*Aca limpias el filtro */
  }

  responsiveMenu() {
    //Esto es para mobile, IGNORAR
    let menu = document.getElementById("filtroMenu");
    menu.classList.toggle("isActive");
  }
}

const inicializar = async () => {
  window.filtro = new Filter();
};

inicializar();
