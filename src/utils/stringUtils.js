export const truncateText = (text, maxLength = 60) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  
  // Buscar el último espacio dentro del límite
  let truncateAt = maxLength;
  for (let i = maxLength; i > maxLength - 20; i--) {
    if (text[i] === ' ' || text[i] === '.' || text[i] === ',') {
      truncateAt = i;
      break;
    }
  }
  
  return text.substring(0, truncateAt).trim() + '...';
};