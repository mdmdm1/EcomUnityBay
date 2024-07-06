// test/auth.test.js
import request from "supertest"; // Import supertest as default
import { expect } from "chai";
import app from "../index.js"; // Import app from index.js
import User from "../models/User.js";

describe("Auth Routes", () => {
  before(async () => {
    await User.deleteMany({});
  });

  it("should register a new user", async () => {
    const res = await request(app).post("/api/auth/register").send({
      username: "testUser",
      mail: "test@test.com",
      password: "password123",
    });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property(
      "message",
      "User registered successfully"
    );
  });

  it("should login a user", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ mail: "test@test.com", password: "password123" });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("token");
  });
});
