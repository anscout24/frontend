import axios from 'axios';
import * as actionTypes from './actionTypes';
import * as routes from '../routes/routes';

export const fetch_action_flex = (actionType, param = null, ...arg) => {
    return {
        type: actionTypes[actionType], param, ...arg
    }
};

/***
 *
 * EXECUTE API CALL
 *
 */
export const fetchDatafromApi = (url, method, ...args) => {

    return dispatch => {

        /**
         * Axios params
         */


            // define config
        const cfg = {
                responseType: 'json',
                responseEncoding: 'utf8',
                headers: {
                    'Content-Type': 'application/json',
                },
            };


        /**
         * switch routes as defined in ../store/routes/routes.js and
         * imported as routes
         */

            //define unique route url+method to protect spelling errors
        const providedRouteUrlMethod = url + '_' + method;

        switch (providedRouteUrlMethod) {

            /***
             * execute req with axios and additional options
             * important: axios sends OPTIONS in the first step
             * on the backend the ApiServer is defined:
             * ApiServer.use(cors()); // means: Access-Control-Allow-Origin: *
             */

            case routes.TEST_API_ROUTE_VERIFICATION:

                cfg.params = args[0]

                dispatch(fetch_action_flex(actionTypes.TEST_BACKEND_CONNECTION_START));

                axios.get(url, cfg)
                    .then(() => {
                        dispatch(fetch_action_flex(
                            actionTypes.TEST_BACKEND_CONNECTION_SUCCESS,
                            {backendStatus: true},
                        ));
                    })
                    .catch(err => {
                        dispatch(fetch_action_flex(
                            actionTypes.TEST_BACKEND_CONNECTION_FAILURE,
                            {backendStatus: false, error: err},
                        ));
                    });
                break;

            // Fallback
            default:
                console.log('fetch not defined')
        }
    }
};