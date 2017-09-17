import { Action } from '@ngrx/store';

import { IContent } from './IContent';
import {
    ContentAction, LoadContent, UnLoadContent, SwitchLocale,
    CONTENT_LOAD, CONTENT_LOAD_OK, CONTENT_LOAD_ERR,
    CONTENT_UN_LOAD, SWITCH_LOCALE
} from './content.actions';

const initialState: IContent = {
    currentLocale: 'en'
};

export function contentReducer(state: IContent = initialState, action: ContentAction): IContent {
    switch (action.type) {
        case CONTENT_LOAD_OK:
            const subappId = action.payload.subappId;
            const result = {
                ...state
            };
            result[`${subappId.moduleId}_${subappId.appId}`] = action.payload;
            return result;

        case CONTENT_LOAD_ERR:
            return {
                ...state
            };

        case CONTENT_UN_LOAD:
            const subappId2 = action.payload;
            const stateAfterUnload = {
                ...state
            };
            stateAfterUnload[`${subappId2.moduleId}_${subappId2.appId}`] = {};
            return stateAfterUnload;

        case SWITCH_LOCALE:
            return {
                ...state,
                currentLocale: action.payload.locale
            };

        default:
            return state;
    }
}
