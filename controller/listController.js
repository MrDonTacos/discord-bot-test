const axios = require('axios')

const instance = axios.create({
    baseURL: `https://api.airtable.com`,
    timeout: 1000,
    headers: {'Authorization': 'Bearer ' + process.env.AIRTABLE_API_KEY}
  })


module.exports = async body => {
    const {
        Name,
        Description,
    } = body

        var success = await instance.post("/v0/appTEzymOEBjlewgj/list ", {
        "fields": {
            "Name": Name,
            "Description": Description,
            "Status": true
        },
    }).then((response) =>{
        return response
    }).catch((error) =>{
        console.log(`Error: ${error}`)
    })
    return success;
};