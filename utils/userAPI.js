const axios = require('axios');

const userAPI = {
    async getUser(userResponses) {
        try {let response = await axios
        .get('https://api.github.com/users/${userResponses.username}');
      
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = userAPI;