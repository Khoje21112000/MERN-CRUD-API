const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        firstname: {
          type: String,
          required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        email: {
          type: String,
          required: [true, "please enter product name"],
         
        },
        password: {
          type: String,
          required: [true, "please enter product name"],
         
        },
        image: {
          type: String,
          required: false,
        },
      },
      {
        Timestamp: true,
      }
    );
    
    
    const User=mongoose.model("User",UserSchema);
    module.exports=User;
