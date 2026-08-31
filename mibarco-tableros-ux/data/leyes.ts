// TABLERO 1 — Leyes UX aplicadas a MiBarco.Online.
// Contenido relevado y redactado en el brief de evaluación (sección 5).
// Todo hallazgo es verificable en alguna de las capturas de /public/screens.

export type Veredicto = "cumple" | "rompe";

export interface LeyUX {
  id: string; // "L01"
  nombre: string; // "Ley de Jakob"
  veredicto: Veredicto;
  captura: string; // ruta en /public/screens
  pantalla: string; // pie de la captura
  preguntaGuia: string;
  explicacion: string; // 1-2 frases: qué pasa y por qué
}

export const leyes: LeyUX[] = [
  {
    id: "L01",
    nombre: "Ley de Jakob",
    veredicto: "rompe",
    captura: "/screens/08-inicio.jpg",
    pantalla: "Inicio",
    preguntaGuia:
      "¿La interfaz se comporta como otras apps que la persona ya conoce?",
    explicacion:
      "El elemento más prominente de la pantalla principal es una barra gris oscuro que dice “Embarcación solicitada”: tiene forma de botón pero está redactada como un estado, así que la persona no sabe si tiene que tocarla para pedir el barco o si ya lo pidió. Los usuarios traen de otras apps la convención de que un botón lleva un verbo de acción y esta la rompe justo en la tarea principal del producto.",
  },
  {
    id: "L02",
    nombre: "Ley de Fitts",
    veredicto: "rompe",
    captura: "/screens/08-inicio.jpg",
    pantalla: "Inicio",
    preguntaGuia:
      "¿Los objetivos táctiles son lo bastante grandes y cercanos para alcanzarlos rápido?",
    explicacion:
      "“Actualizar” es la única forma de refrescar el estado de la embarcación y está resuelto como un texto rojo pequeño, sin fondo ni borde, en medio del card. El área táctil es mínima comparada con la barra de ancho completo que tiene debajo, lo que hace lenta y propensa al error una acción que en esta app se repite mucho.",
  },
  {
    id: "L03",
    nombre: "Ley de Hick",
    veredicto: "cumple",
    captura: "/screens/08-inicio.jpg",
    pantalla: "Inicio",
    preguntaGuia:
      "¿La cantidad de opciones simultáneas mantiene ágil la decisión?",
    explicacion:
      "Inicio ofrece solo tres accesos rápidos (Barcos, Visitas, Informar Visita) sobre una tab bar de cuatro ítems, así que la cantidad de decisiones simultáneas es baja y la persona llega rápido a lo que busca. El costo de esa simplicidad aparece en otras leyes, pero en términos de tiempo de decisión la pantalla no satura.",
  },
  {
    id: "L04",
    nombre: "Ley de Miller",
    veredicto: "cumple",
    captura: "/screens/12-barcos.jpg",
    pantalla: "Barcos",
    preguntaGuia:
      "¿La información agrupada entra dentro de lo que la memoria de trabajo maneja sin esfuerzo?",
    explicacion:
      "La ficha de la embarcación agrupa siete datos (Titular, Matrícula, Año, Eslora, Modelo, Motor, Saldo) en formato etiqueta-valor, dentro del rango que la memoria de trabajo maneja sin esfuerzo. Cada línea es autónoma, así que no hace falta retener nada para leer la siguiente.",
  },
  {
    id: "L05",
    nombre: "Ley de proximidad",
    veredicto: "rompe",
    captura: "/screens/08-inicio.jpg",
    pantalla: "Inicio",
    preguntaGuia:
      "¿Los elementos cercanos entre sí pertenecen realmente al mismo grupo?",
    explicacion:
      "El card “Estás al día!” está montado sobre una banda roja que sobresale por arriba y por los costados, y el rojo se lee como alerta aunque el mensaje sea positivo. La proximidad entre el fondo rojo y el texto de estado sugiere una relación que no existe y genera una lectura contradictoria en el primer bloque de la pantalla.",
  },
  {
    id: "L06",
    nombre: "Ley de región común",
    veredicto: "cumple",
    captura: "/screens/11-ayuda-scroll.jpg",
    pantalla: "Ayuda (con scroll)",
    preguntaGuia:
      "¿Los contenedores dejan claro qué elementos forman un grupo?",
    explicacion:
      "En Ayuda cada función vive dentro de su propio contenedor con borde: el chat de WhatsApp en un card y los horarios de atención en otro. Las fronteras visuales dejan claro qué texto pertenece a qué acción sin necesidad de leer todo.",
  },
  {
    id: "L07",
    nombre: "Ley de similitud",
    veredicto: "rompe",
    captura: "/screens/01-login.jpg",
    pantalla: "Login “Bienvenido!” (comparar con Inicio)",
    preguntaGuia:
      "¿Los elementos que se ven iguales cumplen funciones equivalentes?",
    explicacion:
      "El botón “Ingresar” deshabilitado, el botón “Ingresar” habilitado y la barra “Embarcación solicitada” comparten la misma forma rectangular de ancho completo y solo se diferencian por el tono de gris. Elementos visualmente iguales cumplen funciones distintas (acción disponible, acción bloqueada, mera etiqueta de estado), y la persona tiene que probar tocando para descubrir cuál es cuál.",
  },
  {
    id: "L08",
    nombre: "Ley de Prägnanz",
    veredicto: "cumple",
    captura: "/screens/20-qr-salida.jpg",
    pantalla: "Comprobante QR de salida",
    preguntaGuia:
      "¿La información se organiza en la forma más simple y legible posible?",
    explicacion:
      "El comprobante de salida se organiza en tres bloques simples y jerarquizados: QR, bloque verde con nombre, código y horario, y card de datos. La forma más simple posible para la información que importa en la barrera de acceso, que se lee de un vistazo y a distancia.",
  },
  {
    id: "L09",
    nombre: "Efecto Von Restorff (aislamiento)",
    veredicto: "cumple",
    captura: "/screens/05-validar-navegantes.jpg",
    pantalla: "Valida tus navegantes",
    preguntaGuia:
      "¿El elemento que más importa se destaca del resto?",
    explicacion:
      "“Validación Pendiente” en rojo es el único elemento cromáticamente distinto de la lista y capta la atención de inmediato sobre lo que falta resolver. El contraste hace evidente cuál es el estado problemático sin tener que leer toda la fila.",
  },
  {
    id: "L10",
    nombre: "Efecto de posición serial",
    veredicto: "rompe",
    captura: "/screens/18-mas.jpg",
    pantalla: "Más",
    preguntaGuia:
      "¿Las posiciones que mejor se recuerdan alojan las funciones más valiosas?",
    explicacion:
      "“Más” ocupa la última posición de la tab bar, una de las dos ubicaciones que mejor se recuerdan, y contiene una sola fila: “Cuenta”. Se desperdicia un cuarto de la navegación principal en un contenedor casi vacío mientras funciones frecuentes como el QR de salida no tienen lugar propio.",
  },
  {
    id: "L11",
    nombre: "Umbral de Doherty",
    veredicto: "cumple",
    captura: "/screens/02-login-cargando.jpg",
    pantalla: "Login con modal “Un momento …”",
    preguntaGuia:
      "¿El sistema responde antes de que la persona empiece a dudar?",
    explicacion:
      "Al tocar “Ingresar” aparece de inmediato un modal con spinner y el texto “Un momento …”, así que la persona recibe respuesta antes de empezar a dudar si el toque se registró. Es uno de los pocos momentos de la app donde el sistema confirma que está trabajando.",
  },
  {
    id: "L12",
    nombre: "Efecto estética-usabilidad",
    veredicto: "rompe",
    captura: "/screens/17-visitas-vacio.jpg",
    pantalla: "Mis Visitas (vacía)",
    preguntaGuia:
      "¿El acabado visual sostiene la percepción de que el producto es confiable?",
    explicacion:
      "Al cerrar el diálogo, “Mis Visitas” queda como una pantalla blanca con un buscador arriba y un botón flotante abajo, sin estado vacío ni ilustración ni texto. La sensación de producto inacabado se traslada a la percepción de confiabilidad justo en una sección que gestiona el acceso de personas al predio.",
  },
  {
    id: "L13",
    nombre: "Ley de Tesler (conservación de la complejidad)",
    veredicto: "rompe",
    captura: "/screens/15-validar-estadia.jpg",
    pantalla: "Validar estadía",
    preguntaGuia:
      "¿El sistema absorbe la complejidad que puede, en lugar de trasladarla a la persona?",
    explicacion:
      "La pantalla de validación de estadía pide escribir a mano el nombre del titular y el de la embarcación, datos que la app ya tiene cargados y muestra en otras pantallas. La complejidad que el sistema podría absorber se traslada íntegra a la persona, que además tiene que recordar la forma exacta en que están escritos.",
  },
  {
    id: "L14",
    nombre: "Efecto Zeigarnik",
    veredicto: "rompe",
    captura: "/screens/05-validar-navegantes.jpg",
    pantalla: "Valida tus navegantes",
    preguntaGuia:
      "¿Las tareas incompletas dejan un rastro visible que empuje a completarlas?",
    explicacion:
      "Hay dos navegantes en “Validación Pendiente” pero nada indica cuántos faltan, en qué paso del proceso está la persona ni qué pasa si toca “Continuar” sin validar. La tarea queda abierta sin ningún rastro en Inicio, así que el pendiente se olvida en lugar de generar la tensión que empuja a completarlo.",
  },
];
