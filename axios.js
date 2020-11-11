const axios = require('axios');
require('custom-env').env(true)

instance = axios.create({
    baseURL: `https://api.airtable.com/v0/appTEzymOEBjlewgj/list`,
    timeout: 1000,
    headers: {'Authorization': 'Bearer ' + process.env.AIRTABLE_API_KEY}
  })
