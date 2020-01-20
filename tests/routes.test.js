const faker = require("faker");
const request = require("supertest");

const app = require("../index");

////////// Suite /api/ /////////////

describe("Get hello world", () => {
  it("Should get a 200 ok status code", async () => {
    const res = await request(app).get("/api/");
    expect(res.statusCode).toEqual(200);
  });
});

////////// End Suite /////////////

////////// Suite /api/clients /////////////

const email = faker.internet.email();

describe("Post new clients", () => {
  it("Should get a 201 create status code", async () => {
    const res = await request(app)
      .post("/api/clients")
      .send({
        email: email,
        cpf: faker.address.zipCode(),
        telefone: faker.phone.phoneNumber(),
        celular: faker.phone.phoneNumber()
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("createdAt");
  });
});

describe("Post new clients", () => {
  it("Should get a 400 Bad Request status code", async () => {
    const cpf = faker.address.zipCode();
    const telefone = faker.phone.phoneNumber();
    const celular = faker.phone.phoneNumber();

    const body = {
      email: email,
      cpf: cpf,
      telefone: telefone,
      celular: celular
    };

    const firstRes = await request(app)
      .post("/api/clients")
      .send(body);
    const secondRes = await request(app)
      .post("/api/clients")
      .send(body);
    expect(secondRes.statusCode).toEqual(400);
    expect(secondRes.body).toHaveProperty("errors");
  });
});

describe("Delete clients", () => {
  it("Should get a 204 No Content status code", async () => {
    const secondRes = await request(app)
      .delete("/api/clients/" + email)
    expect(secondRes.statusCode).toEqual(204);
  });
});

////////// End Suite /////////////

////////// Suite /api/clients/:email/zipcodes /////////////

const cep = faker.random.number({
  'min': 1000000,
  'max': 9999999
});

describe("Post new zip codes", () => {
  it("Should get a 201 create status code", async () => {
    const res = await request(app)
      .post("/api/clients/"+ email + "/zipcodes")
      .send({
        zipCode: cep
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("createdAt");
  });
});

describe("Post new zip codes", () => {
  it("Should get a 400 Bad Request status code", async () => {
    const body = {
      zipCode: cep
    };

    const firstRes = await request(app)
      .post("/api/clients/"+ email + "/zipcodes")
      .send(body);
    const secondRes = await request(app)
      .post("/api/clients/"+ email + "/zipcodes")
      .send(body);
    expect(secondRes.statusCode).toEqual(400);
    expect(secondRes.body).toHaveProperty("errors");
  });
});

describe("Delete zip codes", () => {
  it("Should get a 204 No Content status code", async () => {
    const secondRes = await request(app)
      .delete("/api/clients/"+ email + "/zipcodes/" + cep)
    expect(secondRes.statusCode).toEqual(204);
  });
});

////////// End Suite /////////////
