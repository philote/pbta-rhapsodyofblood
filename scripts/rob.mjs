import { configSheet } from "./helpers/config-sheet.mjs";
// Hooks.once('init', async function() {

// });

// Hooks.once('ready', async function() {

// });

// Override sheetConfig with Rhapsody of Blood sheet (TOML).
Hooks.once('pbtaSheetConfig', () => {
  
    // Disable the sheet config form.
    game.settings.set('pbta', 'sheetConfigOverride', true);
    
    // Replace the game.pbta.sheetConfig with Rhapsody of Blood version.
    configSheet();
});