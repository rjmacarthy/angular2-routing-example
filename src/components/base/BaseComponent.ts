import {bindActionCreators} from 'redux';
import { forEach } from 'lodash';

export default class BaseComponent {
	public unsubscribe = Function;
	private _actions: any;
	private _registrationsToUse: any;

	constructor(actions, storesToUse: Array<string>, ngRedux?) {
		if (ngRedux) {
			this._actions = actions;
			this._registrationsToUse = storesToUse;
			this.unsubscribe = ngRedux.connect(this.mapStateToThis.bind(this), this.mapDispatchToThis.bind(this))(this);
		}
	}

	ngOnDestroy() {
		this.unsubscribe();
	}

	mapStateToThis(state) {
		var vm = {};
		forEach(this._registrationsToUse, (registration: string) => {
			if (state[registration]) {
				vm[registration] = state[registration];
			}
		});
		return vm;
	}

	mapDispatchToThis(dispatch) {
		return { actions: bindActionCreators(this._actions, dispatch) };
	}

}