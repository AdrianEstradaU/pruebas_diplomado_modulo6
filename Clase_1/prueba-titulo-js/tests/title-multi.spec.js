const { test, expect } = require("@playwright/test");

const casos = [
{ name: "Caso1", url: "https://es.duolingo.com/", esperado: /Duolingo/ },
{ name: "Caso2", url: "https://es.duolingo.com/", esperado: /Duolingo - La mejor manera de aprender un idioma a nivel mundial/ },
{ name: "Caso3", url: "https://es.duolingo.com/", esperado: /Duolingo/},
];

for (const { name, url, esperado } of casos) {
    test(`valida el titulo correcto en ${name}`, async ({ page }) => {
// Abre la pagina example.com
await page.goto(url);
await sleep(3000);

// Verificacion del titulo exacto
await expect(page).toHaveTitle(esperado);
})};
function sleep (time) {
return new Promise((resolve) => setTimeout(resolve, time) );
}