export const serverUrl = process.env.NODE_ENV === 'development' ? 'https://dialcrowd-server-v3-0ddb228517b3.herokuapp.com' : "https://dialcrowd-server-dev-837f73c10566.herokuapp.com/"
export const clientUrl = process.env.NODE_ENV === 'development' ? 'http://0.0.0.0:3000' : process.env.PUBLIC_URL

