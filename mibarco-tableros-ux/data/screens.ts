// Registro de las capturas relevadas de MiBarco.Online (V 5.2711.1038).
// La clave es el nombre de archivo en /public/screens; el valor es el nombre
// legible de la pantalla, que se usa como pie de captura y como texto alt.

export const screens: Record<string, string> = {
  "01-login.jpg": "Login “Bienvenido!”",
  "02-login-cargando.jpg": "Login con modal “Un momento …”",
  "03-recuperar-acceso.jpg": "Recupera tu acceso",
  "04-activar-dispositivo.jpg": "Activa tu Dispositivo",
  "05-validar-navegantes.jpg": "Valida tus navegantes",
  "06-validar-navegantes-acciones.jpg": "Validar navegantes — acciones",
  "07-alta-autorizado.jpg": "Alta de autorizado",
  "08-inicio.jpg": "Inicio",
  "09-inicio-notificaciones.jpg": "Inicio — sin notificaciones",
  "10-ayuda.jpg": "Ayuda",
  "11-ayuda-scroll.jpg": "Ayuda (con scroll)",
  "12-barcos.jpg": "Barcos",
  "13-barcos-acciones.jpg": "Barcos — acciones",
  "14-visita-alta.jpg": "Visita para MOTO AJAXX",
  "15-validar-estadia.jpg": "Validar estadía",
  "16-visitas-vacio-dialog.jpg": "Mis Visitas — diálogo",
  "17-visitas-vacio.jpg": "Mis Visitas (vacía)",
  "18-mas.jpg": "Más",
  "19-mi-cuenta.jpg": "Mi Cuenta",
  "20-qr-salida.jpg": "Comprobante QR de salida",
};

// Devuelve el nombre legible de una captura a partir de su ruta o nombre.
export function screenLabel(path: string): string {
  const file = path.replace(/^\/screens\//, "").replace(/^screens\//, "");
  return screens[file] ?? file;
}
