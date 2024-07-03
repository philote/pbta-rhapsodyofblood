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
});

Hooks.on('preCreateItem', (item, data, options, userId) => {
    // TODO: Add custom Item Images.

    if (item.parent && (item.parent?.type === "character" || item.parent?.type === "other") && item.type === "playbook") {
        const defaultImg = "icons/svg/mystery-man.svg";
        const assetPath = "modules/pbta-rhapsodyofblood/assets/";
        const characterPath = `${assetPath}characters/`;
        const explorersPath = `${characterPath}explorers/`;
        const foundersPath = `${characterPath}founders/`;

        if (item.parent?.img === defaultImg || item.parent?.img.includes(assetPath)) {
            switch (item.system.slug) {
                // Explorers
                case 'the-slayer':
                    item.parent.update({ "img": `${explorersPath}the-slayer.webp` });
                    break;
                case 'the-mystic':
                    item.parent.update({ "img": `${explorersPath}the-mystic.webp` });
                    break;
                case 'the-packrat':
                    item.parent.update({ "img": `${explorersPath}the-packrat.webp` });
                    break;
                case 'the-reckoner':
                    item.parent.update({ "img": `${explorersPath}the-reckoner.webp` });
                    break;
                case 'the-bonded':
                    item.parent.update({ "img": `${explorersPath}the-bonded.webp` });
                    break;
                // Founders
                case 'the-tainted':
                    item.parent.update({ "img": `${foundersPath}the-tainted.webp` });
                    break;
                case 'the-saint':
                    item.parent.update({ "img": `${foundersPath}the-saint.webp` });
                    break;
                case 'the-ritualist':
                    item.parent.update({ "img": `${foundersPath}the-ritualist.webp` });
                    break;
                case 'the-paladin':
                    item.parent.update({ "img": `${foundersPath}the-paladin.webp` });
                    break;
                case 'the-mastermind':
                    item.parent.update({ "img": `${foundersPath}the-mastermind.webp` });
                    break;
                default:
                    item.parent.update({ "img": item.img });
                    break;
            }
        }
    }
});

// Override sheetConfig with Rhapsody of Blood sheet (TOML).
Hooks.once('pbtaSheetConfig', () => {
  
    // Disable the sheet config form.
    game.settings.set('pbta', 'sheetConfigOverride', true);

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
    if (isNewerVersion(game.system.version, '1.0.4')) {
        game.settings.set('pbta', 'hideHold', true);
    }
});
