export const serverUrl = process.env.NODE_ENV === 'development' ? 'https://luster-human-eval-db245a0b4a24.herokuapp.com' : process.env.REACT_APP_SERVER_URL
export const clientUrl = process.env.NODE_ENV === 'development' ? 'http://0.0.0.0:3000' : process.env.PUBLIC_URL
