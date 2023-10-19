import mongoose from 'mongoose';
const  { Schema,model } =mongoose;
const gameSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        onSale: {
            type: Boolean,
            required: true
        }
    },
        {
            timesStamps: true //date automatique
        }
);
    
export default model("Game", gameSchema);