const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    role: { type: string, enum: ["admin", "user"], default: "user" },
  },
  { timestamps: true }
);

//hash password before saving the user
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
