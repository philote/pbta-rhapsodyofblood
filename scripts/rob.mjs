import { configSheet } from "./helpers/config-sheet.mjs";

// Override sheetConfig with Rhapsody of Blood sheet (TOML).
Hooks.once('pbtaSheetConfig', () => {
  
    // Disable the sheet config form.
    game.settings.set('pbta', 'sheetConfigOverride', true);

    // Define custom tags.
    game.pbta.tagConfigOverride = {

        item: {
            // Tags available to a specific item type (e.g. "equipment", "move")
            armor: '[{"value":"Ammo"}, {"value":"Brace"}, {"value":"Close"}, {"value":"Fragile"}, {"value":"Grazing"}, {"value":"Heirloom"}, {"value":"Painful"}, {"value":"Reload"}, {"value":"Thrown"}, {"value":"Unstable"}, {"value":"Cleave"}, {"value":"Flexible"}, {"value":"Hefty"}, {"value":"Holy"}, {"value":"Lingering"}, {"value":"Piercing"}, {"value":"Ranged"}, {"value":"Stun"}, {"value":"Tether"}]',
            gear: '[{"value":"Ammo"}, {"value":"Brace"}, {"value":"Close"}, {"value":"Fragile"}, {"value":"Grazing"}, {"value":"Heirloom"}, {"value":"Painful"}, {"value":"Reload"}, {"value":"Thrown"}, {"value":"Unstable"}, {"value":"Cleave"}, {"value":"Flexible"}, {"value":"Hefty"}, {"value":"Holy"}, {"value":"Lingering"}, {"value":"Piercing"}, {"value":"Ranged"}, {"value":"Stun"}, {"value":"Tether"}]'
        }
    }
    
    // Replace the game.pbta.sheetConfig with Rhapsody of Blood version.
    configSheet();
});