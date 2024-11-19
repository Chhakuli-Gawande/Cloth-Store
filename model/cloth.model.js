import mongoose from "mongoose";

const clothSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});
const Cloth = mongoose.model("Cloth", clothSchema);

export default Cloth;