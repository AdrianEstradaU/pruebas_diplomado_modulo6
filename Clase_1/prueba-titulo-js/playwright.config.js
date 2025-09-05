// playwright configuraciones
/** @type  {import('@playwright/test').PlaywrightTestConfig}*/
const config = {
use: {
    screenshot: "only-on-failure",
    trace: "reain-on-failure",
},
projects: [
    { name: "Chromium", use: { browserName: "chromium" } },
    { name: "Firefox", use: { browserName: "firefox" } },
],
testDir: "tests",
timeout: 30000,
expect: {
timeout: 5000,
},
};

module.exports= config;