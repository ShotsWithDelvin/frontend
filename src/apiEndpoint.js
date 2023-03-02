let prodEndpoint = "https://backend-production-6bec.up.railway.app"
let devEndpoint = "http://localhost:3001"

let APIURL = process.env.NODE_ENV === "production" ? prodEndpoint : devEndpoint

export default APIURL