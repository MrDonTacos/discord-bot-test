const axios = require('../axios.js')
require('custom-env').env(true)

module.exports.create = async body => {
    console.log("Se entró a la función")
    try {
    const {
        Name,
        Description,
    } = body
        var success = await axios.instance().post(`/v0/${process.env.AIRTABLE_BASE_LIST}/list `, {
        "fields": {
            "Name": Name,
            "Description": Description,
            "Status": true
        },
    }).then((response) =>{
        console.log("Creación exitosa")
        return response
    }).catch((error) =>{
        console.log(`Error: ${error}`)
    })
        return success;
    } catch (error) {
        console.log("Error: " + error)
    }
};

module.exports.getAll = async() => {
    try {
    const success = await axios.instance().get(`/v0/${process.env.AIRTABLE_BASE_LIST}/list `)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      })
    //   console.log(success.data.records.forEach(element => console.log(element.fields.Name)))
        return success.data.records;        
    } catch (error) {
        console.log(error)
    }
}