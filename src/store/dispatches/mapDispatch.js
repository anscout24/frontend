import * as actions from "../actions";

export const mapDispatch = {
    onFetchFrom_API: (url, payload) => actions.fetchDatafromApi( url, 'GET',payload),
    onPostTo_API: (url, payload) => actions.sendDatatoApi( url, 'POST', payload ),
}