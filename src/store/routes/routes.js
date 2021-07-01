// DEFAULT API ROUTES


// SERVER
let API_SERVER = window._env_.REACT_APP_API_SERVER ;
console.log('API_SERVER',API_SERVER)

// TEST Connection
export const TEST_API_ROUTE = API_SERVER
export const TEST_API_ROUTE_VERIFICATION = API_SERVER+'_GET';

// SWAGGER
export const SWAGGER_ROUTE = API_SERVER+'/doc';

// FETCH DATA
const MVP_ROUTE = API_SERVER+'/mvp';
export const FETCH_DATA_ROUTE = MVP_ROUTE;
export const POST_ROUTE = MVP_ROUTE;
export const FETCH_DATA_VERIFICATION = MVP_ROUTE+'_GET';
export const POST_DATA_VERIFICATION = MVP_ROUTE+'_POST';
