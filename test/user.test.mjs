import { expect } from "chai";
import bcrypt from "bcrypt";
import User from "../models/User.js";

describe("User Model", () => {
  it("should hash the passwprd before saving", async () => {
    const user = new User({
      username: "testUser",
      mail: "test@test.com",
      password: "password123",
    });
    await user.save();
    expect(user.password).to.not.equal("password123");
    const isMatch = await bcrypt.compare("password123", user.password);
    expect(isMatch).to.be.true;
  });

  it("should correctly compare passwords", async () => {
    const user = new User({
      username: "testUser",
      mail: "test@test.com",
      password: "password123",
    });
    await user.save();
    const isMatch = await user.comparePassword("password123");
    expect(isMatch).to.be.true;
  });
});
