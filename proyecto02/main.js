const productos = [
  {
    id: 1,
    nombre: 'Camiseta Negra',
    precio: 12,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710153890/project-landing/shopping_u0outn.webp',
    estrellas: 4,
    colores: ['Negro'],
    modelo: ['Camiseta']
  },
  {
    id: 2,
    nombre: 'Cuadro',
    precio: 35,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710154053/project-landing/caballo-ajedrez-negro-01-600x600_rryyy5.jpg',
    estrellas: 5,
    colores: ['Negro', 'Blanco'],
    modelo: ['Cuadro']
  },
  {
    id: 3,
    nombre: 'Piezas Decoración',
    precio: 20,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710153970/project-landing/il_794xN.5587074338_hmwr_txl8tv.webp',
    estrellas: 3,
    colores: ['Negro', 'Blanco', 'Amarillo'],
    modelo: ['Piezas Decoración']
  },
  {
    id: 4,
    nombre: 'Taza Jaque Mate',
    precio: 10,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710153779/project-landing/VI2-00206-00025_92433_blanco-negro_wwfok7.jpg',
    estrellas: 4,
    colores: ['Blanco'],
    modelo: ['Taza']
  },
  {
    id: 5,
    nombre: 'Termo',
    precio: 15,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710153688/project-landing/il_794xN.5841412913_c2d9_uaprka.avif',
    estrellas: 5,
    colores: ['Blanco'],
    modelo: ['Termo']
  },
  {
    id: 6,
    nombre: 'Libro Historia del Ajedrez',
    precio: 18,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710153223/project-landing/md31281392157_ljmbxx.jpg',
    estrellas: 5,
    modelo: ['Historia Ajedrez']
  },
  {
    id: 7,
    nombre: 'Manual Iniciación',
    precio: 10,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710153348/project-landing/903984-360x480_n1sqlf.jpg',
    estrellas: 5,
    modelo: ['Manual']
  },
  {
    id: 8,
    nombre: 'Planillas Notación',
    precio: 8,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710153619/project-landing/shopping_zqq8uw.webp',
    estrellas: 3,
    colores: ['Azul'],
    modelo: ['Planillas']
  },
  {
    id: 9,
    nombre: 'Reloj',
    precio: 22,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710153043/project-landing/511ipNsPQ9L._AC_SL1000__imqzv9.jpg',
    estrellas: 4,
    colores: ['Marrón'],
    modelo: ['Reloj']
  },
  {
    id: 10,
    nombre: 'Tablero Ajedrez',
    precio: 30,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710152944/project-landing/s-l500_sxlgfq.jpg',
    estrellas: 4,
    modelo: ['Tablero']
  },
  {
    id: 11,
    nombre: 'Piezas de Madera',
    precio: 15,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710152698/project-landing/shopping_vvj4ha.webp',
    estrellas: 3,
    modelo: ['Piezas Madera']
  },
  {
    id: 12,
    nombre: 'Piezas de Cristal',
    precio: 20,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710154139/project-landing/shopping_mbgmke.webp',
    estrellas: 4,
    modelo: ['Piezas Cristal']
  },
  {
    id: 13,
    nombre: 'Tablero Plegable',
    precio: 30,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710154522/project-landing/juego-ajedrez-plegable-de-madera-yo-juegoo_1_stvkbx.jpg',
    estrellas: 4,
    modelo: ['Tablero PLegable']
  },
  {
    id: 14,
    nombre: 'Tablero Electrónico',
    precio: 50,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710153096/project-landing/4032153008103_1_tqgprk.jpg',
    estrellas: 4,
    modelo: ['Tablero Electrónico']
  },
  {
    id: 15,
    nombre: 'Set de Ajedrez',
    precio: 40,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710153004/project-landing/81chsyBTjIL._AC_SL1500__gsrsoy.jpg',
    estrellas: 4,
    modelo: ['Set Ajedrez']
  }
]

const MODELOS = []

const fillModelos = (products) => {
  MODELOS.splice(0)
  for (const product of products) {
    if (!MODELOS.includes(product.modelo)) {
      MODELOS.push(product.modelo)
    }
  }
}

fillModelos(productos)

const createSelectModel = () => {
  const divFiltros = document.querySelector('#filtros')
  const selectModel = document.createElement('select')

  for (const modelo of MODELOS) {
    const option = document.createElement('option')

    option.value = modelo
    option.textContent = modelo

    selectModel.appendChild(option)
  }
  divFiltros.appendChild(selectModel)
}

const printProducts = (products) => {
  const divProducts = document.querySelector('#productos')
  divProducts.innerHTML = ''

  for (const product of products) {
    const divProduct = document.createElement('div')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const nombre = document.createElement('h3')
    const precio = document.createElement('p')
    const divEstrellas = document.createElement('div')

    for (let i = 1; i <= 5; i++) {
      const estrella = document.createElement('div')
      estrella.className = 'estrella'
      if (product.estrellas >= i) {
        estrella.classList.add('rellena')
      }
      divEstrellas.appendChild(estrella)
    }

    divProduct.className = 'flex-container'
    divEstrellas.classList.add('estrellas')
    divEstrellas.classList.add('flex-container')
    img.src = product.img
    nombre.textContent = product.nombre
    precio.textContent = `${product.precio} €`

    divProduct.appendChild(divImg)
    divImg.appendChild(img)
    divProduct.appendChild(nombre)
    divProduct.appendChild(precio)
    divProduct.appendChild(divEstrellas)
    divProducts.appendChild(divProduct)
  }
}
printProducts(productos)
createSelectModel()

document.addEventListener('DOMContentLoaded', function () {
  var azul = document.getElementById('azul')
  var color1 = 'red'
  var color2 = ' rgb(56, 225, 231)'
  var currentColor = color1

  setInterval(function () {
    if (currentColor === color1) {
      azul.style.borderColor = color2
      currentColor = color2
    } else {
      azul.style.borderColor = color1
      currentColor = color1
    }
  }, 1000)
})
