/**
 * A data model for the Root Connection item
 */
export class PactModel extends foundry.abstract.TypeDataModel {
  /**
   * @returns {any} the schema for the CovenantsModel
   */
  static defineSchema() {
    const fields = foundry.data.fields;
    return {
      explorerName: new fields.StringField({ required: true, blank: true }),
      rating: new fields.NumberField({
        min: 0,
        initial: 0,
        integer: true,
      }),
    };
  }
}