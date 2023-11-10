export const serverUrl = process.env.NODE_ENV === 'development' ? 'https://dialcrowd-server-v3-0ddb228517b3.herokuapp.com' : "http://34.32.143.76:3040"
export const clientUrl = process.env.NODE_ENV === 'development' ? 'http://0.0.0.0:3000' : process.env.PUBLIC_URL

