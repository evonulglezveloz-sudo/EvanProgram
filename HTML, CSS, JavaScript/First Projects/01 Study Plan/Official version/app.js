// Perfil en GitHub

function mostrarUsuarioGitHub() {
    const usuarioGithub = document.querySelector("#usuario-github");
    usuarioGithub.innerHTML = "evonulglezveloz-sudo";
}

function cambiarImagenPerfil() {
    const imagenPerfil = document.querySelector(".imagen-perfil");
    imagenPerfil.setAttribute("src", "img/Perfil.jpg");
    // La foto de Spiderman es cuadrada: se muestra completa (retrato) y no recortada
    imagenPerfil.classList.add("imagen-perfil-retrato");
}

// Botones de mensaje informativo

function mostrarMensajeArteProgramacion() {
    const mensajeArteProgramacion = document.querySelector("#mensaje-arte-programacion");
    mensajeArteProgramacion.innerHTML = "Aprender Programacion es Divertido";
}

function mostrarMensajePractica() {
    const mensajePractica = document.querySelector("#mensaje-practica");
    mensajePractica.innerHTML = "La PRACTICA hace al maestro";
}

function mostrarMensajeLenguajes() {
    const mensajeLenguajes = document.querySelector("#mensaje-lenguajes");
    mensajeLenguajes.innerHTML = "Dependiendo a lo que te quieras especializar, se priorizan los lenguajes y tecnologías.";
}

// Botones descripcion de temas

// Tema 1: Front-End
function mostrarTemaPorDondeEmpezarFrontEnd() {
    const itemHtmlCssInicio = document.getElementsByClassName("item-html-css-inicio");
    const temaInicioFrontEnd = document.querySelector("p.tema-inicio-front-end");
    temaInicioFrontEnd.innerHTML = itemHtmlCssInicio[0].innerHTML;
}

function mostrarDescripcionTecnologiasFrontEnd() {
    const descripcionTecnologiasFrontEnd = document.querySelector("#descripcion-tecnologias-front-end");
    descripcionTecnologiasFrontEnd.innerHTML = "Estas son las herramientas utilizadas para crear la parte visual e interactiva de una página o aplicación web, es decir, lo que el usuario ve y utiliza."
}


// Tema 2: Preprocesadores CSS
function mostrarDescripcionProcesadoresCss() {
    const descripcionProcesadoresCss = document.querySelector("#descripcion-procesadores-css");
    descripcionProcesadoresCss.innerHTML = "SASS y LESS son preprocesadores de CSS que permiten escribir CSS de manera más eficiente y mantenible."
}


// Tema 3: Frameworks y Librerías Front-End
function mostrarDescripcionFrameworksFrontEnd() {
    const descripcionFrameworksFrontEnd = document.querySelector("#descripcion-frameworks-front-end");
    descripcionFrameworksFrontEnd.innerHTML = "Herramientas que facilitan la creación de interfaces web interactivas y complejas, evitando tener que programar todo desde 0."
} 

function mostrarRespuestaCualEscoger() {
    const respuestaCualEscoger = document.querySelector(".respuesta-cual-escoger");
    respuestaCualEscoger.innerHTML = "La elección del framework o librería dependerá de tus necesidades e intereses específicos, el tamaño del proyecto y/o tu experiencia previa."
}


// Tema 4: Back-End
function mostrarDescripcionBackEnd() {
    const descripcionBackEnd = document.querySelector("#descripcion-back-end");
    descripcionBackEnd.innerHTML = "Es la parte de una aplicacion que funciona en el servidor. Se encarga de procesar datos, aplicar la lógica del sistema y comunicarse con bases de datos y APIs."
}

// Tema 5: APIs
function mostrarDescripcionApis() {
    const descripcionApis = document.querySelector("#descripcion-apis");
    descripcionApis.innerHTML = "Una API (Interfaz de Programación de Aplicaciones) es un conjunto de reglas y protocolos que permite que diferentes aplicaciones se comuniquen entre sí, facilitando el intercambio de datos y funcionalidades."
}

// Tema 6: Bases de Datos

function mostrarDescripcionBasesDatos() {
    const descripcionBasesDatos = document.querySelector("#descripcion-bases-datos");
    descripcionBasesDatos.innerHTML = "Es un sistema que permite almacenar, organizar, consultar y modificar información de una aplicación."
}

function mostrarOtrasOpcionesBasesDatos() {
    const otrasOpcionesBasesDatos = document.getElementsByClassName("otras-opciones-bases-datos");
    otrasOpcionesBasesDatos[0].innerHTML = "Otras opciones de bases de datos incluyen Cassandra, CouchDB, DynamoDB, Firestore, Neo4j, entre otras.";
}

// Tema 7: Diseño de Bases de Datos
function mostrarDescripcionDisenoBasesDatos() {
    const descripcionDisenoBasesDatos = document.querySelector("#descripcion-diseno-bases-datos");
    descripcionDisenoBasesDatos.innerHTML = "Consiste en planificar cómo se almacenará, relacionará y consultará la información de una aplicación.";
}

// Tema 8: UML y Modelado
function mostrarDescripcionUmlModelado() {
    const descripcionUmlModelado = document.querySelector("#descripcion-uml-modelado");
    descripcionUmlModelado.innerHTML = "UML (Lenguaje de Modelado Unificado) es un lenguaje de modelado gráfico que permite representar visualmente los aspectos estructurales y comportamentales de un sistema software.";
}

// Tema 9: Git (Control de Versiones) y GitHub
function mostrarDescripcionGit() {
    const descripcionGit = document.querySelector("#descripcion-git");
    descripcionGit.innerHTML = "Git es un sistema de control de versiones que permite a los desarrolladores rastrear y gestionar los cambios en el código fuente de un proyecto. Mientras que GitHub es una plataforma basada en la nube que utiliza Git para alojar y colaborar en proyectos de software.";
}

// Tema 10: Linux
function mostrarDescripcionLinux() {
    const descripcionLinux = document.querySelector("#descripcion-linux");
    descripcionLinux.innerHTML = "Linux es un sistema operativo de código abierto basado en Unix, conocido por su estabilidad, seguridad y flexibilidad. Es ampliamente utilizado en servidores, DevOps y cloud.";
}

function mostrarDescripcionDevOps() {
    const descripcionDevops = document.querySelector("#descripcion-devops");
    descripcionDevops.innerHTML = "DevOps es un conjunto de prácticas que combina el desarrollo de software (Dev) y las operaciones de TI (Ops) para mejorar la colaboración, la automatización y la entrega continua de aplicaciones y servicios.";
}

// Tema 11: Terminal
function mostrarDescripcionTerminal() {
    const descripcionTerminal = document.querySelector("#descripcion-terminal");
    descripcionTerminal.innerHTML = "Es una inerfaz que permite interactuar con el sistema operativo mediante comandos de texto, en lugar de usar únicamente una interfaz gráfica."
}

// Tema 12: Sistemas Operativos
function mostrarDescripcionSistemasOperativos() {
    const descripcionSistemasOperativos = document.querySelector("#descripcion-sistemas-operativos");
    descripcionSistemasOperativos.innerHTML = "Un sistema operativo (SO) es el software principal que administra los recursos de una computadora y permite ejecutar aplicaciones."
}

// Tema 13: Contenedores
function mostrarDescripcionContenedores() {
    const descripcionContenedores = document.querySelector("#descripcion-contenedores");
    descripcionContenedores.innerHTML = "Nos permiten empaquetar una aplicación junto con sus dependencias para que funcione de manera consistente en diferentes entornos."
}

// Tema 14: Cloud
function mostrarDescripcionCloud() {
    const descripcionCloud = document.querySelector("#descripcion-cloud");
    descripcionCloud.innerHTML = "La Cloud (Computación en la Nube) permite utilizar recursos informáticos -servidores, bases de datos, almacenamiento, redes, etc.- a través de internet sin tener que administrar físicamente el hardware."
}

// Tema 15: Testing
function mostrarDescripcionTesting() {
    const descripcionTesting = document.querySelector("#descripcion-testing");
    descripcionTesting.innerHTML = "El Testing es el proceso de comprobar que un software funciona correctamente, detectar errores y verificar que cumple con los requisitos."
}

// Tema 16: Python
function mostrarDescripcionPython() {
    const temasImportantes = document.getElementsByClassName("lista-python")
    const descripcionPython = document.querySelector("#descripcion-python");
    descripcionPython.innerHTML = "Python es un lenguaje de programación de alto nivel, conocido por su sintaxis sencilla y utilizado en Back-End, automatización, análisis de datos, IA y scripting." + "El tema por el que se debe empezar es: " + temasImportantes.length + " " + "POO";
}

// Tema 17: JavaScript
function mostrarDescripcionJavaScript() {
    const descripcionJavascript = document.querySelector("#descripcion-javascript");
    descripcionJavascript.innerHTML = "JavaScript es un lenguaje de programación utilizado principalmente para añadir interactividad y lógica a las páginas web. También puede utilizarse en Back-End, aplicaciones y otros entornos."
}

// Tema 18: TypeScript
function mostrarDescripcionTypeScript() {
    const descripcionTypescript = document.querySelector("#descripcion-typescript");
    descripcionTypescript.innerHTML = "TypeScript es un lenguaje basado en JavaScript que agrega tipado estático, ayudando a detectar errores antes de ejecutar el programa y facilitando el mantenimiento de proyectos grandes."
}

// Tema 19 = XML
function mostrarMensajeImportanteOrdenTemas() {
    const mensajeImportanteOrdenTemas = document.querySelector("#mensaje-importante-orden-temas");
    mensajeImportanteOrdenTemas.innerHTML = "Es muy importante seguir el oren en que se presenta cada en cada TEMA, ya que cada uno de ellos se complementa con el siguiente y es necesario tener una base solida para poder avanzar en el aprendizaje de la programación.";
}

function mostrarDescripcionXml() {
    const descripcionXml = document.querySelector("#descripcion-xml");
    descripcionXml.innerHTML = "XML (eXtensible Markup Language) es un lenguaje de marcado utilizado para estructurar, almacenar y transportar datos de forma organizada.";
}

// Tema 20: JSON
function mostrarDescripcionJson() {
    const descripcionJson = document.querySelector("#descripcion-json");
    descripcionJson.innerHTML = "JSON (JavaScript Object Notation) es un formato ligero utilizado para almacenar y transmitir datos, especialmente entre el Front-End, Back-End y APIs.";
}

// Tema 21: YAML
function mostrarDescripcionYaml() {
    const descripcionYaml = document.querySelector("#descripcion-yaml");
    descripcionYaml.innerHTML = "YAML (YAML Ain't Markup Language) es un formato utilizado principalmente para configuración y definición de datos, especialmente en proyectos de software, DevOps y Cloud.";
}

// Tema 22: ERP
function mostrarDescripcionErp() {
    const descripcionErp = document.querySelector("#descripcion-erp");
    descripcionErp.innerHTML = "ERP (Enterprise Resource Planning) es un sistema que permite a una empresa gestionar y centralizar sus procesos y recursos en una sola plataforma.";
}

// Tema 23: Desarrollo Web
function mostrarDatoImportanteDesarrolloWeb() {
    const datoImportanteDesarrolloWeb = document.querySelector("#dato-importante-desarrollo-web");
    datoImportanteDesarrolloWeb.innerHTML = "En Desarrollo Web, no basta con saber crear páginas o APIs; es fundamental entender cómo se comunican el cliente y el servidor y cómo se protege esa comunicación. 👉 Por eso, conceptos como HTTP/HTTPS, sesiones, cookies, JWT y OAuth son especialmente importantes cuando empieces a desarrollar aplicaciones que manejen usuarios, autenticación y datos privados.";
}

function mostrarDescripcionDesarrolloWeb() {
    const descripcionDesarrolloWeb = document.querySelector("#descripcion-desarrollo-web");
    descripcionDesarrolloWeb.innerHTML = "El desarrollo web es el proceso de crear, desarrollar y mantener sitios y aplicaciones que funcionan mediante Internet, utilizando tecnologías de Front-End, Back-End, bases de datos, servidores y protocolos de comunicación.";
}

// Tema 24: Seguridad
function mostrarDatoImportanteSeguridad() {
    const datoImportanteSeguridad = document.querySelector("#dato-importante-seguridad");
    datoImportanteSeguridad.innerHTML = "La seguridad debe considerarse desde el inicio del desarrollo, no como algo que se agrega cuando la aplicación ya está terminada. Un error de seguridad puede comprometer datos, cuentas y sistemas completos.";
}

function mostrarDescripcionSeguridad() {
    const descripcionSeguridad = document.querySelector("#descripcion-seguridad");
    descripcionSeguridad.innerHTML = "La seguridad informática es el conjunto de técnicas y prácticas utilizadas para proteger sistemas, aplicaciones, redes y datos frente a accesos no autorizados, ataques, errores y pérdida de información.";
}

// Tema 25: Algoritmos
function mostrarMensajeImportanciaAlgoritmos() {
    const mensajeImportanciaAlgoritmos = document.querySelector("#mensaje-importancia-algoritmos");
    mensajeImportanciaAlgoritmos.innerHTML = "Dominar los ALGORITMOS es esencial para ser un buen programador.";
}

function mostrarDescripcionAlgoritmos() {
    const descripcionAlgoritmos = document.querySelector("#descripcion-algoritmos");
    descripcionAlgoritmos.innerHTML = "Un algoritmo es un conjunto de pasos ordenados y definidos que se siguen para resolver un problema o realizar una tarea. Son fundamentales en programación porque permiten diseñar soluciones eficientes antes de convertirlas en código."
}

// Tema 26: Estructuras de Datos
function mostrarDescripcionEstructurasDatos() {
    const descripcionEstructurasDatos = document.querySelector("#descripcion-estructuras-datos");
    descripcionEstructurasDatos.innerHTML = "Una estructura de datos es una forma de organizar y almacenar información en un programa para poder acceder a ella, modificarla y procesarla de manera eficiente."
}

// Tema 27: Arquitectura de Software
function mostrarDescripcionArquitecturaSoftware() {
    const descripcionArquitecturaSoftware = document.querySelector("#descripcion-arquitectura-software");
    descripcionArquitecturaSoftware.innerHTML = "La arquitectura de software es la forma en que se organizan y estructuran los componentes de un sistema, definiendo cómo se relacionan entre sí para crear aplicaciones mantenibles, escalables, seguras y eficientes."
}

// Tema 28: Patrones de Diseño
function mostrarDescripcionPatronesDiseno() {
    const descripcionPatronesDiseno = document.querySelector("#descripcion-patrones-diseno");
    descripcionPatronesDiseno.innerHTML = "Los patrones de diseño (Design Patterns) son soluciones reutilizables a problemas comunes de diseño de software. Ayudan a crear código más organizado, mantenible y flexible."
}

// Tema 29: Buenas Prácticas
function mostrarDescripcionBuenasPracticas() {
    const descripcionBuenasPracticas = document.querySelector("#descripcion-buenas-practicas");
    descripcionBuenasPracticas.innerHTML = "Las buenas prácticas de programación son técnicas y principios que permiten desarrollar código claro, organizado, seguro, eficiente y fácil de mantener. Se logran mediante la práctica constante, utilizando nombres descriptivos, evitando repetir código, dividiendo los programas en funciones y módulos, aplicando principios como DRY y SOLID, realizando pruebas y revisando y refactorizando el código cuando sea necesario. También es importante utilizar herramientas como Git y seguir estándares de programación. En general, las buenas prácticas se adquieren con experiencia, revisión y mejora continua del código.";
}

// Tema 30: Herramientas
function mostrarDescripcionHerramientas() {
    const descripcionHerramientas = document.querySelector("#descripcion-herramientas");
    descripcionHerramientas.innerHTML = "Son programas que facilitan el desarrollo, prueba y administración de aplicaciones de software. Algunas de las más utilizadas son Postman e Insomnia, que permiten probar y trabajar con APIs; Visual Studio Code, un editor de código ligero y extensible; IntelliJ IDEA, un entorno de desarrollo (IDE) especialmente utilizado para Java; y PyCharm, un IDE especializado en Python. Estas herramientas ayudan a programar, depurar, probar y organizar proyectos de manera más eficiente.";
}

// Tema 31: Automatización
function mostrarDescripcionAutomatizacion() {
    const descripcionAutomatizacion = document.querySelector("#descripcion-automatizacion");
    descripcionAutomatizacion.innerHTML = "GitHub Actions es una herramienta que permite automatizar tareas de desarrollo, como compilar, probar y desplegar aplicaciones. Forma parte de las prácticas de Integración Continua y Entrega Continua (CI/CD), ya que ejecuta flujos de trabajo automáticamente cuando se realizan cambios en un repositorio. Esto ayuda a detectar errores rápidamente, mejorar la calidad del código y agilizar la entrega de nuevas versiones.";
}

// Tema 32: APIs de terceros
function mostrarDescripcionApisTerceros() {
    const descripcionApisTerceros = document.querySelector("#descripcion-apis-terceros");
    descripcionApisTerceros.innerHTML = "Las APIs de terceros son servicios desarrollados por otras empresas o plataformas que permiten a una aplicación acceder a funciones o datos externos sin tener que desarrollarlos desde cero. Se utilizan, por ejemplo, para integrar mapas, pagos, clima, redes sociales o servicios de inteligencia artificial. Para utilizarlas normalmente se realizan solicitudes mediante HTTP y, dependiendo del servicio, se requiere una API Key o autenticación.";
}

// Tema 33: Comunicación
function mostrarDescripcionComunicacion() {
    const descripcionComunicacion = document.querySelector("#descripcion-comunicacion");
    descripcionComunicacion.innerHTML = "La comunicación en el desarrollo de software consiste en transmitir información técnica de manera clara, organizada y comprensible para facilitar el trabajo entre desarrolladores y equipos.";
}

// Tema 34: Redes
function mostrarDescripcionRedes() {
    const descripcionRedes = document.querySelector("#descripcion-redes");
    descripcionRedes.innerHTML = "Las redes informáticas son sistemas que permiten la comunicación e intercambio de datos entre dispositivos, como computadoras, servidores y otros equipos, mediante diferentes protocolos."
}

// Tema 35: Desarrollo Profesional y 36: Open Source
function mostrarDescripcionDesarrolloProfesional() {
    const descripcionDesarrolloProfesional = document.querySelector("#descripcion-desarrollo-profesional");
    descripcionDesarrolloProfesional.innerHTML = "El desarrollo profesional comprende las actividades y herramientas que ayudan a un programador a demostrar sus conocimientos, mejorar sus habilidades y prepararse para oportunidades laborales. El <strong>desarrollo profesional</strong> incluye herramientas y actividades que permiten a los programadores demostrar sus conocimientos y prepararse para oportunidades laborales. El <strong>portafolio</strong> muestra proyectos y habilidades; <strong>LinkedIn</strong> ayuda a crear una presencia profesional y establecer contactos; el <strong>CV</strong> resume la formación, experiencia y habilidades; las <strong>entrevistas técnicas</strong> evalúan conocimientos y capacidad para resolver problemas; y plataformas como <strong>LeetCode, HackerRank y Codewars</strong> permiten practicar programación, algoritmos, estructuras de datos y lógica mediante diferentes retos.";
}

function mostrarDescripcionOpenSource() {
    const descripcionOpenSource = document.querySelector("#descripcion-open-source");
    descripcionOpenSource.innerHTML = "El Open Source se refiere al software cuyo código fuente está disponible para que otras personas puedan estudiarlo, utilizarlo, modificarlo y contribuir a su desarrollo, de acuerdo con su licencia. En plataformas como GitHub se utilizan Issues para reportar problemas o proponer mejoras, Pull Requests para enviar cambios al proyecto, Forks para crear una copia de un repositorio y Code Review para revisar y mejorar el código antes de integrarlo.";   
}

// Final:
function mostrarMensajeTecnologiasActualizadas() {
    const mensajeTecnologiasActualizadas = document.querySelector("#mensaje-tecnologias-actualizadas");
    mensajeTecnologiasActualizadas.innerHTML = "Estas son las diversas tecnologías que se deben de estudiar y aprender para alcanzar un nivel superior como Ingeniero de Software. Se debe estar apoyando con cursos, videos, documentos, etc, para aprenderlas y dominarlas.";
 }


// Establecer atributos dinamicamente (HTML)

// Datos del usuario
function mostrarUsuarioRegistrado() {
    const mensajeRegistroUsuario = document.querySelector("p.mensaje-registro-usuario");
    const nombreUsuario = document.getElementById("campo-nombre-usuario").value;
    mensajeRegistroUsuario.innerHTML = nombreUsuario + " " + "has sido registrado!";
}

// Interaccion
function mostrarPensamientoHacker() {
    const pensamientoPublicado = document.querySelector("#pensamiento-publicado");
    const textoPensamiento = document.getElementById("texto-pensamiento").value;
    pensamientoPublicado.innerHTML = textoPensamiento;
}

// Otro y mas...
function revelarMensajeOculto() {
    const imagenMensajeOculto = document.querySelector("#imagen-mensaje-oculto");
    imagenMensajeOculto.src = "img/version 1.0.jpg";
}

//------------------------------------------------------------------------------------


// Cambiar el color de las informaciones
function cambiarColorDescripcionPersonal() {
    const descripcionPersonal = document.querySelector("p.descripcion-personal");
    descripcionPersonal.style.color = "#003399";
}

function cambiarColorPerfilCarrera() {
    const perfilCarrera = document.querySelector("p.perfil-carrera");
    perfilCarrera.style.color = "#00FF00";
}

// Descripcion de Programación

function cambiarColorDescripcionProgramacion() {
    const descripcionProgramacion = document.querySelector("p.descripcion-programacion");
    descripcionProgramacion.style.color = "#006600";
}

//------Temas------

// 1. Lenguajes de programación
function cambiarColorListaLenguajesProgramacion() {
    const listaLenguajesProgramacion = document.querySelector(".lista-lenguajes-programacion");
    listaLenguajesProgramacion.style.color = "#FF9900";
}

function cambiarColorListaLenguajesRecomendados() {
    const seRecomiendan =  document.querySelector(".lista-lenguajes-recomendados");
    seRecomiendan.style.color = "#CC0000";
}

function cambiarColorListaLenguajesOpcionales() {
    const listaLenguajesOpcionales = document.querySelector(".lista-lenguajes-opcionales");
    listaLenguajesOpcionales.style.color = "#009933";
}

// 2. Tecnologias Front-End
function cambiarColorListaTecnologiasFrontEnd() {
    const listaTecnologiasFrontEnd = document.querySelector(".lista-tecnologias-front-end");
    listaTecnologiasFrontEnd.style.color = "#0033FF";
}

// 3. Procesadores CSS
function cambiarColorListaProcesadoresCss() {
    const listaProcesadoresCss = document.querySelector(".lista-procesadores-css");
    listaProcesadoresCss.style.color = "#000066";
}

// 4. Frameworks y librerias Front-End
function cambiarColorListaFrameworksFrontEnd() {
    const listaFrameworksFrontEnd = document.querySelector(".lista-frameworks-front-end");
    listaFrameworksFrontEnd.style.color = "#00CC99";
}

// 5. Back-End
function cambiarColorListaBackEnd() {
    const listaBackEnd = document.querySelector(".lista-back-end");
    listaBackEnd.style.color = "#0066FF";
}

// 6. APIs
function cambiarColorListaApis() {
    const listaApis = document.querySelector(".lista-apis");
    listaApis.style.color = "#003366";
}

// 7. Bases de Datos
function cambiarColorListaBasesDatos() {
    const listaBasesDatos = document.querySelector(".lista-bases-datos");
    listaBasesDatos.style.color = "#333300";
}

function cambiarColorListaBasesDatosRecomendadas() {
    const listaBasesDatosRecomendadas = document.querySelector(".lista-bases-datos-recomendadas");
    listaBasesDatosRecomendadas.style.color = "#66CC00";
}

// 8. Diseños de Bases de Datos
function cambiarColorListaDisenoBasesDatos() {
    const listaDisenoBasesDatos = document.querySelector(".lista-diseno-bases-datos");
    listaDisenoBasesDatos.style.color = "#663300";
}

// 9. UML y Modelado
function cambiarColorListaUmlModelado() {
    const listaUmlModelado = document.querySelector(".lista-uml-modelado");
    listaUmlModelado.style.color = "#CCCC00";
}

// 10. Git (control de versiones)
function cambiarColorListaGit() {
    const listaGit = document.querySelector(".lista-git");
    listaGit.style.color = "#CC3300";
}

// 11. Linux
function cambiarColorListaLinux() {
    const listaLinux = document.querySelector(".lista-linux");
    listaLinux.style.color = "#CCCC00";
}

// 12. Terminal
function cambiarColorListaTerminal() {
    const listaTerminal = document.querySelector(".lista-terminal");
    listaTerminal.style.color = "#2F4F4F";
}

// 13. Sistemas Operativos
function cambiarColorListaSistemasOperativos() {
    const listaSistemasOperativos = document.querySelector(".lista-sistemas-operativos");
    listaSistemasOperativos.style.color = "#0000CD";
}

// 14. Contenedores
function cambiarColorListaContenedores() {
    const listaContenedores = document.querySelector(".lista-contenedores");
    listaContenedores.style.color = "#4682B4";
}

// 15. Cloud
function cambiarColorListaCloud() {
    const listaCloud = document.querySelector(".lista-cloud");
    listaCloud.style.color = "#D2691E";
}

// 16. Testing
function cambiarColorListaTesting() {
    const listaTesting = document.querySelector(".lista-testing");
    listaTesting.style.color = "#FF8C00";
}

// 17. Python
function cambiarColorListaPython() {
    const listaPython = document.querySelector(".lista-python");
    listaPython.style.color = "#1E90FF";
}

// 18. JavaScript
function cambiarColorListaJavaScript() {
    const listaJavascript = document.querySelector(".lista-javascript");
    listaJavascript.style.color = "#FFD700";
}

// 19. TypeScript
function cambiarColorListaTypeScript() {
    const listaTypescript = document.querySelector(".lista-typescript");
    listaTypescript.style.color = "#00008B";
}

// 20. XML
function cambiarColorListaXml() {
    const listaXml = document.querySelector(".lista-xml");
    listaXml.style.color = "#FF7F50";
}

// 21 JSON
function cambiarColorListaJson() {
    const listaJson = document.querySelector(".lista-json");
    listaJson.style.color = "#696969";
}

// 22. YAML
function cambiarColorListaYaml() {
    const listaYaml = document.querySelector(".lista-yaml");
    listaYaml.style.color = "#DC143C";
}

// 23. ERP
function cambiarColorListaErp() {
    const listaErp = document.querySelector(".lista-erp");
    listaErp.style.color = "#008B8B";
}

// 24. Desarrollo Web
function cambiarColorListaDesarrolloWeb() {
    const listaDesarrolloWeb = document.querySelector(".lista-desarrollo-web");
    listaDesarrolloWeb.style.color = "#7FFFD4";
}

// 25. Seguridad
function cambiarColorListaSeguridad() {
    const listaSeguridad = document.querySelector(".lista-seguridad");
    listaSeguridad.style.color = "#00FF00";
}

// 26. Algoritmos
function cambiarColorListaAlgoritmos() {
    const listaAlgoritmos = document.querySelector(".lista-algoritmos");
    listaAlgoritmos.style.color = "#008080";
}

// 27. Estructuras de Datos
function cambiarColorListaEstructurasDatos() {
    const listaEstructurasDatos = document.querySelector(".lista-estructuras-datos");
    listaEstructurasDatos.style.color = "#4169E1";
}

// 28. Arquitectura de Software
function cambiarColorListaArquitecturaSoftware() {
    const listaArquitecturaSoftware = document.querySelector(".lista-arquitectura-software");
    listaArquitecturaSoftware.style.color = "#9ACD32";
}

// 29. Patrones de Diseño
function cambiarColorListaPatronesDiseno() {
    const listaPatronesDiseno = document.querySelector(".lista-patrones-diseno");
    listaPatronesDiseno.style.color = "#2F4F4F";
}

// 30. Buenas prácticas
function cambiarColorListaBuenasPracticas() {
    const listaBuenasPracticas = document.querySelector(".lista-buenas-practicas");
    listaBuenasPracticas.style.color = "#008000";
}

// 31. Herramientas
function cambiarColorListaHerramientas() {
    const listaHerramientas = document.querySelector(".lista-herramientas");
    listaHerramientas.style.color = "#5F9EA0";
}

// 32. Automatización
function cambiarColorListaAutomatizacion() {
    const listaAutomatizacion = document.querySelector(".lista-automatizacion");
    listaAutomatizacion.style.color = "#228B22";
}

// 33. APis de terceros
function cambiarColorListaApisTerceros() {
    const listaApisTerceros = document.querySelector(".lista-apis-terceros");
    listaApisTerceros.style.color = "#7FFFD4";
}

// 34. Comunicación
function cambiarColorListaComunicacion() {
    const listaComunicacion = document.querySelector(".lista-comunicacion");
    listaComunicacion.style.color = "#00FFFF";
}

// 35. Redes
function cambiarColorListaRedes() {
    const listaRedes = document.querySelector(".lista-redes");
    listaRedes.style.color = "#1E90FF";
}

// 36. Desarrollo Profesional
function cambiarColorListaDesarrolloProfesional() {
    const listaDesarrolloProfesional = document.querySelector(".lista-desarrollo-profesional");
    listaDesarrolloProfesional.style.color = "#B8860B";
}

// 37. Open Source
function cambiarColorListaOpenSource() {
    const listaOpenSource = document.querySelector(".lista-open-source");
    listaOpenSource.style.color = "#D2691E";
}


// Cambio de Imagenes

// Programacion (Logo de Python)
function cambiarImagenPythonInicio() {
    const imagenPythonInicio = document.querySelector("img.imagen-python-inicio");
    const enlaceImagenPythonInicio = imagenPythonInicio.getAttribute("src");
    const fuenteImagenPythonInicio = document.querySelector(".fuente-imagen-python-inicio");
    fuenteImagenPythonInicio.innerText = enlaceImagenPythonInicio;
    imagenPythonInicio.setAttribute("src", "https://image.freepik.com/vector-gratis/lenguajes-programacion-establecen-iconos_24877-768.jpg");
}

// 1. Lenguales de Programación
function cambiarImagenLenguajesProgramacion() {
    const imagenLenguajesProgramacion = document.querySelector(".imagen-lenguajes-programacion");
    const enlaceImagenLenguajesProgramacion = imagenLenguajesProgramacion.getAttribute("src");
    const fuenteImagenLenguajesProgramacion = document.querySelector(".fuente-imagen-lenguajes-programacion");
    fuenteImagenLenguajesProgramacion.innerText = enlaceImagenLenguajesProgramacion;
    imagenLenguajesProgramacion.setAttribute("src", "https://tse3.mm.bing.net/th/id/OIP.CTwVwBp3EMBy1sbnBSwQXQHaGq?r=0&pid=ImgDet&w=474&h=426&rs=1&o=7&rm=3");
}

// 2. Tecnologias Front-End
function cambiarImagenTecnologiasFrontEnd() {
    const imagenTecnologiasFrontEnd = document.querySelector(".imagen-tecnologias-front-end");
    const enlaceImagenTecnologiasFrontEnd = imagenTecnologiasFrontEnd.getAttribute("src");
    const fuenteImagenTecnologiasFrontEnd = document.querySelector(".fuente-imagen-tecnologias-front-end");
    fuenteImagenTecnologiasFrontEnd.innerText = enlaceImagenTecnologiasFrontEnd;
    imagenTecnologiasFrontEnd.setAttribute("src", "https://static.vecteezy.com/system/resources/previews/007/962/247/large_2x/front-end-word-concepts-banner-web-applications-programming-user-interface-development-presentation-website-isolated-lettering-typography-idea-with-linear-icons-outline-illustration-vector.jpg");
}

// 3. Procesadores CSS
function cambiarImagenProcesadoresCss() {
    const imagenProcesadoresCss = document.querySelector(".imagen-procesadores-css");
    const enlaceImagenProcesadoresCss = imagenProcesadoresCss.getAttribute("src");
    const fuenteImagenProcesadoresCss = document.querySelector(".fuente-imagen-procesadores-css");
    fuenteImagenProcesadoresCss.innerText = enlaceImagenProcesadoresCss;
    imagenProcesadoresCss.setAttribute("src", "https://tse3.mm.bing.net/th/id/OIP.HfR9lrTkRe_I4cKu_ODgeAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3");
}

// 4. Frameworks y librerías Front-End
function cambiarImagenFrameworksFrontEnd() {
    const imagenFrameworksFrontEnd = document.querySelector(".imagen-frameworks-front-end");
    const enlaceImagenFrameworksFrontEnd = imagenFrameworksFrontEnd.getAttribute("src");
    const fuenteImagenFrameworksFrontEnd = document.querySelector(".fuente-imagen-frameworks-front-end");
    fuenteImagenFrameworksFrontEnd.innerText = enlaceImagenFrameworksFrontEnd;
    imagenFrameworksFrontEnd.setAttribute("src", "https://miro.medium.com/v2/resize:fit:1200/1*DxoqutOBboYUCWV12q7DFw.png");
}

// 5. Back-End
function cambiarImagenBackEnd() {
    const imagenBackEnd = document.querySelector(".imagen-back-end");
    const enlaceImagenBackEnd = imagenBackEnd.getAttribute("src");
    const fuenteImagenBackEnd = document.querySelector(".fuente-imagen-back-end");
    fuenteImagenBackEnd.innerText = enlaceImagenBackEnd;
    imagenBackEnd.setAttribute("src", "https://img.freepik.com/vetores-gratis/cabecalho-tipografico-de-back-end-processo-de-desenvolvimento-de-software-melhoria-do-design-da-interface-do-site-programacao-e-codificacao-profissao-de-ti-ilustracao-vetorial-plana-isolada_613284-210.jpg");
}

// 6. APIs
function cambiarImagenApis() {
    const imagenApis = document.querySelector(".imagen-apis");
    const enlaceImagenApis = imagenApis.getAttribute("src");
    const fuenteImagenApis = document.querySelector(".fuente-imagen-apis");
    fuenteImagenApis.innerText = enlaceImagenApis;
    imagenApis.setAttribute("src", "https://img.freepik.com/vector-gratis/ilustracion-api-dibujada-mano_23-2149388656.jpg");
}

// 7. Bases de Datos
function cambiarImagenBasesDatos() {
    const imagenBasesDatos = document.querySelector(".imagen-bases-datos");
    const enlaceImagenBasesDatos = imagenBasesDatos.getAttribute("src");
    const fuenteImagenBasesDatos = document.querySelector(".fuente-imagen-bases-datos");
    fuenteImagenBasesDatos.innerText = enlaceImagenBasesDatos;
    imagenBasesDatos.setAttribute("src", "https://th.bing.com/th/id/R.18568c612c984233a8092fb43652f646?rik=s3UdKkUHRPmCrA&pid=ImgRaw&r=0");
}

// 8. Diseño de Bases de Datos
function cambiarImagenDisenoBasesDatos() {
    const imagenDisenoBasesDatos = document.querySelector(".imagen-diseno-bases-datos");
    const enlaceImagenDisenoBasesDatos = imagenDisenoBasesDatos.getAttribute("src");
    const fuenteImagenDisenoBasesDatos = document.querySelector(".fuente-imagen-diseno-bases-datos");
    fuenteImagenDisenoBasesDatos.innerText = enlaceImagenDisenoBasesDatos;
    imagenDisenoBasesDatos.setAttribute("src", "https://tse4.mm.bing.net/th/id/OIP.x7kBfd1B3m5vKm7Goh0VoAHaHC?r=0&pid=ImgDet&w=474&h=450&rs=1&o=7&rm=3");
}

// 9. UML y Modelado
function cambiarImagenUmlModelado() {
    const imagenUmlModelado = document.querySelector(".imagen-uml-modelado");
    const enlaceImagenUmlModelado = imagenUmlModelado.getAttribute("src");
    const fuenteImagenUmlModelado = document.querySelector(".fuente-imagen-uml-modelado");
    fuenteImagenUmlModelado.innerText = enlaceImagenUmlModelado;
    imagenUmlModelado.setAttribute("src", "https://media.istockphoto.com/id/1272853443/es/vector/uml-lenguaje-de-modelado-unificado-concepto-de-negocio-acr%C3%B3nimo.jpg?s=612x612&w=0&k=20&c=aYV8Kt5DS5sxAq2b-dGonoQiXO1u8mfBmTyu_NGX960=");
}

// 10. Git y GitHub
function cambiarImagenGit() {
    const imagenGit = document.querySelector(".imagen-git");
    const enlaceImagenGit = imagenGit.getAttribute("src");
    const fuenteImagenGit = document.querySelector(".fuente-imagen-git");
    fuenteImagenGit.innerText = enlaceImagenGit;
    imagenGit.setAttribute("src", "https://tse4.mm.bing.net/th/id/OIP.PXzPX2P12GDUKalH45dNkgHaES?r=0&rs=1&pid=ImgDetMain&o=7&rm=3");
}

// 11. Linux
function cambiarImagenLinux() {
    const imagenLinux = document.querySelector(".imagen-linux");
    const enlaceImagenLinux = imagenLinux.getAttribute("src");
    const fuenteImagenLinux = document.querySelector(".fuente-imagen-linux");
    fuenteImagenLinux.innerText = enlaceImagenLinux;
    imagenLinux.setAttribute("src", "https://pbs.twimg.com/media/GcIS678WYAABgQM.jpg");
}

// 12. Terminal
function cambiarImagenTerminal() {
    const imagenTerminal = document.querySelector(".imagen-terminal");
    const enlaceImagenTerminal = imagenTerminal.getAttribute("src");
    const fuenteImagenTerminal = document.querySelector(".fuente-imagen-terminal");
    fuenteImagenTerminal.innerText = enlaceImagenTerminal;
    imagenTerminal.setAttribute("src", "https://www.ginjfo.com/wp-content/uploads/2023/09/Terminal_Windows11.jpg");
}

// 13. Sistemas Operativos
function cambiarImagenSistemasOperativos() {
    const imagenSistemasOperativos = document.querySelector(".imagen-sistemas-operativos");
    const enlaceImagenSistemasOperativos = imagenSistemasOperativos.getAttribute("src");
    const fuenteImagenSistemasOperativos = document.querySelector(".fuente-imagen-sistemas-operativos");
    fuenteImagenSistemasOperativos.innerText = enlaceImagenSistemasOperativos;
    imagenSistemasOperativos.setAttribute("src", "https://th.bing.com/th/id/R.64a869cb6f17cc254d061f1e1515cd55?rik=aKVmK0vBIhS6QQ&pid=ImgRaw&r=0");
}

// 14. Contenedores
function cambiarImagenContenedores() {
    const imagenContenedores = document.querySelector(".imagen-contenedores");
    const enlaceImagenContenedores = imagenContenedores.getAttribute("src");
    const fuenteImagenContenedores = document.querySelector(".fuente-imagen-contenedores");
    fuenteImagenContenedores.innerText = enlaceImagenContenedores;
    imagenContenedores.setAttribute("src", "https://wallpapercave.com/wp/wp8114615.jpg");
}

// 15. Cloud
function cambiarImagenCloud() {
    const imagenCloud = document.querySelector(".imagen-cloud");
    const enlaceImagenCloud = imagenCloud.getAttribute("src");
    const fuenteImagenCloud = document.querySelector(".fuente-imagen-cloud");
    fuenteImagenCloud.innerText = enlaceImagenCloud;
    imagenCloud.setAttribute("src", "https://static.vecteezy.com/system/resources/previews/006/030/600/large_2x/abstract-cloud-logo-blue-shape-cloud-computing-isolated-on-white-background-usable-for-business-and-technology-logos-flat-logo-design-template-element-vector.jpg");
}

// 16. Testing
function cambiarImagenTesting() {
    const imagenTesting = document.querySelector(".imagen-testing");
    const enlaceImagenTesting = imagenTesting.getAttribute("src");
    const fuenteImagenTesting = document.querySelector(".fuente-imagen-testing");
    fuenteImagenTesting.innerText = enlaceImagenTesting;
    imagenTesting.setAttribute("src", "https://th.bing.com/th/id/R.7648ead949f0ffb840b369ab5641c002?rik=0FkK2UBbLT%2bjfg&pid=ImgRaw&r=0");
}

// 17. Python
function cambiarImagenPython() {
    const imagenPython = document.querySelector(".imagen-python");
    const enlaceImagenPython = imagenPython.getAttribute("src");
    const fuenteImagenPython = document.querySelector(".fuente-imagen-python");
    fuenteImagenPython.innerText = enlaceImagenPython;
    imagenPython.setAttribute("src", "https://tse1.mm.bing.net/th/id/OIP.kbO1T90NqtfN3K-K58a20wHaHa?r=0&pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3");
}

// 18. JavaScript
function cambiarImagenJavaScript() {
    const imagenJavascript = document.querySelector(".imagen-javascript");
    const enlaceImagenJavascript = imagenJavascript.getAttribute("src");
    const fuenteImagenJavascript = document.querySelector(".fuente-imagen-javascript");
    fuenteImagenJavascript.innerText = enlaceImagenJavascript;
    imagenJavascript.setAttribute("src", "https://velog.velcdn.com/images/song961003/post/895fdabe-63b8-4434-9e58-3676070bbb0b/image.png");
}

// 19. TypeScript
function cambiarImagenTypeScript() {
    const imagenTypescript = document.querySelector(".imagen-typescript");
    const enlaceImagenTypescript = imagenTypescript.getAttribute("src");
    const fuenteImagenTypescript = document.querySelector(".fuente-imagen-typescript");
    fuenteImagenTypescript.innerText = enlaceImagenTypescript;
    imagenTypescript.setAttribute("src", "https://th.bing.com/th/id/OIP.zVfDFwbNPo_XmrVxaHLQlAHaFd?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3");
}

// 20 XML
function cambiarImagenXml() {
    const imagenXml = document.querySelector(".imagen-xml");
    const enlaceImagenXml = imagenXml.getAttribute("src");
    const fuenteImagenXml = document.querySelector(".fuente-imagen-xml");
    fuenteImagenXml.innerText = enlaceImagenXml;
    imagenXml.setAttribute("src", "https://tse2.mm.bing.net/th/id/OIP.f5VzsaYidlXEf-GD_r_zjAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3");
}

// 21. JSON
function cambiarImagenJson() {
    const imagenJson = document.querySelector(".imagen-json");
    const enlaceImagenJson = imagenJson.getAttribute("src");
    const fuenteImagenJson = document.querySelector(".fuente-imagen-json");
    fuenteImagenJson.innerText = enlaceImagenJson;
    imagenJson.setAttribute("src", "https://tse1.mm.bing.net/th/id/OIP.a-Ta1AVlaqQr7EOQARSydQHaKH?r=0&pid=ImgDet&w=474&h=647&rs=1&o=7&rm=3");
}

// 22. YAML
function cambiarImagenYaml() {
    const imagenYaml = document.querySelector(".imagen-yaml");
    const enlaceImagenYaml = imagenYaml.getAttribute("src");
    const fuenteImagenYaml = document.querySelector(".fuente-imagen-yaml");
    fuenteImagenYaml.innerText = enlaceImagenYaml;
    imagenYaml.setAttribute("src", "https://onlinetools.com/images/json/icons/convert-json-to-yaml.png");
}

// 23. ERP
function cambiarImagenErp() {
    const imagenErp = document.querySelector(".imagen-erp");
    const enlaceImagenErp = imagenErp.getAttribute("src");
    const fuenteImagenErp = document.querySelector(".fuente-imagen-erp");
    fuenteImagenErp.innerText = enlaceImagenErp;
    imagenErp.setAttribute("src", "https://tse1.mm.bing.net/th/id/OIP.xgfMrUTfsIIDFDRyS8L-LQHaE8?r=0&pid=ImgDet&w=474&h=316&rs=1&o=7&rm=3");
}

// 24. Desarrollo Web
function cambiarImagenDesarrolloWeb() {
    const imagenDesarrolloWeb = document.querySelector(".imagen-desarrollo-web");
    const enlaceImagenDesarrolloWeb = imagenDesarrolloWeb.getAttribute("src");
    const fuenteImagenDesarrolloWeb = document.querySelector(".fuente-imagen-desarrollo-web");
    fuenteImagenDesarrolloWeb.innerText = enlaceImagenDesarrolloWeb;
    imagenDesarrolloWeb.setAttribute("src", "https://t4.ftcdn.net/jpg/02/83/46/33/360_F_283463385_mfnrx6RPU3BqObhVuVjYZjeZ5pegE7xq.jpg");
}

// 25. Seguridad
function cambiarImagenSeguridad() {
    const imagenSeguridad = document.querySelector(".imagen-seguridad");
    const enlaceImagenSeguridad = imagenSeguridad.getAttribute("src");
    const fuenteImagenSeguridad = document.querySelector(".fuente-imagen-seguridad");
    fuenteImagenSeguridad.innerText = enlaceImagenSeguridad;
    imagenSeguridad.setAttribute("src", "https://image.freepik.com/vector-gratis/simbolo-seguridad-informatica-elementos_18591-42714.jpg");
}

// 26. Algoritmos
function cambiarImagenAlgoritmos() {
    const imagenAlgoritmos = document.querySelector(".imagen-algoritmos");
    const enlaceImagenAlgoritmos = imagenAlgoritmos.getAttribute("src");
    const fuenteImagenAlgoritmos = document.querySelector(".fuente-imagen-algoritmos");
    fuenteImagenAlgoritmos.innerText = enlaceImagenAlgoritmos;
    imagenAlgoritmos.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/3330/3330778.png");
}

// 27. Estructuras de Datos
function cambiarImagenEstructurasDatos() {
    const imagenEstructurasDatos = document.querySelector(".imagen-estructuras-datos");
    const enlaceImagenEstructurasDatos = imagenEstructurasDatos.getAttribute("src");
    const fuenteImagenEstructurasDatos = document.querySelector(".fuente-imagen-estructuras-datos");
    fuenteImagenEstructurasDatos.innerText = enlaceImagenEstructurasDatos;
    imagenEstructurasDatos.setAttribute("src", "https://thumbs.dreamstime.com/z/icono-del-esquema-de-los-datos-estructurados-l%C3%ADnea-estilo-fina-la-colecci%C3%B3n-grande-iconos-elemento-simple-perfecto-pixel-139903851.jpg?w=576");
}

// 28. Arquitectura de Software
function cambiarImagenArquitecturaSoftware() {
    const imagenArquitecturaSoftware = document.querySelector(".imagen-arquitectura-software");
    const enlaceImagenArquitecturaSoftware = imagenArquitecturaSoftware.getAttribute("src");
    const fuenteImagenArquitecturaSoftware = document.querySelector(".fuente-imagen-arquitectura-software");
    fuenteImagenArquitecturaSoftware.innerText = enlaceImagenArquitecturaSoftware;
    imagenArquitecturaSoftware.setAttribute("src", "https://tse3.mm.bing.net/th/id/OIP.QAQHpx3XoMrtmYHbLtSxrgHaGL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3");
}

// 29. Patrones de Diseño
function cambiarImagenPatronesDiseno() {
    const imagenPatronesDiseno = document.querySelector(".imagen-patrones-diseno");
    const enlaceImagenPatronesDiseno = imagenPatronesDiseno.getAttribute("src");
    const fuenteImagenPatronesDiseno = document.querySelector(".fuente-imagen-patrones-diseno");
    fuenteImagenPatronesDiseno.innerText = enlaceImagenPatronesDiseno;
    imagenPatronesDiseno.setAttribute("src", "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/2b769f82518325.5d1f9b0df09c5.png");
}

// 30. Buenas Prácticas
function cambiarImagenBuenasPracticas() {
    const imagenBuenasPracticas = document.querySelector(".imagen-buenas-practicas");
    const enlaceImagenBuenasPracticas = imagenBuenasPracticas.getAttribute("src");
    const fuenteImagenBuenasPracticas = document.querySelector(".fuente-imagen-buenas-practicas");
    fuenteImagenBuenasPracticas.innerText = enlaceImagenBuenasPracticas;
    imagenBuenasPracticas.setAttribute("src", "https://th.bing.com/th/id/R.9ce334aab6f80becd8305f26fa394fc4?rik=Bu4M5a7n2S6v6Q&pid=ImgRaw&r=0");
}

// 31. Herramientas
function cambiarImagenHerramientas() {
    const imagenHerramientas = document.querySelector(".imagen-herramientas");
    const enlaceImagenHerramientas = imagenHerramientas.getAttribute("src");
    const fuenteImagenHerramientas = document.querySelector(".fuente-imagen-herramientas");
    fuenteImagenHerramientas.innerText = enlaceImagenHerramientas;
    imagenHerramientas.setAttribute("src", "https://static.vecteezy.com/system/resources/previews/014/918/943/original/tool-logo-design-icon-illustration-tools-logo-design-tool-flat-icon-vector.jpg");
}

// 32. Automatización
function cambiarImagenAutomatizacion() {
    const imagenAutomatizacion = document.querySelector(".imagen-automatizacion");
    const enlaceImagenAutomatizacion = imagenAutomatizacion.getAttribute("src");
    const fuenteImagenAutomatizacion = document.querySelector(".fuente-imagen-automatizacion");
    fuenteImagenAutomatizacion.innerText = enlaceImagenAutomatizacion;
    imagenAutomatizacion.setAttribute("src", "https://cdn-icons-png.flaticon.com/256/8807/8807368.png");
}

// 33. APIs de Terceros
function cambiarImagenApisTerceros() {
    const imagenApisTerceros = document.querySelector(".imagen-apis-terceros");
    const enlaceImagenApisTerceros = imagenApisTerceros.getAttribute("src");
    const fuenteImagenApisTerceros = document.querySelector(".fuente-imagen-apis-terceros");
    fuenteImagenApisTerceros.innerText = enlaceImagenApisTerceros;
    imagenApisTerceros.setAttribute("src", "https://media.datacamp.com/cms/ad_4nxeehbt7ogcr3t3yoa1oofybcbbaezlyactz8h5kmwf0j08pogtzmij7ml4nod5-ii-yrn7nu2h73pd7tvr9kbj1chswst0dcssqhv0f9xskum8x7p6z-xjfl0t2rrgfr4-ufpdq.png");
} 

// 34. Comunicación
function cambiarImagenComunicacion() {
    const imagenComunicacion = document.querySelector(".imagen-comunicacion");
    const enlaceImagenComunicacion = imagenComunicacion.getAttribute("src");
    const fuenteImagenComunicacion = document.querySelector(".fuente-imagen-comunicacion");
    fuenteImagenComunicacion.innerText = enlaceImagenComunicacion;
    imagenComunicacion.setAttribute("src", "https://tse2.mm.bing.net/th/id/OIP.Yyngtk-UFkPstcQqAdhA3AHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3");
}

// 35. Redes
function cambiarImagenRedes() {
    const imagenRedes = document.querySelector(".imagen-redes");
    const enlaceImagenRedes = imagenRedes.getAttribute("src");
    const fuenteImagenRedes = document.querySelector(".fuente-imagen-redes");
    fuenteImagenRedes.innerText = enlaceImagenRedes;
    imagenRedes.setAttribute("src", "https://axiomventures.co/wp-content/uploads/2021/11/Development-Colored.png");
}

// 36. Desarrollo Profesional y 37. Open Source
function cambiarImagenDesarrolloProfesional() {
    const imagenDesarrolloProfesional = document.querySelector(".imagen-desarrollo-profesional");
    const enlaceImagenDesarrolloProfesional = imagenDesarrolloProfesional.getAttribute("src");
    const fuenteImagenDesarrolloProfesional = document.querySelector(".fuente-imagen-desarrollo-profesional");
    fuenteImagenDesarrolloProfesional.innerText = enlaceImagenDesarrolloProfesional;
    imagenDesarrolloProfesional.setAttribute("src", "https://tse3.mm.bing.net/th/id/OIP.Fg3okPUvk6vaHBX1XByASwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3");
}

// ANIMACIONES DE CLIC

const REDUCIR_MOVIMIENTO = window.matchMedia("(prefers-reduced-motion: reduce)");

// Reinicia una animacion CSS: quita la clase, obliga al navegador a "olvidarla" y la vuelve a poner
function reiniciarAnimacion(elemento, claseAnimacion) {
    elemento.classList.remove(claseAnimacion);
    void elemento.offsetWidth;
    elemento.classList.add(claseAnimacion);
}

// Onda que se expande desde el punto donde se hizo clic (o desde el centro si fue con el teclado)
function crearOndaDeClic(boton, evento) {
    const medidas = boton.getBoundingClientRect();
    const diametro = Math.max(medidas.width, medidas.height) * 2;
    const fueConRaton = evento.clientX !== 0 || evento.clientY !== 0;
    const posicionX = fueConRaton ? evento.clientX - medidas.left : medidas.width / 2;
    const posicionY = fueConRaton ? evento.clientY - medidas.top : medidas.height / 2;

    const onda = document.createElement("span");
    onda.className = "onda-clic";
    onda.style.width = diametro + "px";
    onda.style.height = diametro + "px";
    onda.style.left = (posicionX - diametro / 2) + "px";
    onda.style.top = (posicionY - diametro / 2) + "px";
    boton.appendChild(onda);

    setTimeout(function () {
        onda.remove();
    }, 700);
}

// Rebote + onda en TODOS los botones (incluidos los que tienen una imagen dentro)
function animarBotonAlHacerClic(evento) {
    const boton = evento.target.closest("button");
    if (!boton || REDUCIR_MOVIMIENTO.matches) {
        return;
    }
    reiniciarAnimacion(boton, "boton-animado");
    crearOndaDeClic(boton, evento);

    clearTimeout(boton.temporizadorAnimacion);
    boton.temporizadorAnimacion = setTimeout(function () {
        boton.classList.remove("boton-animado");
    }, 700);
}

document.addEventListener("click", animarBotonAlHacerClic);

// Imagen nueva: cuando un boton cambia el src de una imagen, la nueva aparece con zoom y enfoque
// (la primera carga de cada imagen no se anima, solo los cambios)
function marcarImagenComoCargada(evento) {
    if (evento.target.tagName === "IMG") {
        evento.target.dataset.yaCargo = "si";
    }
}

function animarImagenNueva(evento) {
    const imagen = evento.target;
    if (imagen.tagName !== "IMG") {
        return;
    }
    const eraPrimeraCarga = !imagen.dataset.yaCargo;
    imagen.dataset.yaCargo = "si";
    if (eraPrimeraCarga || REDUCIR_MOVIMIENTO.matches) {
        return;
    }
    reiniciarAnimacion(imagen, "imagen-nueva");
}

document.querySelectorAll("img").forEach(function (imagen) {
    if (imagen.complete) {
        imagen.dataset.yaCargo = "si";
    }
});
document.addEventListener("load", animarImagenNueva, true);
document.addEventListener("error", marcarImagenComoCargada, true);

// Limpia las clases cuando termina cada animacion para que se puedan repetir
document.addEventListener("animationend", function (evento) {
    const nombres = {
        "imagen-nueva": "imagen-nueva",
        "texto-revelado": "texto-revelado",
        "destello-color": "color-cambiado"
    };
    const clase = nombres[evento.animationName];
    if (clase) {
        evento.target.classList.remove(clase);
    }
});

// Texto nuevo: los parrafos que se llenan al presionar un boton aparecen con animacion
const contenidoPrincipal = document.getElementById("contenido-principal");

const observadorDeTextos = new MutationObserver(function (cambios) {
    if (REDUCIR_MOVIMIENTO.matches) {
        return;
    }
    cambios.forEach(function (cambio) {
        const parrafo = cambio.target;
        const tieneTexto = parrafo.textContent.trim() !== "";
        if (parrafo.tagName === "P" && tieneTexto && cambio.addedNodes.length > 0) {
            reiniciarAnimacion(parrafo, "texto-revelado");
            // En celulares: si el texto quedo fuera de la pantalla, baja suavemente hasta verlo
            parrafo.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
    });
});
observadorDeTextos.observe(contenidoPrincipal, { childList: true, subtree: true });

// Color nuevo: la lista o texto que cambia de color da un destello
const observadorDeColores = new MutationObserver(function (cambios) {
    if (REDUCIR_MOVIMIENTO.matches) {
        return;
    }
    cambios.forEach(function (cambio) {
        if (cambio.target.style.color) {
            reiniciarAnimacion(cambio.target, "color-cambiado");
        }
    });
});
observadorDeColores.observe(contenidoPrincipal, { attributes: true, attributeFilter: ["style"], subtree: true });