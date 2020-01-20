const https = require("https");

const ZipCodes = require("../models").ZipCodes;

module.exports = {
  create(req, res) {
    zipCodeInfo = searchZipCode(req.body.zipCode);

    return ZipCodes.create({
      zipCode: req.body.zipCode,
      clientEmail: req.params.email,
      ...zipCodeInfo
    })
      .then(resZipCode => {
        res.status(201).send(resZipCode);
      })
      .catch(error => res.status(400).send(error));
  },
  delete(req, res) {
    return ZipCodes.destroy({
      where: {
        zipCode: req.params.zipcode
      }
    })
      .then(result => {
        res.status(204).send();
      })
      .catch(error => res.status(400).send(error));
  },
};

function searchZipCode(zipCode) {
  var buscaCep = require('busca-cep');

  var resposta = buscaCep(zipCode, { sync: true });
  if (resposta.hasError) {
    console.log(
      `Erro: statusCode ${resposta.statusCode} e mensagem ${resposta.message}`
    );
  }

  return resposta;
}
