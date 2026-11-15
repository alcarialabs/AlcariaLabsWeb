import { SITE } from "./site";

/**
 * Datos del titular de la web (Aviso legal, Privacidad, Cookies y Términos).
 * Es el ÚNICO sitio donde se escriben. Copiados de la landing de AlcaWallet
 * (src/lib/empresa.ts), que ya está revisada.
 *
 * No inventar datos: el titular es una persona física autónoma, no una
 * sociedad, y su actividad no requiere inscripción en el Registro Mercantil.
 */
export const TITULAR = {
  /** Nombre y condición del titular (persona física autónoma). */
  nombre: "Eric Duró Basilio, profesional autónomo (empresario individual)",
  /** Nombre con el que se da a conocer la actividad. */
  nombreComercial: "Alcaria Labs",
  /** NIF del titular. */
  nif: "73102214A",
  /** Domicilio completo. */
  domicilio: "C/ 1 de Maig, 30, 46850 L'Olleria (València)",
  /** Correo de contacto: el de esta web. */
  correo: SITE.email,
  /** Dominio de esta web. */
  dominio: "alcarialabs.com",
} as const;

/** Frase completa con los datos identificativos del titular. */
export const titularTexto = `${TITULAR.nombre}, que opera con el nombre «${TITULAR.nombreComercial}», con NIF ${TITULAR.nif} y domicilio en ${TITULAR.domicilio}. Correo de contacto: ${TITULAR.correo}.`;

export const LEGAL_ACTUALIZADO = "Última actualización: noviembre de 2026";
