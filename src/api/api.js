import axios from "axios";

export default axios.create({
baseURL: "https://api.unsplash.com",
headers: {
Authorization: "Client-ID 9lZmkZXHQ1aVLSVTN34NT9rPWMM24Gjt9uV0NCrrZ9w"
}
});