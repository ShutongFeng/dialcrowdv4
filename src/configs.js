export const serverUrl = process.env.NODE_ENV === 'development' ? 'https://dialcrowd-server-5264df11cc57.herokuapp.com' : process.env.serverUrl
export const clientUrl = process.env.NODE_ENV === 'development' ? 'http://0.0.0.0:3000' : process.env.PUBLIC_URL

