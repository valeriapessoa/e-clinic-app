export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/;
  if (!email) return "O e-mail não pode estar vazio.";
  if (!re.test(email))
    return "Ops! Precisamos de um endereço de e-mail válido.";
  return "";
}
