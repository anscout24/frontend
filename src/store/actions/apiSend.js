import axios from 'axios';
import * as actionTypes from './actionTypes';
import * as routes from '../routes/routes';
import {ActionTrigger} from "./actionTrigger";

/***
 *
 * EXECUTE POST TO API
 *
 */



export const sendDatatoApi = (url,method,...args) => {

    return dispatch => {

        /**
         * Axios params
         */


        // define config
        let cfg = {
            responseType: 'json',
            responseEncoding: 'utf8',
            headers: {
                'Content-Type': 'application/json',
            }
        };

        const providedRouteUrlMethod = url+'_'+method;
        let body = {};

        switch (providedRouteUrlMethod) {

            /***
             * execute req with axios and additional options
             * important: axios sends OPTIONS in the first step
             * on the backend the ApiServer is defined:
             *          ApiServer.use(cors()); // means: Access-Control-Allow-Origin: *
             */


            case routes.POST_DATA_VERIFICATION:

                dispatch(ActionTrigger(actionTypes.POST_DATA_START));

                body.data = {...args[0]};

                // API verwertet die relevanten Parameter
                axios.post(url,body,cfg)
                    .then(response => {
                        dispatch(ActionTrigger(
                            actionTypes.POST_DATA_SUCCESS,
                            {apiresponse: response.data.message}
                            )
                        );
                        window.location.reload();
                    })
                    .catch(err => {
                        dispatch(ActionTrigger(
                            actionTypes.POST_DATA_FAILURE,
                            {error: err},
                        ));
                    })

                break;

            default:
                console.log('fetch not defined')
        }
    }

};