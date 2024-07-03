/**
 * A data model for the Root Connection item
 */
export class CovenantModel extends foundry.abstract.TypeDataModel {
  /**
   * @returns {any} the schema for the CovenantsModel
   */
  static defineSchema() {
    const fields = foundry.data.fields;
    return {
      explorerName: new fields.StringField({ required: true, blank: true }),
      strengthen: new fields.StringField({ required: false, blank: true }),
      weaken: new fields.StringField({ required: false, blank: true }),
      rating: new fields.NumberField({
        min: 0,
        initial: 0,
        integer: true,
      }),
    };
  }
}