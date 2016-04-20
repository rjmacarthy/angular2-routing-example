"use strict";
import { assign } from 'lodash';

let initialState: any = {
    status: true,
    name: "Bobby",
    age: 31,
    job: "Estate Agent"
};

module GroupReducer {

    export const group: Redux.Reducer = (state = initialState, action: any) => {
        if (GroupReducers[action.type]) {
            return GroupReducers[action.type](state, action);
        } else {
            return state;
        }
    };

    class GroupReducers {
        public static GROUP(state = initialState, action: any): any {
            if (action.data) {
                return assign({}, state, action.data);
            } else {
                return state;
            }
        }
    }
}


export default GroupReducer.group;