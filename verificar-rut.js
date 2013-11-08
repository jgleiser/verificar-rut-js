/** Función JavaScript para verificar el RUT chileno el cual también elimina
  * cualquier caracter no válido.
  * Creado por José Gleiser (http://www.gleiser.net) y distribuido bajo
  * licencia MIT.
  */
var RUT = window.RUT = window.RUT || {};

/** Algoritmo para obtener el digito verificador de un rut (Algoritmo 1)
  * http://users.dcc.uchile.cl/~mortega/microcodigos/validarrut/algoritmo.html
  */
RUT.digitoVerificador = function (rut) {

  var s = rut.split('').reverse(),
      j = 2,
      t = 0,
      v = '',
      l = s.length,
      i;

  for (i = 0; i < l; i++) {
    if (8 === j) { j=2; }
    s[i] *= j++;
    t += s[i];
  }

  t %= 11;
  t = 11 - t;

  if (10 === t) v='K';
  else if (11 === t) v='0';
  else v = t.toString();

  return v;
};

/** Verifica que el rut ingresado sea correcto y lo deja en formato 12345678-9
  * Empresa es boolean, si es true no acepta rut menores a 50 millones
  * Retorna true si es correcto, false si no lo es, undefined si está vacío.
  */
RUT.verificar = function (input, empresa) {
  var rut = input.value.replace(/[^kK\d]/g, ''), // solo deja nums y k
      len = rut.length,
      r = rut.substring(0, len-1).replace(/[kK]/g, ''), // sin digito verificador y quita las k
      d = rut.substring(len-1).toUpperCase(), // digito verificador
      valid,
      v;

  len = r.length;

  if (0 < len) {
    v = RUT.digitoVerificador(r);
    r = r.substring(len-9, len);
    input.value = r + '-' + d;

    if (v !== d) {
      valid = false;
    } else if (empresa && 50000000 > parseInt(r, 10)) {
      valid = false;
    } else {
      valid = true;
    }

  } else {
    input.value = '';
  }
  
  return valid;
};
