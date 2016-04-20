"use strict";
import { assign } from 'lodash';

let initialState: any = {
	status: true,
	name: "Richard",
	age: 31,
	job: "dev"
};

module UserReducer {

	export const user: Redux.Reducer = (state = initialState, action: any) => {
		if (UserReducers[action.type]) {
			return UserReducers[action.type](state, action);
		} else {
			return state;
		}
	};

	class UserReducers {
		public static USER(state = initialState, action: any): any {
			if (action.data) {
				return assign({}, state, action.data);
			} else {
				return state;
			}
		}
	}
}


export default UserReducer.user;