export function formatDate(date: string | undefined | null, includeRelative = false): string {
  // Verifica si date es undefined, null o una cadena vacía
  if (!date || typeof date !== 'string' || date.trim() === '') {
    return 'Fecha no disponible';
  }

  const currentDate = new Date();

  // Asegura que la fecha tenga el formato correcto
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);

  // Verifica si la fecha es válida
  if (isNaN(targetDate.getTime())) {
    return 'Fecha no válida';
  }

  const diffTime = currentDate.getTime() - targetDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  let formattedRelative = '';

  if (includeRelative) {
    if (diffDays === 0) {
      formattedRelative = 'hoy';
    } else if (diffDays === 1) {
      formattedRelative = 'ayer';
    } else if (diffDays < 30) {
      formattedRelative = `hace ${diffDays} días`;
    } else if (diffDays < 365) {
      const monthsAgo = Math.floor(diffDays / 30);
      formattedRelative = `hace ${monthsAgo} ${monthsAgo === 1 ? 'mes' : 'meses'}`;
    } else {
      const yearsAgo = Math.floor(diffDays / 365);
      formattedRelative = `hace ${yearsAgo} ${yearsAgo === 1 ? 'año' : 'años'}`;
    }
  }

  const fullDate = targetDate.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return includeRelative ? `${fullDate} (${formattedRelative})` : fullDate;
}