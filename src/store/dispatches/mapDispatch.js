import * as actions from "../actions";

export const mapDispatch = {
    onFetchFrom_API: (url, payload) => actions.fetchDatafromApi( url, 'GET', payload ),
}