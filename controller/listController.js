const axios = require('axios')
const instance = require('../axios.js')
require('custom-env').env(true)

module.create = async body => {
    const {
        Name,
        Description,
    } = body

        var success = await instance().post(`/v0/${process.env.AIRTABLE_BASE_LIST}/list `, {
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

module.getAll = () => {
    axios.get(`/v0/${AIRTABLE_BASE_LIST}/list `)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });  
}