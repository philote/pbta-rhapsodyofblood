import { configSheet } from "./helpers/config-sheet.mjs";
import * as utils from './helpers/utils.mjs';
import { CovenantModel } from './data/covenantModel.mjs';
import { PactModel } from './data/pactModel.mjs';
import { PactSheet } from './sheets/pact-sheet.mjs';
import { CovenantSheet } from './sheets/covenant-sheet.mjs';
import { RoBActorSheetMixin } from './sheets/actor-sheet.mjs';

Hooks.once('init', () => {

    const robActorSheet = RoBActorSheetMixin(game.pbta.applications.actor.PbtaActorSheet);
    Actors.unregisterSheet('pbta', game.pbta.applications.actor.PbtaActorSheet, { types: ['character', 'other'] });
    Actors.registerSheet('pbta', robActorSheet, {
        types: ['character', 'other'],
        makeDefault: true,
        label: 'Rhaposdy of Blood Character Sheet',
    });

    // Covenant DataModel & Sheet Setup
    Object.assign(CONFIG.Item.dataModels, {
        'pbta-rhapsodyofblood.covenant': CovenantModel,
    });
    Items.unregisterSheet('pbta', game.pbta.applications.item.PbtaItemSheet, { types: ['pbta-rhapsodyofblood.covenant'] });
    Items.registerSheet('pbta-rhapsodyofblood', CovenantSheet, {
        types: ['pbta-rhapsodyofblood.covenant'],
        makeDefault: true,
        label: 'Covenant Sheet',
    });

    // Pact DataModel & Sheet Setup
    Object.assign(CONFIG.Item.dataModels, {
        'pbta-rhapsodyofblood.pact': PactModel,
    });
    Items.unregisterSheet('pbta', game.pbta.applications.item.PbtaItemSheet, { types: ['pbta-rhapsodyofblood.pact'] });
    Items.registerSheet('pbta-rhapsodyofblood', PactSheet, {
        types: ['pbta-rhapsodyofblood.pact'],
        makeDefault: true,
        label: 'Pact Sheet',
    });

    // Preload Handlebars stuff.
    utils.preloadHandlebarsTemplates();

    // Register settings
    game.settings.register('pbta-rhapsodyofblood', 'firstTime', {
        name: 'First Time Startup',
        scope: 'world',
        config: false,
        type: Boolean,
        default: true,
    });
});

Hooks.once('ready', function () {
    if (!game.settings.get('pbta-rhapsodyofblood', 'firstTime')) return;
    game.settings.set('pbta-rhapsodyofblood', 'firstTime', false);
  
    const callback = async () => {
      const worldData = {
        id: game.world.id,
        action: 'editWorld',
        background: `modules/pbta-rhapsodyofblood/assets/login-bg.webp`,
      };
      const response = await foundry.utils.fetchJsonWithTimeout(foundry.utils.getRoute('setup'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(worldData),
      });
      game.world.updateSource(response);
    };
  
    foundry.applications.api.DialogV2.confirm({
      window: { title: 'Welcome to Rhapsody of Blood!' },
      content: '<p>Would you like to use a Rhapsody of Blood theme for your login screen?</p>',
      rejectClose: false,
      modal: true,
      yes: { callback: callback },
    });
});

Hooks.on('preCreateItem', (item, data, options, userId) => {
    // TODO: Add custom Item Images.

    if (item.parent && (item.parent?.type === "character" || item.parent?.type === "other") && item.type === "playbook") {
        const defaultImg = "icons/svg/mystery-man.svg";
        const assetPath = "modules/pbta-rhapsodyofblood/assets/";
        const characterPath = `${assetPath}characters/`;
        console.log('TEST -----------');
        console.log(item.system.slug);
        if (item.parent?.img === defaultImg || item.parent?.img.includes(assetPath)) {
            item.parent.update({ img: `${characterPath}${item.system.slug}.webp` });
        }
    }
});

// Override sheetConfig with Rhapsody of Blood sheet (TOML).
Hooks.once('pbtaSheetConfig', () => {
  
    // Disable the PbtA sheet config form.
    if (game.settings.settings.get('pbta.sheetConfigOverride')) game.settings.set('pbta', 'sheetConfigOverride', true);

    // Define custom tags.
    game.pbta.tagConfigOverride = {

        item: {
            // Tags available to a specific item type (e.g. "equipment", "move")
            // TODO: add translation support in tags
            armor: '[{"value":"Ammo"}, {"value":"Brace"}, {"value":"Close"}, {"value":"Fragile"}, {"value":"Grazing"}, {"value":"Heirloom"}, {"value":"Painful"}, {"value":"Reload"}, {"value":"Thrown"}, {"value":"Unstable"}, {"value":"Cleave"}, {"value":"Flexible"}, {"value":"Hefty"}, {"value":"Holy"}, {"value":"Lingering"}, {"value":"Piercing"}, {"value":"Ranged"}, {"value":"Stun"}, {"value":"Tether"}]',
            gear: '[{"value":"Ammo"}, {"value":"Brace"}, {"value":"Close"}, {"value":"Fragile"}, {"value":"Grazing"}, {"value":"Heirloom"}, {"value":"Painful"}, {"value":"Reload"}, {"value":"Thrown"}, {"value":"Unstable"}, {"value":"Cleave"}, {"value":"Flexible"}, {"value":"Hefty"}, {"value":"Holy"}, {"value":"Lingering"}, {"value":"Piercing"}, {"value":"Ranged"}, {"value":"Stun"}, {"value":"Tether"}]'
        }
    }
    
    // Replace the game.pbta.sheetConfig with Rhapsody of Blood version.
    configSheet();

    // Settings for Rhapsody of Blood
    game.settings.set('pbta', 'advForward', true);
    game.settings.set('pbta', 'hideRollFormula', true);
    game.settings.set('pbta', 'hideForward', true);
    game.settings.set('pbta', 'hideOngoing', true);
    game.settings.set('pbta', 'hideRollMode', false);
    game.settings.set('pbta', 'hideUses', true);

    if (game.settings.settings.has('pbta.hideAdvancement')) {
        game.settings.set('pbta', 'hideAdvancement', true);
    }

    if (game.settings.settings.has('pbta.hideHold')) {
        game.settings.set('pbta', 'hideHold', true);
    }
});
