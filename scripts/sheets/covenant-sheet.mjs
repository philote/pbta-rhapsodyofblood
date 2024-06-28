/**
 * Extend the ItemSheet to implement a Covenant sheet
 *
 * @augments {ItemSheet}
 */
export class CovenantSheet extends ItemSheet {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ['pbta', 'sheet', 'item'],
      width: 450,
      height: 450,
      tabs: [{ navSelector: '.sheet-tabs', contentSelector: '.sheet-body', initial: 'details' }],
    });
  }

  /** @override */
  get template() {
    return 'modules/pbta-rhapsodyofblood/templates/covenant-sheet.hbs';
  }

  /** @override */
  async getData() {
    // Retrieve base data structure.
    const context = super.getData();
    return context;
  }

  /** @override */
  async activateListeners(html) {
    super.activateListeners(html);
    // html.find('[data-connection-action]').click(this._connectionAction.bind(this));
    // html.find('.typeChange').on('change', this._onTypeChange.bind(this));
  }
}
