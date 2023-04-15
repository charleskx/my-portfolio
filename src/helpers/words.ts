export function removeHTMLTags(input: string): string {
  // Remove todas as tags HTML
  let output = input.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi, '');

  // Remove as entidades HTML
  output = output.replace(/&[a-z]+;/gi, '');

  // Remove os espaços em branco extras e retorna a string resultante
  return output.trim();
}