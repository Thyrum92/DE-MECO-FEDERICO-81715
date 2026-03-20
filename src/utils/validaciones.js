export function validarFormulario(formData) {
  const errores = {};

  // Valida campos vacíos
  Object.entries(formData).forEach(([key, value]) => {
    if (!value.trim()) {
      errores[key] = "Este campo es obligatorio";
    }
  });

  // Valida el Email
  if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errores.email = "Email inválido";
  }

  // Valida el Teléfono
  if (formData.telefono && !/^[0-9]{8,15}$/.test(formData.telefono)) {
    errores.telefono = "Teléfono inválido (solo números, 8 a 15 dígitos)";
  }

  return {
    esValido: Object.keys(errores).length === 0,
    errores
  };
}