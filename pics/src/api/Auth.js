import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID QiipCMzbvcqq9k7YNMFw2xaixQjoOV6SH-2EQGZ3_s4",
      },
});