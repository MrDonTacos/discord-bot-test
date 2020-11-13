const axios = require('axios');
require('custom-env').env(true)

module.exports.instance = () => {
        return axios.create({    
          baseURL: `https://api.airtable.com`,
          timeout: 1000,
          headers: {'Authorization': 'Bearer ' + process.env.AIRTABLE_API_KEY}
        })
}
