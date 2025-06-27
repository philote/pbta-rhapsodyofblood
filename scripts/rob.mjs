import { configSheet } from "./helpers/config-sheet.mjs";
import * as utils from "./helpers/utils.mjs";
import { CovenantModel } from "./data/covenantModel.mjs";
import { PactModel } from "./data/pactModel.mjs";
import { PactSheet } from "./sheets/pact-sheet.mjs";
import { CovenantSheet } from "./sheets/covenant-sheet.mjs";
import { RoBActorSheetMixin } from "./sheets/actor-sheet.mjs";

Hooks.once("init", () => {
  const robActorSheet = RoBActorSheetMixin(
    game.pbta.applications.actor.PbtaActorSheet
  );
  Actors.unregisterSheet("pbta", game.pbta.applications.actor.PbtaActorSheet, {
    types: ["character", "other"],
  });
  Actors.registerSheet("pbta", robActorSheet, {
    types: ["character", "other"],
    makeDefault: true,
    label: "Rhaposdy of Blood Character Sheet",
  });

  // Covenant DataModel & Sheet Setup
  Object.assign(CONFIG.Item.dataModels, {
    "pbta-rhapsodyofblood.covenant": CovenantModel,
  });
  Items.unregisterSheet("pbta", game.pbta.applications.item.PbtaItemSheet, {
    types: ["pbta-rhapsodyofblood.covenant"],
  });
  Items.registerSheet("pbta-rhapsodyofblood", CovenantSheet, {
    types: ["pbta-rhapsodyofblood.covenant"],
    makeDefault: true,
    label: "Covenant Sheet",
  });

  // Pact DataModel & Sheet Setup
  Object.assign(CONFIG.Item.dataModels, {
    "pbta-rhapsodyofblood.pact": PactModel,
  });
  Items.unregisterSheet("pbta", game.pbta.applications.item.PbtaItemSheet, {
    types: ["pbta-rhapsodyofblood.pact"],
  });
  Items.registerSheet("pbta-rhapsodyofblood", PactSheet, {
    types: ["pbta-rhapsodyofblood.pact"],
    makeDefault: true,
    label: "Pact Sheet",
  });

  // Preload Handlebars stuff.
  utils.preloadHandlebarsTemplates();

  // Register settings
  game.settings.register("pbta-rhapsodyofblood", "firstTime", {
    name: "First Time Startup",
    scope: "world",
    config: false,
    type: Boolean,
    default: true,
  });
  
  game.settings.register("pbta-rhapsodyofblood", "enableLoginImg", {
    name: game.i18n.localize("RoB.Settings.img.name"),
    hint: game.i18n.localize("RoB.Settings.img.hint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
  });
});

Hooks.once("ready", async function () {
  if (!game.user.isGM) return;
  if (game.settings.get("pbta-rhapsodyofblood", "firstTime")) {
    game.settings.set("pbta-rhapsodyofblood", "firstTime", false);

    const callback = async () => {
      game.settings.set("pbta-rhapsodyofblood", "enableLoginImg", true);
      const worldData = {
        id: game.world.id,
        action: "editWorld",
        background: `modules/pbta-rhapsodyofblood/assets/login-bg.webp`,
      };
      let response;
      try {
        response = await foundry.utils.fetchJsonWithTimeout(
          foundry.utils.getRoute("setup"),
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(worldData),
          }
        );
        if (response.error) {
          ui.notifications.error(response.error);
        } else if (!response) {
          game.world.updateSource(response);
        }
      } catch (e) {
        return ui.notifications.error(e);
      }
    };

    foundry.applications.api.DialogV2.confirm({
      window: {
        title: game.i18n.localize("RoB.Settings.startup.dialog.title"),
      },
      content: game.i18n.localize("RoB.Settings.startup.dialog.content"),
      rejectClose: false,
      modal: true,
      yes: { callback: callback },
    });
  } else {
    if (game.settings.get("pbta-rhapsodyofblood", "enableLoginImg")) {
      const worldData = {
        id: game.world.id,
        action: "editWorld",
        background: `modules/pbta-rhapsodyofblood/assets/login-bg.webp`,
      };
      let response;
      try {
        response = await foundry.utils.fetchJsonWithTimeout(
          foundry.utils.getRoute("setup"),
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(worldData),
          }
        );
        if (response.error) {
          ui.notifications.error(response.error);
        } else if (!response) {
          game.world.updateSource(response);
        }
      } catch (e) {
        return ui.notifications.error(e);
      }
    }
  }
});

Hooks.on("preCreateItem", (item, data, options, userId) => {
  // TODO: Add custom Item Images.

  if (
    item.parent &&
    (item.parent?.type === "character" || item.parent?.type === "other") &&
    item.type === "playbook"
  ) {
    const defaultImg = "icons/svg/mystery-man.svg";
    const assetPath = "modules/pbta-rhapsodyofblood/assets/";
    const characterPath = `${assetPath}characters/`;
    
    if (
      item.parent?.img === defaultImg ||
      item.parent?.img.includes(assetPath)
    ) {
      item.parent.update({ img: `${characterPath}${item.system.slug}.webp` });
    }
  }
});

// Override sheetConfig with Rhapsody of Blood sheet (TOML).
Hooks.once("pbtaSheetConfig", () => {
  // Disable the PbtA sheet config form.
  if (game.settings.settings.get("pbta.sheetConfigOverride"))
    game.settings.set("pbta", "sheetConfigOverride", true);

  // Define custom tags.
  game.pbta.tagConfigOverride = {
    item: {
      // Tags available to a specific item type (e.g. "equipment", "move")
      // TODO: add translation support in tags
      armor:
        '[{"value":"Ammo"}, {"value":"Brace"}, {"value":"Close"}, {"value":"Fragile"}, {"value":"Grazing"}, {"value":"Heirloom"}, {"value":"Painful"}, {"value":"Reload"}, {"value":"Thrown"}, {"value":"Unstable"}, {"value":"Cleave"}, {"value":"Flexible"}, {"value":"Hefty"}, {"value":"Holy"}, {"value":"Lingering"}, {"value":"Piercing"}, {"value":"Ranged"}, {"value":"Stun"}, {"value":"Tether"}]',
      gear: '[{"value":"Ammo"}, {"value":"Brace"}, {"value":"Close"}, {"value":"Fragile"}, {"value":"Grazing"}, {"value":"Heirloom"}, {"value":"Painful"}, {"value":"Reload"}, {"value":"Thrown"}, {"value":"Unstable"}, {"value":"Cleave"}, {"value":"Flexible"}, {"value":"Hefty"}, {"value":"Holy"}, {"value":"Lingering"}, {"value":"Piercing"}, {"value":"Ranged"}, {"value":"Stun"}, {"value":"Tether"}]',
    },
  };

  // Replace the game.pbta.sheetConfig with Rhapsody of Blood version.
  configSheet();

  // Settings for Rhapsody of Blood
  game.settings.set("pbta", "advForward", true);
  game.settings.set("pbta", "hideRollFormula", true);
  game.settings.set("pbta", "hideForward", true);
  game.settings.set("pbta", "hideOngoing", true);
  game.settings.set("pbta", "hideRollMode", false);
  game.settings.set("pbta", "hideUses", true);

  if (game.settings.settings.has("pbta.hideAdvancement")) {
    game.settings.set("pbta", "hideAdvancement", true);
  }

  if (game.settings.settings.has("pbta.hideHold")) {
    game.settings.set("pbta", "hideHold", true);
  }
});

Hooks.on("renderSettings", (app, html) => {
  // --- Setting Module Configuration
  const MODULE_CONFIG = {
    headingKey: "RoB.Settings.game.heading",
    sectionClass: "RoB-doc",
    buttonsData: [
      {
        action: (ev) => {
          ev.preventDefault();
          window.open("https://ufopress.co.uk/product/rhapsody/", "_blank");
        },
        iconClasses: ["fa-solid", "fa-book"],
        labelKey: "RoB.Settings.game.publisher.title",
      },
      {
        action: (ev) => {
          ev.preventDefault();
          window.open(
            "https://github.com/philote/pbta-rhapsodyofblood",
            "_blank"
          );
        },
        iconClasses: ["fab", "fa-github"],
        labelKey: "RoB.Settings.game.github.title",
      },
      {
        action: (ev) => {
          ev.preventDefault();
          window.open("https://ko-fi.com/ephson", "_blank");
        },
        iconClasses: ["fa-solid", "fa-mug-hot"],
        labelKey: "RoB.Settings.game.kofi.title",
      },
    ],
  };

  // --- Button Creation Logic
  const buttons = MODULE_CONFIG.buttonsData.map(
    ({ action, iconClasses, labelKey }) => {
      const button = document.createElement("button");
      button.type = "button";

      const icon = document.createElement("i");
      icon.classList.add(...iconClasses);

      // Append icon and localized text node
      button.append(
        icon,
        document.createTextNode(` ${game.i18n.localize(labelKey)}`)
      );

      button.addEventListener("click", action);
      return button;
    }
  );

  // --- Version Specific Logic (Reusable) ---
  if (game.release.generation >= 13) {
    // V13+ Logic: Insert after the "Documentation" section
    const documentationSection = html.querySelector("section.documentation");
    if (documentationSection) {
      // Create section wrapper
      const section = document.createElement("section");
      section.classList.add(MODULE_CONFIG.sectionClass, "flexcol");

      const divider = document.createElement("h4");
      divider.classList.add("divider");
      divider.textContent = game.i18n.localize(MODULE_CONFIG.headingKey);

      // Append divider and buttons to section
      section.append(divider, ...buttons);

      // Insert section before documentation
      documentationSection.before(section);
    } else {
      console.warn(
        `${game.i18n.localize(
          MODULE_CONFIG.headingKey
        )} | Could not find 'section.documentation' in V13 settings panel.`
      );
    }
  } else {
    // V12 Logic: Insert after the "Game Settings" section
    const gameSettingsSection = html[0].querySelector("#settings-game");
    if (gameSettingsSection) {
      const header = document.createElement("h2");
      header.innerText = game.i18n.localize(MODULE_CONFIG.headingKey);

      const settingsDiv = document.createElement("div");
      settingsDiv.append(...buttons);

      // Insert the header and the div containing buttons after the game settings section
      gameSettingsSection.after(header, settingsDiv);
    } else {
      console.warn(
        `${game.i18n.localize(
          MODULE_CONFIG.headingKey
        )} | Could not find '#settings-game' section in V12 settings panel.`
      );
    }
  }
});