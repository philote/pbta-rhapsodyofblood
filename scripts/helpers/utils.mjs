/**
 * Define a set of template paths to pre-load
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    'modules/pbta-rhapsodyofblood/templates/parts/actor-social.hbs',
    'modules/pbta-rhapsodyofblood/templates/parts/actor-covenants.hbs',
    'modules/pbta-rhapsodyofblood/templates/parts/actor-pacts.hbs',
  ]);
};