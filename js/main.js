import "../sass/style.scss"

const buscarProdutos = document.querySelector("#buscar");
const productoContainer = document.querySelector(".producto__grid");


window.swiper = new Swiper({
    el:'.slider__container',
    slideClass:'slider__slide',
    createElements:true,
    autoplay:{
        delay:5000,
    },
    loop: true,
    pagination:true,
    navigation:true,
})

const productos = [
    { id: 1, nombre: "Airpods", img: "../img/airpods.png", descripcion: "Los AirPods son auriculares inalámbricos desarrollados por Apple Inc. que se conectan automáticamente a dispositivos Apple, como el iPhone, iPad, Mac y Apple Watch", informacion: "Los AirPods utilizan la tecnología Bluetooth",precio: 1000 },
    { id: 2, nombre: "Alfombra Gamer", img: "../img/alfombra.png", descripcion: "La alfombrilla de ratón, alfombrilla posa ratón, almohadilla de ratón o mousepad es la superficie sobre la que se apoya y se desliza el ratón", informacion: "Algunas alfombrillas tienen bordes reforzados ",precio: 2000  },
    { id: 3, nombre: "Apple Watch", img: "../img/apple-watch.png", descripcion: "El Apple Watch es un reloj inteligente diseñado por Apple que combina estilo con funcionalidades avanzadas.", informacion: "La duración de la batería varía según el uso",precio: 3000  },
    { id: 4, nombre: "Audifono", img: "../img/audifono.png", descripcion: "Un audífono es un dispositivo electrónico diseñado para mejorar la audición de personas con pérdida auditiva.", informacion: "Capta el sonido del entorno y lo convierte en señales eléctricas.",precio: 4000  },
    { id: 5, nombre: "Camara", img: "../img/camara.png", descripcion: "Una cámara es un dispositivo utilizado para capturar imágenes estáticas o videos mediante la grabación de la luz que se refleja o emite desde objetos.", informacion: "El procesador de imagen convierte los datos",precio: 5000  },
    { id: 6, nombre: "Cilla Gamer", img: "../img/cilla.png", descripcion: "Silla gamer es un tipo de silla diseñada específicamente para ofrecer comodidad y soporte durante largas sesiones de juego.", informacion: "Reducen la fatiga y el malestar durante largas sesiones",precio: 6000  },
    { id: 7, nombre: "Control", img: "../img/control.png", descripcion: "El control de la PS5, conocido como DualSense, es el último mando de juego desarrollado por Sony para su consola PlayStation 5.", informacion: "El DualSense tiene un diseño ergonómico que se adapta",precio: 7000  },
    { id: 8, nombre: "Cpu", img: "../img/cpu.png", descripcion: "La CPU, o Unidad Central de Procesamiento (Central Processing Unit en inglés), es el componente principal de un sistema informático responsable de ejecutar programas, realizar cálculos y procesar datos.", informacion: "La CPU ejecuta instrucciones de programas",precio: 8000  },
    { id: 9, nombre: "Ipad", img: "../img/ipad.png", descripcion: "El iPad es una línea de tabletas diseñadas y comercializadas por Apple Inc. Desde su lanzamiento inicial en 2010, el iPad ha evolucionado considerablemente, ofreciendo una combinación de rendimiento, portabilidad y versatilidad.", informacion: "Disponible en varios tamaños de pantalla, desde 7.9",precio: 9000  },
    { id: 10, nombre: "Iphone", img: "../img/iphone.png", descripcion: "El iPhone es una línea de teléfonos inteligentes desarrollada por Apple Inc., conocida por su integración de hardware de alta calidad, software intuitivo y diseño elegante.", informacion: "Incluye cámaras traseras de alta resolución",precio: 10000  },
    { id: 11, nombre: "MacBook Air", img: "../img/laptop.png", descripcion: "Diseño delgado y ligero, ideal para usuarios que necesitan portabilidad sin comprometer el rendimiento. Disponible en tamaños de pantalla de 13 pulgadas.", informacion: "Disponible con pantallas Retina de alta resolución",precio: 11000  },
    { id: 12, nombre: "Mause Gamer", img: "../img/mause.png", descripcion: " (o ratón en español) es un dispositivo de entrada utilizado con computadoras para controlar el movimiento del cursor en la pantalla y seleccionar elementos mediante clics o gestos. ", informacion: " Equipados con sensores ópticos o láser",precio: 12000  },
    { id: 13, nombre: "Microfono Gamer", img: "../img/microfono.png", descripcion: "Un micrófono es un dispositivo de entrada que convierte el sonido en señales eléctricas para su grabación o amplificación.", informacion: "Puede conectar a través de USB",precio: 13000  },
    { id: 14, nombre: "Monitor Gamer", img: "../img/monitor.png", descripcion: "El monitor es un dispositivo de salida esencial para computadoras, utilizado para mostrar información visual al usuario.", informacion: "Resoluciones, desde Full HD (1920x1080)",precio: 14000  },
    { id: 15, nombre: "Ps5", img: "../img/ps5.png", descripcion: "La PlayStation 5 (PS5) es la consola de videojuegos de última generación desarrollada por Sony Interactive Entertainment. Desde su lanzamiento en noviembre de 2020, la PS5 ha sido aclamada por su rendimiento avanzado, diseño innovador y una nueva gama de experiencias de juego inmersivas.", informacion: "Equipada con un procesador AMD Ryzen Zen",precio: 15000  },
    { id: 16, nombre: "Stereo", img: "../img/stereo.png", descripcion: "Un estéreo, también conocido como sistema de sonido estéreo o equipo de música, es un dispositivo electrónico diseñado para reproducir audio con alta fidelidad y calidad.", informacion: "Utiliza dos canales de sonido independientes ",precio: 16000 },
    { id: 17, nombre: "Switch", img: "../img/switch.png", descripcion: "La Nintendo Switch es una consola de videojuegos híbrida desarrollada por Nintendo. Fue lanzada el 3 de marzo de 2017 y destaca por su capacidad de funcionar tanto como consola de sobremesa conectada a un televisor como consola portátil.", informacion: "Incluye características como el modo multijugador",precio: 17000  },
    { id: 18, nombre: "Teclado Game", img: "../img/teclado.png", descripcion: "Un teclado para videojuegos está diseñado específicamente para mejorar la experiencia de juego, proporcionando una respuesta rápida, comodidad y durabilidad. A menudo, estos teclados incluyen características adicionales que no se encuentran en los teclados estándar.", informacion: "Utilizan interruptores mecánicos",precio: 18000 },
    { id: 19, nombre: "Tripode", img: "../img/tripode.png", descripcion: "Un trípode es un soporte de tres patas que proporciona estabilidad a cámaras, telescopios, teléfonos móviles y otros dispositivos de captura de imagen. Es una herramienta esencial para fotógrafos y videógrafos, ya que permite tomar imágenes y videos nítidos y estables.", informacion: "Los trípodes pueden estar hechos de aluminio",precio: 19000 },
    { id: 20, nombre: "Tv", img: "../img/tv.png", descripcion: "Un televisor es un dispositivo electrónico diseñado para recibir y mostrar señales de televisión, así como también reproducir contenido multimedia desde diversas fuentes como streaming, consolas de videojuegos, reproductores de Blu-ray, entre otros.", informacion: "Las opciones comunes incluyen Full HD",precio: 20000 }
];
  

function misProductos(productosFiltrados){

    productoContainer.innerHTML ="";
    productosFiltrados.forEach(element => {
        const articleProduct = document.createElement("article");
        articleProduct.classList.add("producto");

        const divProduct = document.createElement("div");
        divProduct.classList.add("producto__container");
        articleProduct.append(divProduct);

        const pictureContainer = document.createElement("picture");
        pictureContainer.classList.add("imagen-container");

        const imgProducto = document.createElement("img");
        imgProducto.setAttribute("src",`${element.img}`);
        imgProducto.setAttribute("alt",`${element.nombre}`)
        imgProducto.classList.add("producto__img");
        imgProducto.addEventListener("click",() => modalProduct(element.id))
        pictureContainer.append(imgProducto);
        divProduct.append(pictureContainer);

        const divInfo = document.createElement("div");
        divInfo.classList.add("producto__info");

        const divPrecios = document.createElement("div");
        divPrecios.classList.add("producto__precios");

        const productoNombre = document.createElement("h3");
        productoNombre.classList.add("producto__nombre");
        productoNombre.innerText = `${element.nombre}`;
        divPrecios.append(productoNombre);

        const productoPrecio = document.createElement("p");
        productoPrecio.classList.add("producto__precio");
        productoPrecio.innerText = `$${element.precio}`;
        divPrecios.append(productoPrecio);

        divInfo.append(divPrecios);

        const divInformacion = document.createElement("p");
        divInformacion.classList.add("info");
        divInformacion.innerText = `${element.informacion}`;
        divInfo.append(divInformacion);

        const imgStrella = document.createElement("img");
        imgStrella.classList.add("estrella__img");
        imgStrella.setAttribute("src","../img/estrellas.png");
        divInfo.append(imgStrella);

        const boton = document.createElement("a");
        boton.setAttribute("href","#")
        boton.classList.add("boton");
        boton.innerText = "Add to Cart";
        divInfo.append(boton);

        articleProduct.append(divInfo)
        productoContainer.append(articleProduct)

    });
}

function buscarProduct(){
    buscarProdutos.addEventListener("input",() =>{
        const nombreProductos = buscarProdutos.value.toLowerCase();
        const productosFiltrados = productos.filter(filtracion =>
            filtracion.nombre.toLowerCase().includes(nombreProductos)
        )
        misProductos(productosFiltrados)
    })
}

function modalProduct(Id){
    const modalFiltrado = productos.find(i => i.id === Id);

    const body = document.querySelector("body");
    body.classList.add("overflow-hidden")

    const caontainerModal = document.createElement("div");
    caontainerModal.classList.add("modal");
    caontainerModal.addEventListener("click",() => cerrarModal())
    const modalImg = document.createElement("img");
    modalImg.setAttribute("src",modalFiltrado.img);
    modalImg.classList.add("img-modal");

    const boton = document.createElement("button");
    boton.classList.add("boton");
    boton.innerText = "X";
    boton.addEventListener("click",() =>{
        modal.remove()
    })

    caontainerModal.append(modalImg);
    caontainerModal.append(boton)
    body.append(caontainerModal)


    
}

function cerrarModal(){
    const body = document.querySelector("body");
    body.classList.remove("overflow-hidden");
    
    const modal = document.querySelector(".modal");
    // modal.classLista.add("final")
    setTimeout(() => {
        modal?.remove();
    }, 500);
}

buscarProduct()
misProductos(productos)