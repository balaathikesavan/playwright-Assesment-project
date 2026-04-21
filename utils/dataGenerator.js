export function generateEmail() {
  return `user${Date.now()}@gmail.com`;
}

export function generatePassword() {
  const base = "Bala";
  const randomNum = Math.floor(Math.random() * 1000);
  return `${base}@${randomNum}A`;
}