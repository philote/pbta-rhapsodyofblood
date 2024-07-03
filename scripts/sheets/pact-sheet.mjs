/**
 * Extend the ItemSheet to implement a Pact sheet
 *
 * @augments {ItemSheet}
 */
export class PactSheet extends ItemSheet {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ['pbta', 'sheet', 'item'],
      width: 450,
      height: 200,
      tabs: [{ navSelector: '.sheet-tabs', contentSelector: '.sheet-body', initial: 'details' }],
    });
  }

  /** @override */
  get template() {
    return 'modules/pbta-rhapsodyofblood/templates/pact-sheet.hbs';
  }

  /** @override */
  async getData() {
    // Retrieve base data structure.
    const context = super.getData();

    // Use a safe clone of the item data for further operations.
    const itemData = context.item;
    
    // Add the items's data to context.data for easier access, as well as flags.
    context.system = itemData.system;

    return context;
  }
}
