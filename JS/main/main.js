// Sou flamenguista, mas sou mais Imperatriz que Flamengo. Por isso, posso dizer que o meu time é Imperatriz
import { randomFrase } from "./elements.js";

// funções auxiliares
export function hide(e) { return e.classList.add('hide'); }
export function show(e) { return e.classList.remove('hide'); }
export function addClass(c) { return c.classList.add(c); }
export function removeClass(c) { return c.classList.remove(c); }
export const log = q => console.log(q);

randomFrase();