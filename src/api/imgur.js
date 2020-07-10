import qs from "qs";
import Axios from "axios";

const CLIENT_ID = "03f2a108684319c";
const ROOT_URL = "https://api.imgur.com";

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: "token",
    };
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  },
  fetchImages(token) {
    return Axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  uploadImages(token, images) {
    const allUploads = Array.from(images).map((image) => {
      const formData = new FormData();
      formData.append("image", image);
      return Axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    });
    return Promise.all(allUploads);
  },
  deleteImage(token,hash){
    return Axios.delete(`${ROOT_URL}/3/account/me/image/${hash}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
};
