// TABLERO 2 — Evaluación heurística de Nielsen sobre Guardería Náutica Sarthou.
// Contenido relevado y redactado en el brief de evaluación (sección 6).
// Las 10 heurísticas, cada una con severidad 0-4 (escala de Nielsen).

export type Severidad = 0 | 1 | 2 | 3 | 4;

export interface Heuristica {
  id: string; // "H01"
  nombre: string;
  severidad: Severidad;
  capturas: string[]; // una o más rutas en /public/screens
  pantalla: string; // pie principal de la captura
  explicacion: string; // qué pasa · por qué rompe/cumple · impacto
}

// Etiquetas de la escala de severidad de Nielsen (0-4).
export const severidadLabels: Record<Severidad, string> = {
  0: "Sin problema",
  1: "Cosmético",
  2: "Menor",
  3: "Mayor",
  4: "Catástrofe",
};

export const heuristicas: Heuristica[] = [
  {
    id: "H01",
    nombre: "Visibilidad del estado del sistema",
    severidad: 3,
    capturas: ["/screens/08-inicio.jpg"],
    pantalla: "Inicio",
    explicacion:
      "La barra “Embarcación solicitada” es el único indicador del estado del pedido de salida y no distingue entre “podés solicitarla”, “ya la solicitaste” y “está lista”. No hay estados intermedios (recibido, en preparación, en el agua) ni horario estimado, y el link “Actualizar” sugiere que la información puede estar desactualizada sin decir de cuándo es. La persona termina yendo a la guardería o escribiendo por WhatsApp para saber si el barco está listo, que es justamente lo que la app debería evitar.",
  },
  {
    id: "H02",
    nombre: "Correspondencia entre el sistema y el mundo real",
    severidad: 2,
    capturas: [
      "/screens/14-visita-alta.jpg",
      "/screens/15-validar-estadia.jpg",
      "/screens/19-mi-cuenta.jpg",
    ],
    pantalla: "Visita para MOTO AJAXX",
    explicacion:
      "El campo Fecha muestra “Aug 11, 2026”, con el mes abreviado en inglés y en formato anglosajón, dentro de una interfaz íntegramente en español rioplatense. En la misma línea, “Estadía” y “Baja usuario” son términos del sistema administrativo de la guardería, no del vocabulario de quien sale a navegar. Genera fricción de lectura y, en el caso de la fecha, riesgo real de confundir mes y día al autorizar una visita.",
  },
  {
    id: "H03",
    nombre: "Control y libertad del usuario",
    severidad: 2,
    capturas: ["/screens/07-alta-autorizado.jpg"],
    pantalla: "Alta de autorizado",
    explicacion:
      "El formulario de alta de autorizado no tiene header, título ni flecha de volver: la única salida es un botón “Salir” que no aclara si guarda, descarta o cancela todo el proceso. La persona no tiene una salida de emergencia claramente señalizada y, ante la duda, o abandona la tarea o completa datos que no quería cargar.",
  },
  {
    id: "H04",
    nombre: "Consistencia y estándares",
    severidad: 3,
    capturas: ["/screens/01-login.jpg", "/screens/14-visita-alta.jpg"],
    pantalla: "Login “Bienvenido!” + Visita para MOTO AJAXX",
    explicacion:
      "“Ingresar” se usa tanto para iniciar sesión como para guardar un formulario de visita, dos acciones sin relación. Para volver atrás conviven “Salir”, “Cancelar”, “Regresar” y la flecha del header. A eso se suma la mezcla de voseo (“Seleccioná”, “Chateá”) y tuteo (“Valida tus navegantes”, “Deseas hacerlo ahora?”) entre pantallas. La persona no puede construir un modelo mental estable de la app y tiene que releer cada pantalla como si fuera la primera.",
  },
  {
    id: "H05",
    nombre: "Prevención de errores",
    severidad: 3,
    capturas: [
      "/screens/19-mi-cuenta.jpg",
      "/screens/06-validar-navegantes-acciones.jpg",
    ],
    pantalla: "Mi Cuenta",
    explicacion:
      "“Baja usuario” aparece como texto plano centrado, sin botón, sin color de advertencia y sin ninguna explicación de qué elimina, inmediatamente debajo de “Cerrar sesión”. Un toque accidental en una acción presumiblemente destructiva está a la misma distancia que una acción cotidiana. El mismo patrón se repite en el action sheet de validar navegantes, donde “Eliminar” y “Validar” conviven sin confirmación previa.",
  },
  {
    id: "H06",
    nombre: "Reconocimiento antes que recuerdo",
    severidad: 3,
    capturas: ["/screens/15-validar-estadia.jpg"],
    pantalla: "Validar estadía",
    explicacion:
      "La validación de estadía pide tipear el titular y la embarcación en campos de texto libre en lugar de ofrecerlos como opciones seleccionables, cuando la app ya los conoce y los muestra en Inicio y en Barcos. El campo “Embarcación” ni siquiera entra completo en pantalla (“Nombre de la embarcacio…”). Se obliga a recordar y transcribir con exactitud, con el riesgo de que un error de tipeo bloquee la salida.",
  },
  {
    id: "H07",
    nombre: "Flexibilidad y eficiencia de uso",
    severidad: 2,
    capturas: ["/screens/08-inicio.jpg"],
    pantalla: "Inicio",
    explicacion:
      "Los accesos rápidos son fijos y redundantes: “Visitas” e “Informar Visita” están en Inicio y además “Mis Visitas” tiene su propia pestaña, mientras que la acción más frecuente —pedir la salida y mostrar el QR— no tiene atajo propio. No hay forma de personalizar accesos ni de repetir un pedido anterior, así que el usuario frecuente hace exactamente los mismos toques que el que entra por primera vez.",
  },
  {
    id: "H08",
    nombre: "Estética y diseño minimalista",
    severidad: 2,
    capturas: ["/screens/08-inicio.jpg"],
    pantalla: "Inicio",
    explicacion:
      "Inicio compite consigo misma: banda roja de fondo, card blanco de estado, card de accesos, card de embarcación con QR, banner rosa de contacto y logo, más un indicador de carrusel con un único punto que sugiere contenido inexistente. El rojo, que en el resto de la app señala problemas (“Validación Pendiente”, “Eliminar”, “Actualizar”), acá enmarca una buena noticia. El ruido visual compite con la información que realmente importa: si el barco está o no listo.",
  },
  {
    id: "H09",
    nombre: "Ayudar a reconocer, diagnosticar y recuperarse de errores",
    severidad: 3,
    capturas: ["/screens/01-login.jpg", "/screens/09-inicio-notificaciones.jpg"],
    pantalla: "Login “Bienvenido!”",
    explicacion:
      "El botón “Ingresar” está deshabilitado sin ningún mensaje que explique qué falta completar, y lo mismo ocurre en los formularios de alta de autorizado, visita y estadía. Cuando la app sí habla, usa el formato de alerta para no-errores: la pantalla de notificaciones interrumpe con un diálogo modal para decir que no hay notificaciones, con un botón que además dice “Deacuerdo”. La persona no recibe diagnóstico cuando lo necesita y sí recibe interrupciones cuando no hay nada que resolver.",
  },
  {
    id: "H10",
    nombre: "Ayuda y documentación",
    severidad: 1,
    capturas: ["/screens/11-ayuda-scroll.jpg", "/screens/10-ayuda.jpg"],
    pantalla: "Ayuda (con scroll)",
    explicacion:
      "Ayuda es de las secciones mejor resueltas: hay un canal directo de WhatsApp con la guardería y horarios de atención explícitos, accesible desde el header de Inicio. Las carencias son menores y cosméticas: no hay preguntas frecuentes ni ayuda contextual dentro de los formularios, el título tiene un error de tilde (“¿Como podemos ayudarte?”) y en la parte superior no se percibe que haya contenido más abajo. Resuelve la consulta pero delega en una persona lo que podría estar documentado.",
  },
];
