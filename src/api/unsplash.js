import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID yHQWCx-0FocrVhSUa78rC7i5vX4efT6-j6SKOBWek5s",
  },
});
