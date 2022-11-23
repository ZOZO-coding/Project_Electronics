const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Username required'],
      unique: true,
    },
    email: {
      type: String,
      trim: true,
      require: [true, 'E-Mail required'],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      trim: true,
      minLength: [5, 'Password length of at least 6 characters required'],
      required: [true, 'Password required'],
      select: false,
    },
  },
  {
    timestamps: true,
    tooObject: {virtuals: true},
    toJSON: { virtuals: true },
  }
)

// Create a document middleware to encrypt the password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    // Call the next middleware in the stack
    next();

    // Return early
    return;
  }

  // Encrypt password
  this.password = await bcrypt.hash(this.password, 12);

  // Call the next middleware in the stack
  next();
});

// Create an instance method to compare password using bcryptjs
userSchema.methods.comparePassword = async function (
  plainText,
  hashedPassword
) {
  return await bcrypt.compare(plainText, hashedPassword);
};

// Use mongoose and schema to create user model
const User = mongoose.model("User", userSchema);

// EXPORT MODEL TO BE USED IN OTHER PARTS OF OUR APPLICATION
module.exports = User;
