import mongoose from 'mongoose';
const  { Schema,model } =mongoose;
const games = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
       
    },
);
    
export default model("Game", games);