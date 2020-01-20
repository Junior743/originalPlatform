const https = require("https");

const Clients = require("../models").Clients;
const ZipCodes = require("../models").ZipCodes;

module.exports = {
  create(req, res) {
    return Clients.create({
      email: req.body.email,
      cpf: req.body.cpf,
      telefone: req.body.telefone,
      celular: req.body.celular
    })
      .then(clients => {
        res.status(201).send(clients);
        sendEmail(req.body.email);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Clients.update(
      {
        telefone: req.body.telefone,
        celular: req.body.celular
      },
      {
        where: {
          email: req.params.email
        }
      }
    )
      .then(clients => {
        res.status(204).send(clients);
        sendEmail(req.params.email);
      })
      .catch(error => res.status(400).send(error));
  },
  delete(req, res) {
    return Clients.destroy({
      where: {
        email: req.params.email
      }
    })
      .then(result => {
        res.status(204).send();
      })
      .catch(error => res.status(400).send(error));
  },
  checkIfExists(req, res) {
    Clients.findByPk(req.params.email).then(result => {
      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(404).send();
      }
    });
  }
};

function sendEmail(emailTo) {
  const transporter = nodemailer.createTransport({
    host: "mail.bancooriginal.com.br",
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "no-reply@bancooriginal.com",
      pass: "senhaqualquerdeteste"
    },
    tls: { rejectUnauthorized: false }
  });

  const mailOptions = {
    from: "no-reply@bancooriginal.com",
    to: emailTo,
    subject: "Cadastro finalizado",
    text: "Parabéns sua conta foi cadastrada com sucesso!"
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return false;
    } else {
      return true;
    }
  });
}
