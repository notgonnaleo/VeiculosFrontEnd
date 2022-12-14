require('dotenv').config();
const axios = require("axios");
const https = require('https');

// Ignora autorização SSL do axios
const instance = axios.create({ 
    httpsAgent: new https.Agent({ rejectUnauthorized: false  })
});

exports.ListagemVeiculos = async (req, res, next) => {
    try
    {
        var Request = await instance.get(process.env.ENDPOINT+"Veiculo/GetVeiculos")
        var Response = Request.data;

        return Response;

    }
    catch(error){
        console.log(error);
    }
};
