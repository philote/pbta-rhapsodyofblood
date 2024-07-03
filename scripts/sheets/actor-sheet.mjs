export function RoBActorSheetMixin(Base) {
	return class RoBActorSheet extends Base {
		/** @override */
		get template() {
			return 'modules/pbta-rhapsodyofblood/templates/actor-sheet.hbs';
		}

		/** @override */
		async getData() {
			const context = await super.getData();

			if (this.actor.type === 'character') {
				context.actor.covenants = context.actor.items.filter((i) => i.type === 'pbta-rhapsodyofblood.covenant');
			}
			if (this.actor.type === 'other') {
				context.actor.pacts = context.actor.items.filter((i) => i.type === 'pbta-rhapsodyofblood.pact');
			}
			return context;
		}

		/** @override */
		activateListeners(html) {
			super.activateListeners(html);
	  
			html.find('[data-covenant-action]').on('change', this._onCovenantAction.bind(this));
			html.find('[data-pact-action]').on('change', this._onPactsAction.bind(this));
		}

		async _onPactsAction(event) {
			event.preventDefault();
			const clickedElement = $(event.currentTarget);
			const action = clickedElement.data().pactAction;
			const id = clickedElement.parents('.item').attr('data-item-id');
			const item = this.actor.items.get(id);
			const value = event.target.value;

			switch (action) {
				case 'name':
					await item.update({ 'name': value });
					break;
				case 'pacts':
					await item.update({ 'system.pacts': value });
					break;
			}
		}

		async _onCovenantAction(event) {
			event.preventDefault();
			const clickedElement = $(event.currentTarget);
			const action = clickedElement.data().covenantAction;
			const id = clickedElement.parents('.item').attr('data-item-id');
			const item = this.actor.items.get(id);
			const value = event.target.value;

			switch (action) {
				case 'name':
					await item.update({ 'name': value });
					break;
				case 'explorer':
					await item.update({ 'system.explorerName': value });
					break;
				case 'rating':
					await item.update({ 'system.rating': value });
					break;
				case 'strengthen':
					await item.update({ 'system.strengthen': value });
					break;
				case 'weaken':
					await item.update({ 'system.weaken': value });
					break;
			}
		}
	}
}