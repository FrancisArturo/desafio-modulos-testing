import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String, 
    age: Number,
    password: String,
    phone: Number,
    carts: {
        cart: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "cart",
        }
    },
    role: {type: String, default: "user"},
});

userSchema.pre("findById", function () {

    this.populate("carts.cart");
});

const userModel = mongoose.model("users", userSchema);

export default userModel;