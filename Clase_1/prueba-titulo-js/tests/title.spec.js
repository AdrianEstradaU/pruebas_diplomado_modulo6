const {test, expect} =require('@playwright/test');

test('valida el titulo excato', async({page}) => {

   await page.goto('https://es.duolingo.com/');

    await sleep(5000);

    // Verificacion del titulo exacto
    await expect(page). toHaveTitle('Duolingo - La mejor manera de aprender un idioma a nivel mundial');
});
test('valida titulo con regex (contiene palabra)', async ({ page }) => {
// Abre la pagina example.com
await page.goto('https://es.duolingo.com/');

await sleep(5000);

// Verificamos palabra
await expect(page). toHaveTitle(/Duolingo/);
});
function sleep (time) {
return new Promise((resolve) => setTimeout(resolve, time) );
}
