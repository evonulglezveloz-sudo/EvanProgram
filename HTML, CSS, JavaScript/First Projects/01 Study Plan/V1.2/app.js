//Datos de Usuario

function registrarUsuario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const login = document.querySelector("#Login");
    login.innerHTML = "Tu usuario es: " + nombre + " " + "-" + " " + "conserva tu: " + email + "  " + "y tu: " + password + "  " + "¡💻!";
}


// Perfil en GitHub

function encuentrameGitHub() {
    const encuentrameGitHub = document.querySelector("#encuentrameGitHub");
    encuentrameGitHub.innerHTML = "evonulglezveloz-sudo";
}

function encuentrameEnGitHub() {
    const encuentrameEnGitHub = document.querySelector(".Perfil");
    encuentrameEnGitHub.setAttribute("src", "img/Perfil.jpg");
}

// Botones de mensaje informativo

function programacionArte() {
    const arteDeProgramar = document.querySelector("#pro1");
    arteDeProgramar.innerHTML = "Aprender Programacion es Divertido";
}

function practica() {
    const practicarImportancia = document.querySelector("#pro2");
    practicarImportancia.innerHTML = "La PRACTICA hace al maestro";
}

function lenguajesDeProgramacion() {
    const lenguajes = document.querySelector("#pro3");
    lenguajes.innerHTML = "Dependiendo a lo que te quieras especializar, se priorizan los lenguajes y tecnologías.";
}

// Botones descripcion de temas

// Tema 1: Front-End
function empezar1() {
    const empezar1 = document.getElementsByClassName("empezar1");
    const tema1 = document.querySelector("p.tema1");
    tema1.innerHTML = empezar1[0].innerHTML;
}

function info1() {
    const informacionDeTema1 = document.querySelector("#info1");
    informacionDeTema1.innerHTML = "Estas son las herramientas utilizadas para crear la parte visual e interactiva de una página o aplicación web, es decir, lo que el usuario ve y utiliza."
}


// Tema 2: Preprocesadores CSS
function info2() {
    const informacionDeTema2 = document.querySelector("#info2");
    informacionDeTema2.innerHTML = "SASS y LESS son preprocesadores de CSS que permiten escribir CSS de manera más eficiente y mantenible."
}


// Tema 3: Frameworks y Librerías Front-End
function info3() {
    const informacionDeTema3 = document.querySelector("#info3");
    informacionDeTema3.innerHTML = "Herramientas que facilitan la creación de interfaces web interactivas y complejas, evitando tener que programar todo desde 0."
} 

function cualEscoger() {
    const cualEscoger = document.querySelector(".cual.escoger");
    cualEscoger.innerHTML = "La elección del framework o librería dependerá de tus necesidades e intereses específicos, el tamaño del proyecto y/o tu experiencia previa."
}


// Tema 4: Back-End
function info4() {
    const informacionDeTema4 = document.querySelector("#info4");
    informacionDeTema4.innerHTML = "Es la parte de una aplicacion que funciona en el servidor. Se encarga de procesar datos, aplicar la lógica del sistema y comunicarse con bases de datos y APIs."
}

// Tema 5: APIs
function info5() {
    const informacionDeTema5 = document.querySelector("#info5");
    informacionDeTema5.innerHTML = "Una API (Interfaz de Programación de Aplicaciones) es un conjunto de reglas y protocolos que permite que diferentes aplicaciones se comuniquen entre sí, facilitando el intercambio de datos y funcionalidades."
}

// Tema 6: Bases de Datos

function info6() {
    const informacionDeTema6 = document.querySelector("#info6");
    informacionDeTema6.innerHTML = "Es un sistema que permite almacenar, organizar, consultar y modificar información de una aplicación."
}

function otros() {
    const otrasOpciones = document.getElementsByClassName("otras opciones");
    otrasOpciones[0].innerHTML = "Otras opciones de bases de datos incluyen Cassandra, CouchDB, DynamoDB, Firestore, Neo4j, entre otras.";
}

// Tema 7: Diseño de Bases de Datos
function info7() {
    const informacionDeTema7 = document.querySelector("#info7");
    informacionDeTema7.innerHTML = "Consiste en planificar cómo se almacenará, relacionará y consultará la información de una aplicación.";
}

// Tema 8: UML y Modelado
function info8() {
    const informacionDeTema8 = document.querySelector("#info8");
    informacionDeTema8.innerHTML = "UML (Lenguaje de Modelado Unificado) es un lenguaje de modelado gráfico que permite representar visualmente los aspectos estructurales y comportamentales de un sistema software.";
}

// Tema 9: Git (Control de Versiones) y GitHub
function info9() {
    const informacionDeTema9 = document.querySelector("#info9");
    informacionDeTema9.innerHTML = "Git es un sistema de control de versiones que permite a los desarrolladores rastrear y gestionar los cambios en el código fuente de un proyecto. Mientras que GitHub es una plataforma basada en la nube que utiliza Git para alojar y colaborar en proyectos de software.";
}

// Tema 10: Linux
function info10() {
    const informacionDeTema10 = document.querySelector("#info10");
    informacionDeTema10.innerHTML = "Linux es un sistema operativo de código abierto basado en Unix, conocido por su estabilidad, seguridad y flexibilidad. Es ampliamente utilizado en servidores, DevOps y cloud.";
}

function devOps() {
    const informacionDeDevOps = document.querySelector("#devOps");
    informacionDeDevOps.innerHTML = "DevOps es un conjunto de prácticas que combina el desarrollo de software (Dev) y las operaciones de TI (Ops) para mejorar la colaboración, la automatización y la entrega continua de aplicaciones y servicios.";
}

// Tema 11: Terminal
function info11() {
    const informacionDeTema11 = document.querySelector("#info11");
    informacionDeTema11.innerHTML = "Es una inerfaz que permite interactuar con el sistema operativo mediante comandos de texto, en lugar de usar únicamente una interfaz gráfica."
}

// Tema 12: Sistemas Operativos
function info12() {
    const informacionDeTema12 = document.querySelector("#info12");
    informacionDeTema12.innerHTML = "Un sistema operativo (SO) es el software principal que administra los recursos de una computadora y permite ejecutar aplicaciones."
}

// Tema 13: Contenedores
function info13() {
    const informacionDeTema13 = document.querySelector("#info13");
    informacionDeTema13.innerHTML = "Nos permiten empaquetar una aplicación junto con sus dependencias para que funcione de manera consistente en diferentes entornos."
}

// Tema 14: Cloud
function info14() {
    const informacionDeTema14 = document.querySelector("#info14");
    informacionDeTema14.innerHTML = "La Cloud (Computación en la Nube) permite utilizar recursos informáticos -servidores, bases de datos, almacenamiento, redes, etc.- a través de internet sin tener que administrar físicamente el hardware."
}

// Tema 15: Testing
function info15() {
    const informacionDeTema15 = document.querySelector("#info15");
    informacionDeTema15.innerHTML = "El Testing es el proceso de comprobar que un software funciona correctamente, detectar errores y verificar que cumple con los requisitos."
}

// Tema 16: Python
function info16() {
    const temasImportantes = document.getElementsByClassName("Lista20")
    const informacionDeTema16 = document.querySelector("#info16");
    informacionDeTema16.innerHTML = "Python es un lenguaje de programación de alto nivel, conocido por su sintaxis sencilla y utilizado en Back-End, automatización, análisis de datos, IA y scripting." + "El tema por el que se debe empezar es: " + temasImportantes.length + " " + "POO";
}

// Tema 17: JavaScript
function info17() {
    const informacionDeTema17 = document.querySelector("#info17");
    informacionDeTema17.innerHTML = "JavaScript es un lenguaje de programación utilizado principalmente para añadir interactividad y lógica a las páginas web. También puede utilizarse en Back-End, aplicaciones y otros entornos."
}

// Tema 18: TypeScript
function info18() {
    const informacionDeTema18 = document.querySelector("#info18");
    informacionDeTema18.innerHTML = "TypeScript es un lenguaje basado en JavaScript que agrega tipado estático, ayudando a detectar errores antes de ejecutar el programa y facilitando el mantenimiento de proyectos grandes."
}

// Tema 19 = XML
function importante() {
    const importante = document.querySelector("#importante");
    importante.innerHTML = "Es muy importante seguir el oren en que se presenta cada en cada TEMA, ya que cada uno de ellos se complementa con el siguiente y es necesario tener una base solida para poder avanzar en el aprendizaje de la programación.";
}

function info19() {
    const informacionDeTema19 = document.querySelector("#info19");
    informacionDeTema19.innerHTML = "XML (eXtensible Markup Language) es un lenguaje de marcado utilizado para estructurar, almacenar y transportar datos de forma organizada.";
}

// Tema 20: JSON
function info20() {
    const informacionDeTema20 = document.querySelector("#info20");
    informacionDeTema20.innerHTML = "JSON (JavaScript Object Notation) es un formato ligero utilizado para almacenar y transmitir datos, especialmente entre el Front-End, Back-End y APIs.";
}

// Tema 21: YAML
function info21() {
    const informacionDeTema21 = document.querySelector("#info21");
    informacionDeTema21.innerHTML = "YAML (YAML Ain't Markup Language) es un formato utilizado principalmente para configuración y definición de datos, especialmente en proyectos de software, DevOps y Cloud.";
}

// Tema 22: ERP
function info22() {
    const informacionDeTema22 = document.querySelector("#info22");
    informacionDeTema22.innerHTML = "ERP (Enterprise Resource Planning) es un sistema que permite a una empresa gestionar y centralizar sus procesos y recursos en una sola plataforma.";
}

// Tema 23: Desarrollo Web
function datoImportante() {
    const datoImportante = document.querySelector("#datoImportante");
    datoImportante.innerHTML = "En Desarrollo Web, no basta con saber crear páginas o APIs; es fundamental entender cómo se comunican el cliente y el servidor y cómo se protege esa comunicación. 👉 Por eso, conceptos como HTTP/HTTPS, sesiones, cookies, JWT y OAuth son especialmente importantes cuando empieces a desarrollar aplicaciones que manejen usuarios, autenticación y datos privados.";
}

function info23() {
    const informacionDeTema23 = document.querySelector("#info23");
    informacionDeTema23.innerHTML = "El desarrollo web es el proceso de crear, desarrollar y mantener sitios y aplicaciones que funcionan mediante Internet, utilizando tecnologías de Front-End, Back-End, bases de datos, servidores y protocolos de comunicación.";
}

// Tema 24: Seguridad
function datoImportanteSeguridad() {
    const seguridad = document.querySelector("#datoImportanteSeguridad");
    seguridad.innerHTML = "La seguridad debe considerarse desde el inicio del desarrollo, no como algo que se agrega cuando la aplicación ya está terminada. Un error de seguridad puede comprometer datos, cuentas y sistemas completos.";
}

function info24() {
    const informacionDeTema24 = document.querySelector("#info24");
    informacionDeTema24.innerHTML = "La seguridad informática es el conjunto de técnicas y prácticas utilizadas para proteger sistemas, aplicaciones, redes y datos frente a accesos no autorizados, ataques, errores y pérdida de información.";
}

// Tema 25: Algoritmos
function algoritmos() {
    const algoritmosImportante = document.querySelector("#algoritmos");
    algoritmosImportante.innerHTML = "Dominar los ALGORITMOS es esencial para ser un buen programador.";
}

function info25() {
    const informacionDeTema25 = document.querySelector("#info25");
    informacionDeTema25.innerHTML = "Un algoritmo es un conjunto de pasos ordenados y definidos que se siguen para resolver un problema o realizar una tarea. Son fundamentales en programación porque permiten diseñar soluciones eficientes antes de convertirlas en código."
}

// Tema 26: Estructuras de Datos
function info26() {
    const informacionDeTema26 = document.querySelector("#info26");
    informacionDeTema26.innerHTML = "Una estructura de datos es una forma de organizar y almacenar información en un programa para poder acceder a ella, modificarla y procesarla de manera eficiente."
}

// Tema 27: Arquitectura de Software
function info27() {
    const informacionDeTema27 = document.querySelector("#info27");
    informacionDeTema27.innerHTML = "La arquitectura de software es la forma en que se organizan y estructuran los componentes de un sistema, definiendo cómo se relacionan entre sí para crear aplicaciones mantenibles, escalables, seguras y eficientes."
}

// Tema 28: Patrones de Diseño
function info28() {
    const informacionDeTema28 = document.querySelector("#info28");
    informacionDeTema28.innerHTML = "Los patrones de diseño (Design Patterns) son soluciones reutilizables a problemas comunes de diseño de software. Ayudan a crear código más organizado, mantenible y flexible."
}

// Tema 29: Buenas Prácticas
function info29() {
    const informacionDeTema29 = document.querySelector("#info29");
    informacionDeTema29.innerHTML = "Las buenas prácticas de programación son técnicas y principios que permiten desarrollar código claro, organizado, seguro, eficiente y fácil de mantener. Se logran mediante la práctica constante, utilizando nombres descriptivos, evitando repetir código, dividiendo los programas en funciones y módulos, aplicando principios como DRY y SOLID, realizando pruebas y revisando y refactorizando el código cuando sea necesario. También es importante utilizar herramientas como Git y seguir estándares de programación. En general, las buenas prácticas se adquieren con experiencia, revisión y mejora continua del código.";
}

// Tema 30: Herramientas
function info30() {
    const informacionDeTema30 = document.querySelector("#info30");
    informacionDeTema30.innerHTML = "Son programas que facilitan el desarrollo, prueba y administración de aplicaciones de software. Algunas de las más utilizadas son Postman e Insomnia, que permiten probar y trabajar con APIs; Visual Studio Code, un editor de código ligero y extensible; IntelliJ IDEA, un entorno de desarrollo (IDE) especialmente utilizado para Java; y PyCharm, un IDE especializado en Python. Estas herramientas ayudan a programar, depurar, probar y organizar proyectos de manera más eficiente.";
}

// Tema 31: Automatización
function info31() {
    const informacionDeTema31 = document.querySelector("#info31");
    informacionDeTema31.innerHTML = "GitHub Actions es una herramienta que permite automatizar tareas de desarrollo, como compilar, probar y desplegar aplicaciones. Forma parte de las prácticas de Integración Continua y Entrega Continua (CI/CD), ya que ejecuta flujos de trabajo automáticamente cuando se realizan cambios en un repositorio. Esto ayuda a detectar errores rápidamente, mejorar la calidad del código y agilizar la entrega de nuevas versiones.";
}

// Tema 32: APIs de terceros
function info32() {
    const informacionDeTema32 = document.querySelector("#info32");
    informacionDeTema32.innerHTML = "Las APIs de terceros son servicios desarrollados por otras empresas o plataformas que permiten a una aplicación acceder a funciones o datos externos sin tener que desarrollarlos desde cero. Se utilizan, por ejemplo, para integrar mapas, pagos, clima, redes sociales o servicios de inteligencia artificial. Para utilizarlas normalmente se realizan solicitudes mediante HTTP y, dependiendo del servicio, se requiere una API Key o autenticación.";
}

// Tema 33: Comunicación
function info33() {
    const informacionDeTema33 = document.querySelector("#info33");
    informacionDeTema33.innerHTML = "La comunicación en el desarrollo de software consiste en transmitir información técnica de manera clara, organizada y comprensible para facilitar el trabajo entre desarrolladores y equipos.";
}

// Tema 34: Redes
function info34() {
    const informacionDeTema34 = document.querySelector("#info34");
    informacionDeTema34.innerHTML = "Las redes informáticas son sistemas que permiten la comunicación e intercambio de datos entre dispositivos, como computadoras, servidores y otros equipos, mediante diferentes protocolos."
}

// Tema 35: Desarrollo Profesional y 36: Open Source
function info35() {
    const informacionDeTema35 = document.querySelector("#info35");
    informacionDeTema35.innerHTML = "El desarrollo profesional comprende las actividades y herramientas que ayudan a un programador a demostrar sus conocimientos, mejorar sus habilidades y prepararse para oportunidades laborales. El **desarrollo profesional** incluye herramientas y actividades que permiten a los programadores demostrar sus conocimientos y prepararse para oportunidades laborales. El **portafolio** muestra proyectos y habilidades; **LinkedIn** ayuda a crear una presencia profesional y establecer contactos; el **CV** resume la formación, experiencia y habilidades; las **entrevistas técnicas** evalúan conocimientos y capacidad para resolver problemas; y plataformas como **LeetCode, HackerRank y Codewars** permiten practicar programación, algoritmos, estructuras de datos y lógica mediante diferentes retos.";
}

function info36() {
    const informacionDeTema36 = document.querySelector("#info36");
    informacionDeTema36.innerHTML = "El Open Source se refiere al software cuyo código fuente está disponible para que otras personas puedan estudiarlo, utilizarlo, modificarlo y contribuir a su desarrollo, de acuerdo con su licencia. En plataformas como GitHub se utilizan Issues para reportar problemas o proponer mejoras, Pull Requests para enviar cambios al proyecto, Forks para crear una copia de un repositorio y Code Review para revisar y mejorar el código antes de integrarlo.";   
}

// Final:
 function tecnologiaActualizada() {
    const actualizar = document.querySelector("#actualizar");
    actualizar.innerHTML = "Estas son las diversas tecnologías que se deben de estudiar y aprender para alcanzar un nivel superior como Ingeniero de Software. Se debe estar apoyando con cursos, videos, documentos, etc, para aprenderlas y dominarlas.";
 }


// Establecer atributos dinamicamente (HTML)

// Datos del usuario
function signUp() {
    const final = document.querySelector("p.signUp");
    const signUp = document.getElementById("nombreUsuario").value;
    final.innerHTML = signUp + " " + "has sido registrado!";
}

// Interaccion
function pensamientoHacker() {
    const pensamiento = document.querySelector("#pensamiento");
    const post = document.getElementById("postText").value;
    pensamiento.innerHTML = post;
}

// Otro y mas...
function mensajeOculto() {
    const mensajeOculto = document.querySelector("#mensajeOculto");
    mensajeOculto.src = "img/version 1.0.jpg";
}

//------------------------------------------------------------------------------------


// Cambiar el color de las informaciones
function saludo() {
    const saludo = document.querySelector("p.Descripcion");
    saludo.style.color = "#003399";
}

function perfil() {
    const perfil = document.querySelector("p.perfil");
    perfil.style.color = "#00FF00";
}

// Descripcion de Programación

function pythonInicio() {
    const pythonInicio = document.querySelector("p.descripcionProgramacion");
    pythonInicio.style.color = "#006600";
}

//------Temas------

// 1. Lenguajes de programación
function lenguajesProgramacionColor() {
    const lenguajesProgramacionColor = document.querySelector(".Lista1");
    lenguajesProgramacionColor.style.color = "#FF9900";
}

function seRecomiendan() {
    const seRecomiendan =  document.querySelector(".Lista2");
    seRecomiendan.style.color = "#CC0000";
}

function opcionales() {
    const opcionales = document.querySelector(".Lista3");
    opcionales.style.color = "#009933";
}

// 2. Tecnologias Front-End
function tecnologiasFrontEnd() {
    const tecnologiasFrontEnd = document.querySelector(".Lista4");
    tecnologiasFrontEnd.style.color = "#0033FF";
}

// 3. Procesadores CSS
function procesadoresCss() {
    const procesadoresCss = document.querySelector(".Lista5");
    procesadoresCss.style.color = "#000066";
}

// 4. Frameworks y librerias Front-End
function frameworksLibrerias() {
    const frameworksLibrerias = document.querySelector(".Lista6");
    frameworksLibrerias.style.color = "#00CC99";
}

// 5. Back-End
function backEnd() {
    const backEnd = document.querySelector(".Lista7");
    backEnd.style.color = "#0066FF";
}

// 6. APIs
function apiS() {
    const apiS = document.querySelector(".Lista8");
    apiS.style.color = "#003366";
}

// 7. Bases de Datos
function basesDeDatos() {
    const basesDeDatos = document.querySelector(".Lista9");
    basesDeDatos.style.color = "#333300";
}

function sePuedenRecomendar() {
    const sePuedenRecomendar = document.querySelector(".Lista10");
    sePuedenRecomendar.style.color = "#66CC00";
}

// 8. Diseños de Bases de Datos
function diseñoBasesDatos() {
    const diseñoBasesDatos = document.querySelector(".Lista11");
    diseñoBasesDatos.style.color = "#663300";
}

// 9. UML y Modelado
function umlModelado() {
    const umlModelado = document.querySelector(".Lista12");
    umlModelado.style.color = "#CCCC00";
}

// 10. Git (control de versiones)
function git() {
    const git = document.querySelector(".Lista13");
    git.style.color = "#CC3300";
}

// 11. Linux
function linux() {
    const linux = document.querySelector(".Lista14");
    linux.style.color = "#CCCC00";
}

// 12. Terminal
function terminal() {
    const terminal = document.querySelector(".Lista15");
    terminal.style.color = "#2F4F4F";
}

// 13. Sistemas Operativos
function sistemasOperativos() {
    const sistemasOperativos = document.querySelector(".Lista16");
    sistemasOperativos.style.color = "#0000CD";
}

// 14. Contenedores
function contenedores() {
    const contenedores = document.querySelector(".Lista17");
    contenedores.style.color = "#4682B4";
}

// 15. Cloud
function cloud() {
    const cloud = document.querySelector(".Lista18");
    cloud.style.color = "#D2691E";
}

// 16. Testing
function testing() {
    const testing = document.querySelector(".Lista19");
    testing.style.color = "#FF8C00";
}

// 17. Python
function python() {
    const python = document.querySelector(".Lista20");
    python.style.color = "#1E90FF";
}

// 18. JavaScript
function javaScript() {
    const javaScript = document.querySelector(".Lista21");
    javaScript.style.color = "#FFD700";
}

// 19. TypeScript
function typeScript() {
    const typeScript = document.querySelector(".Lista22");
    typeScript.style.color = "#00008B";
}

// 20. XML
function xml() {
    const xml = document.querySelector(".Lista23");
    xml.style.color = "#FF7F50";
}

// 21 JSON
function json() {
    const json = document.querySelector(".Lista24");
    json.style.color = "#696969";
}

// 22. YAML
function yaml() {
    const yaml = document.querySelector(".Lista25");
    yaml.style.color = "#DC143C";
}

// 23. ERP
function erp() {
    const erp = document.querySelector(".Lista26");
    erp.style.color = "#008B8B";
}

// 24. Desarrollo Web
function desarrolloWeb() {
    const desarrolloWeb = document.querySelector(".Lista27");
    desarrolloWeb.style.color = "#7FFFD4";
}

// 25. Seguridad
function seguridad() {
    const seguridad = document.querySelector(".Lista28");
    seguridad.style.color = "#00FF00";
}

// 26. Algoritmos
function algoritmosColor() {
    const algoritmosColor = document.querySelector(".Lista29");
    algoritmosColor.style.color = "#008080";
}

// 27. Estructuras de Datos
function estructurasDatos() {
    const estructurasDatosColor = document.querySelector(".Lista30");
    estructurasDatosColor.style.color = "#4169E1";
}

// 28. Arquitectura de Software
function arquitecturaSoftware() {
    const arquitecturaSoftware = document.querySelector(".Lista31");
    arquitecturaSoftware.style.color = "#9ACD32";
}

// 29. Patrones de Diseño
function patronesDiseño() {
    const patronesDiseño = document.querySelector(".Lista32");
    patronesDiseño.style.color = "#2F4F4F";
}

// 30. Buenas prácticas
function buenasPracticas() {
    const buenasPracticas = document.querySelector(".Lista33");
    buenasPracticas.style.color = "#008000";
}

// 31. Herramientas
function herramientas() {
    const herramientas = document.querySelector(".Lista34");
    herramientas.style.color = "#5F9EA0";
}

// 32. Automatización
function automatizacion() {
    const automatizacion = document.querySelector(".Lista35");
    automatizacion.style.color = "#228B22";
}

// 33. APis de terceros
function apiTerceros() {
    const apiTerceros = document.querySelector(".Lista36");
    apiTerceros.style.color = "#7FFFD4";
}

// 34. Comunicación
function comunicacion() {
    const comunicacion = document.querySelector(".Lista37");
    comunicacion.style.color = "#00FFFF";
}

// 35. Redes
function redes() {
    const redes = document.querySelector(".Lista38");
    redes.style.color = "#1E90FF";
}

// 36. Desarrollo Profesional
function desarrolloProfesional() {
    const desarrolloProfesional = document.querySelector(".Lista39");
    desarrolloProfesional.style.color = "#B8860B";
}

// 37. Open Source
function openSource() {
    const openSource = document.querySelector(".Lista40");
    openSource.style.color = "#D2691E";
}


// Cambio de Imagenes

// Perfil
/*function evanGonzalez() {
    const eugv = document.querySelector(".Perfil");
    const eugvLinkImagen = eugv.getAttribute("src");
    const parrafoPerfil = document.querySelector('.eugvPerfil');
    parrafoPerfil.innerText = eugvLinkImagen;
    eugv.setAttribute("src", "https://wallpaperaccess.com/full/10201489.jpg"); // Fallo por revisar
}*/

// Programacion (Logo de Python)
function pythonInicio() {
    const pythonInicio = document.querySelector("img.Python-inicio");
    const pythonImagenLink = pythonInicio.getAttribute("src");
    const pythonInicioFuente = document.querySelector(".pythonInicioFuente");
    pythonInicioFuente.innerText = pythonImagenLink;
    pythonInicio.setAttribute("src", "https://image.freepik.com/vector-gratis/lenguajes-programacion-establecen-iconos_24877-768.jpg");
}

// 1. Lenguales de Programación
function lenguajesProgramacionLogo() {
    const lenguajesProgramacionLogo = document.querySelector(".Lenguajes");
    const lenguajesProgramacionImagenLink = lenguajesProgramacionLogo.getAttribute("src");
    const lenguajesProgramacionFuente = document.querySelector(".lenguajesProgramacionFuente");
    lenguajesProgramacionFuente.innerText = lenguajesProgramacionImagenLink;
    lenguajesProgramacionLogo.setAttribute("src", "https://tse3.mm.bing.net/th/id/OIP.CTwVwBp3EMBy1sbnBSwQXQHaGq?r=0&pid=ImgDet&w=474&h=426&rs=1&o=7&rm=3");
}

// 2. Tecnologias Front-End
function tecnologiasFrontEndLogo() {
    const tecnologiasFrontEndLogo = document.querySelector(".Front-end");
    const tecnologiasFrontEndImageLink = tecnologiasFrontEndLogo.getAttribute("src");
    const tecnologiasFrontEndFuente = document.querySelector(".tecnologiasFrontEndFuente");
    tecnologiasFrontEndFuente.innerText = tecnologiasFrontEndImageLink;
    tecnologiasFrontEndLogo.setAttribute("src", "https://static.vecteezy.com/system/resources/previews/007/962/247/large_2x/front-end-word-concepts-banner-web-applications-programming-user-interface-development-presentation-website-isolated-lettering-typography-idea-with-linear-icons-outline-illustration-vector.jpg");
}

// 3. Procesadores CSS
function procesadoresCssLogo() {
    const procesadoresCssLogo = document.querySelector(".ProcesadoresCSS");
    const procesadoresCssImageLink = procesadoresCssLogo.getAttribute("src");
    const procesadoresCssFuente = document.querySelector(".procesadoresCssFuente");
    procesadoresCssFuente.innerText = procesadoresCssImageLink;
    procesadoresCssLogo.setAttribute("src", "https://tse3.mm.bing.net/th/id/OIP.HfR9lrTkRe_I4cKu_ODgeAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3");
}

// 4. Frameworks y librerías Front-End
function frameworksFrontEndLogo() {
    const frameworksFrontEndLogo = document.querySelector(".Frameworks");
    const frameworksImageLink = frameworksFrontEndLogo.getAttribute("src");
    const frameworksFrontEndFuente = document.querySelector(".frameworksFrontEndFuente");
    frameworksFrontEndFuente.innerText = frameworksImageLink;
    frameworksFrontEndLogo.setAttribute("src", "https://miro.medium.com/v2/resize:fit:1200/1*DxoqutOBboYUCWV12q7DFw.png");
}

// 5. Back-End
function backEndLogo() {
    const backEndLogo = document.querySelector(".Back-end");
    const backEndImageLink = backEndLogo.getAttribute("src");
    const backEndFuente = document.querySelector(".backEndFuente");
    backEndFuente.innerText = backEndImageLink;
    backEndLogo.setAttribute("src", "https://img.freepik.com/vetores-gratis/cabecalho-tipografico-de-back-end-processo-de-desenvolvimento-de-software-melhoria-do-design-da-interface-do-site-programacao-e-codificacao-profissao-de-ti-ilustracao-vetorial-plana-isolada_613284-210.jpg");
}

// 6. APIs
function apisLogo() {
    const apisLogo = document.querySelector(".APIs");
    const apisImageLink = apisLogo.getAttribute("src");
    const apiFuente = document.querySelector(".apiFuente");
    apiFuente.innerText = apisImageLink;
    apisLogo.setAttribute("src", "https://img.freepik.com/vector-gratis/ilustracion-api-dibujada-mano_23-2149388656.jpg");
}

// 7. Bases de Datos
function basesDatosLogo() {
    const basesDatosLogo = document.querySelector(".BasesDeDatos");
    const basesDatosImageLink = basesDatosLogo.getAttribute("src");
    const basesDatosFuente = document.querySelector(".basesDatosFuente");
    basesDatosFuente.innerText = basesDatosImageLink;
    basesDatosLogo.setAttribute("src", "https://th.bing.com/th/id/R.18568c612c984233a8092fb43652f646?rik=s3UdKkUHRPmCrA&pid=ImgRaw&r=0");
}

// 8. Diseño de Bases de Datos
function diseñoBasesDatosLogo() {
    const diseñoBasesDatosLogo = document.querySelector(".DiseñoBD");
    const diseñoBasesDatosImageLink = diseñoBasesDatosLogo.getAttribute("src");
    const diseñoBasesDatosFuente = document.querySelector(".diseñoBasesDatosFuente");
    diseñoBasesDatosFuente.innerText = diseñoBasesDatosImageLink;
    diseñoBasesDatosLogo.setAttribute("src", "https://tse4.mm.bing.net/th/id/OIP.x7kBfd1B3m5vKm7Goh0VoAHaHC?r=0&pid=ImgDet&w=474&h=450&rs=1&o=7&rm=3");
}

// 9. UML y Modelado
function umlModeladoLogo() {
    const umlModeladoLogo = document.querySelector(".UML");
    const umlModeladoImageLink = umlModeladoLogo.getAttribute("src");
    const umlModeladoFuente = document.querySelector(".umlModeladoFuente");
    umlModeladoFuente.innerText = umlModeladoImageLink;
    umlModeladoLogo.setAttribute("src", "https://media.istockphoto.com/id/1272853443/es/vector/uml-lenguaje-de-modelado-unificado-concepto-de-negocio-acr%C3%B3nimo.jpg?s=612x612&w=0&k=20&c=aYV8Kt5DS5sxAq2b-dGonoQiXO1u8mfBmTyu_NGX960=");
}

// 10. Git y GitHub
function gitLogo() {
    const gitLogo = document.querySelector(".Git");
    const gitLogoImageLink = gitLogo.getAttribute("src");
    const gitFuente = document.querySelector(".gitFuente");
    gitFuente.innerText = gitLogoImageLink;
    gitLogo.setAttribute("src", "https://tse4.mm.bing.net/th/id/OIP.PXzPX2P12GDUKalH45dNkgHaES?r=0&rs=1&pid=ImgDetMain&o=7&rm=3");
}

// 11. Linux
function linuxLogo() {
    const linuxLogo = document.querySelector(".Linux");
    const linuxLogoImageLink = linuxLogo.getAttribute("src");
    const linuxFuente = document.querySelector(".linuxFuente");
    linuxFuente.innerText = linuxLogoImageLink;
    linuxLogo.setAttribute("src", "https://pbs.twimg.com/media/GcIS678WYAABgQM.jpg");
}

// 12. Terminal
function terminalLogo() {
    const terminalLogo = document.querySelector(".Terminal");
    const terminalLogoImageLink = terminalLogo.getAttribute("src");
    const terminalFuente = document.querySelector(".terminalFuente");
    terminalFuente.innerText = terminalLogoImageLink;
    terminalLogo.setAttribute("src", "https://www.ginjfo.com/wp-content/uploads/2023/09/Terminal_Windows11.jpg");
}

// 13. Sistemas Operativos
function sistemasOperativosLogo() {
    const sistemasOperativosLogo = document.querySelector(".SistemasOperativos");
    const sistemasOperativosImageLink = document.querySelector("src");
    const sistemasOperativosFuente = document.querySelector(".sistemasOperativosFuente");
    sistemasOperativosFuente.innerText = sistemasOperativosImageLink;
    sistemasOperativosLogo.setAttribute("src", "https://th.bing.com/th/id/R.64a869cb6f17cc254d061f1e1515cd55?rik=aKVmK0vBIhS6QQ&pid=ImgRaw&r=0");
}

// 14. Contenedores
function contenedoresLogo() {
    const contenedoresLogo = document.querySelector(".Contenedores");
    const contenedoresLogoImageLink = contenedoresLogo.getAttribute("src");
    const contenedoresFuente = document.querySelector(".contenedoresFuente");
    contenedoresFuente.innerText = contenedoresLogoImageLink;
    contenedoresLogo.setAttribute("src", "https://wallpapercave.com/wp/wp8114615.jpg");
}

// 15. Cloud
function cloudLogo() {
    const cloudLogo = document.querySelector(".Cloud");
    const cloudLogoImageLink = cloudLogo.getAttribute("src");
    const cloudFuente = document.querySelector(".cloudFuente");
    cloudFuente.innerText = cloudLogoImageLink;
    cloudLogo.setAttribute("src", "https://static.vecteezy.com/system/resources/previews/006/030/600/large_2x/abstract-cloud-logo-blue-shape-cloud-computing-isolated-on-white-background-usable-for-business-and-technology-logos-flat-logo-design-template-element-vector.jpg");
}

// 16. Testing
function testingLogo() {
    const testingLogo = document.querySelector(".Testing");
    const testingLogoImageLink = testingLogo.getAttribute("src");
    const testingFuente = document.querySelector(".testingFuente");
    testingFuente.innerText = testingLogoImageLink;
    testingLogo.setAttribute("src", "https://th.bing.com/th/id/R.7648ead949f0ffb840b369ab5641c002?rik=0FkK2UBbLT%2bjfg&pid=ImgRaw&r=0");
}

// 17. Python
function pythonLogo() {
    const pythonLogo = document.querySelector(".Python");
    const pythonLogoImageLink = pythonLogo.getAttribute("src");
    const pythonFuente = document.querySelector(".pythonFuente");
    pythonFuente.innerText = pythonLogoImageLink;
    pythonLogo.setAttribute("src", "https://tse1.mm.bing.net/th/id/OIP.kbO1T90NqtfN3K-K58a20wHaHa?r=0&pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3");
}

// 18. JavaScript
function javaScriptLogo() {
    const javaScriptLogo = document.querySelector(".JavaScript");
    const javaScriptLogoImageLink = javaScriptLogo.getAttribute("src");
    const javaScriptFuente = document.querySelector(".javaScriptFuente");
    javaScriptFuente.innerText = javaScriptLogoImageLink;
    javaScriptLogo.setAttribute("src", "https://velog.velcdn.com/images/song961003/post/895fdabe-63b8-4434-9e58-3676070bbb0b/image.png");
}

// 19. TypeScript
function typeScriptLogo() {
    const typeScriptLogo = document.querySelector(".TypeScript");
    const typeScriptLogoImageLink = typeScriptLogo.getAttribute("src");
    const typeScriptFuente = document.querySelector(".typeScriptFuente");
    typeScriptFuente.innerText = typeScriptLogoImageLink;
    typeScriptLogo.setAttribute("src", "https://th.bing.com/th/id/OIP.zVfDFwbNPo_XmrVxaHLQlAHaFd?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3");
}

// 20 XML
function xmlLogo() {
    const xmlLogo = document.querySelector(".XML");
    const xmlLogoImageLink = xmlLogo.getAttribute("src");
    const xmlFuente = document.querySelector(".xmlFuente");
    xmlFuente.innerText = xmlLogoImageLink;
    xmlLogo.setAttribute("src", "https://tse2.mm.bing.net/th/id/OIP.f5VzsaYidlXEf-GD_r_zjAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3");
}

// 21. JSON
function jsonLogo() {
    const jsonLogo = document.querySelector(".JSON");
    const jsonLogoImageLink = jsonLogo.getAttribute("src");
    const jsonFuente = document.querySelector(".jsonFuente");
    jsonFuente.innerText = jsonLogoImageLink;
    jsonLogo.setAttribute("src", "https://tse1.mm.bing.net/th/id/OIP.a-Ta1AVlaqQr7EOQARSydQHaKH?r=0&pid=ImgDet&w=474&h=647&rs=1&o=7&rm=3");
}

// 22. YAML
function yamlLogo() {
    const yamlLogo = document.querySelector(".YAML");
    const yamlLogoImageLink = yamlLogo.getAttribute("src");
    const yamlFuente = document.querySelector(".yamlFuente");
    yamlFuente.innerText = yamlLogoImageLink;
    yamlLogo.setAttribute("src", "https://onlinetools.com/images/json/icons/convert-json-to-yaml.png");
}

// 23. ERP
function erpLogo() {
    const erpLogo = document.querySelector(".ERP");
    const erpLogoImageLink = erpLogo.getAttribute("src");
    const erpFuente = document.querySelector(".erpFuente");
    erpFuente.innerText = erpLogoImageLink;
    erpLogo.setAttribute("src", "https://tse1.mm.bing.net/th/id/OIP.xgfMrUTfsIIDFDRyS8L-LQHaE8?r=0&pid=ImgDet&w=474&h=316&rs=1&o=7&rm=3");
}

// 24. Desarrollo Web
function desarrolloWebLogo() {
    const desarrolloWebLogo = document.querySelector(".DesarrolloWeb");
    const desarrolloWebLogoImageLink = desarrolloWebLogo.getAttribute("src");
    const desarrolloWebFuente = document.querySelector(".desarrolloWebFuente");
    desarrolloWebFuente.innerText = desarrolloWebLogoImageLink;
    desarrolloWebLogo.setAttribute("src", "https://t4.ftcdn.net/jpg/02/83/46/33/360_F_283463385_mfnrx6RPU3BqObhVuVjYZjeZ5pegE7xq.jpg");
}

// 25. Seguridad
function seguridadLogo() {
    const seguridadLogo = document.querySelector(".Seguridad");
    const seguridadLogoImageLink = seguridadLogo.getAttribute("src");
    const seguridadFuente = document.querySelector(".seguridadFuente");
    seguridadFuente.innerText = seguridadLogoImageLink;
    seguridadLogo.setAttribute("src", "https://image.freepik.com/vector-gratis/simbolo-seguridad-informatica-elementos_18591-42714.jpg");
}

// 26. Algoritmos
function algoritmoLogo() {
    const algoritmoLogo = document.querySelector(".Algoritmos");
    const algoritmoLogoImageLink = algoritmoLogo.getAttribute("src");
    const algoritmoFuente = document.querySelector(".algoritmosFuente");
    algoritmoFuente.innerText = algoritmoLogoImageLink;
    algoritmoLogo.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/3330/3330778.png");
}

// 27. Estructuras de Datos
function estructuasDatosLogo() {
    const estructuasDatosLogo = document.querySelector(".EstructurasDatos");
    const estructurasDatosImageLink = estructuasDatosLogo.getAttribute("src");
    const estructuasDatosFuente = document.querySelector(".estructurasDatosFuente");
    estructuasDatosFuente.innerText = estructurasDatosImageLink;
    estructuasDatosLogo.setAttribute("src", "https://thumbs.dreamstime.com/z/icono-del-esquema-de-los-datos-estructurados-l%C3%ADnea-estilo-fina-la-colecci%C3%B3n-grande-iconos-elemento-simple-perfecto-pixel-139903851.jpg?w=576");
}

// 28. Arquitectura de Software
function arquitecturaSoftwareLogo() {
    const arquitecturaSoftwareLogo = document.querySelector(".ArquitecturaSoftware");
    const arquitecturaSoftwareImageLink = arquitecturaSoftwareLogo.getAttribute("src");
    const arquitecturaSoftwareFuente = document.querySelector(".arquitecturaSoftwareFuente");
    arquitecturaSoftwareFuente.innerText = arquitecturaSoftwareImageLink;
    arquitecturaSoftwareLogo.setAttribute("src", "https://tse3.mm.bing.net/th/id/OIP.QAQHpx3XoMrtmYHbLtSxrgHaGL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3");
}

// 29. Patrones de Diseño
function patronesDiseñoLogo() {
    const patronesDiseñoLogo = document.querySelector(".PatronesDiseño");
    const patronesDiseñoImageLink = patronesDiseñoLogo.getAttribute("src");
    const patronesDiseñoFuente = document.querySelector(".patronesDiseñoFuente");
    patronesDiseñoFuente.innerText = patronesDiseñoImageLink;
    patronesDiseñoLogo.setAttribute("src", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/2b769f82518325.5d1f9b0df09c5.png");
}

// 30. Buenas Prácticas
function buenasPracticasLogo() {
    const buenasPracticasLogo = document.querySelector(".BuenasPracticas");
    const buenasPracticasImageLink = buenasPracticasLogo.getAttribute("src");
    const buenasPracticasFuente = document.querySelector(".buenasPracticasFuente");
    buenasPracticasFuente.innerText = buenasPracticasImageLink;
    buenasPracticasLogo.setAttribute("src", "https://th.bing.com/th/id/R.9ce334aab6f80becd8305f26fa394fc4?rik=Bu4M5a7n2S6v6Q&pid=ImgRaw&r=0");
}

// 31. Herramientas
function herramientasLogo() {
    const herramientasLogo = document.querySelector(".Herramientas");
    const herramientasImageLink = herramientasLogo.getAttribute("src");
    const herramientasFuente = document.querySelector(".herramientasFuente");
    herramientasFuente.innerText = herramientasImageLink;
    herramientasLogo.setAttribute("src", "https://static.vecteezy.com/system/resources/previews/014/918/943/original/tool-logo-design-icon-illustration-tools-logo-design-tool-flat-icon-vector.jpg");
}

// 32. Automatización
function automatizacionLogo() {
    const automatizacionLogo = document.querySelector(".Automatizacion");
    const automatizacionImageLink = automatizacionLogo.getAttribute("src");
    const automatizacionFuente = document.querySelector(".automatizacionFuente");
    automatizacionFuente.innerText = automatizacionImageLink;
    automatizacionLogo.setAttribute("src", "https://cdn-icons-png.flaticon.com/256/8807/8807368.png");
}

// 33. APIs de Terceros
function apisTercerosLogo() {
    const apisTercerosLogo = document.querySelector(".APIsTerceros");
    const apisTercerosImageLink = apisTercerosLogo.getAttribute("src");
    const apisTercerosFuente = document.querySelector(".apisFuente");
    apisTercerosFuente.innerText = apisTercerosImageLink;
    apisTercerosLogo.setAttribute("src", "https://media.datacamp.com/cms/ad_4nxeehbt7ogcr3t3yoa1oofybcbbaezlyactz8h5kmwf0j08pogtzmij7ml4nod5-ii-yrn7nu2h73pd7tvr9kbj1chswst0dcssqhv0f9xskum8x7p6z-xjfl0t2rrgfr4-ufpdq.png");
} 

// 34. Comunicación
function comunicacionLogo() {
    const comunicacionLogo = document.querySelector(".Comunicacion");
    const comunicacionImageLink = comunicacionLogo.getAttribute("src");
    const comunicacionFuente = document.querySelector(".comunicacionFuente");
    comunicacionFuente.innerText = comunicacionImageLink;
    comunicacionLogo.setAttribute("src", "https://tse2.mm.bing.net/th/id/OIP.Yyngtk-UFkPstcQqAdhA3AHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3");
}

// 35. Redes
function redesLogo() {
    const redesLogo = document.querySelector(".Redes");
    const redesImageLink = redesLogo.getAttribute("src");
    const redesFuente = document.querySelector(".redesFuente");
    redesFuente.innerText = redesImageLink;
    redesLogo.setAttribute("src", "https://axiomventures.co/wp-content/uploads/2021/11/Development-Colored.png");
}

// 36. Desarrollo Profesional y 37. Open Source
function desarrolloProfesionalLogo() {
    const desarrolloProfesionalLogo = document.querySelector(".DesarrolloProfesional");
    const desarrolloProfesionalImageLink = desarrolloProfesionalLogo.getAttribute("src");
    const desarrolloProfesionalFuente = document.querySelector(".desarrolloProfesionalFuente");
    desarrolloProfesionalFuente.innerText = desarrolloProfesionalImageLink;
    desarrolloProfesionalLogo.setAttribute("src", "https://tse3.mm.bing.net/th/id/OIP.Fg3okPUvk6vaHBX1XByASwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3");
}