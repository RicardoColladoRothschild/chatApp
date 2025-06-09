import mongoose, { Document, Schema, model } from 'mongoose';
import {IUser} from './user-model-interface'
import bcrypt from 'bcryptjs';
const userSchema = new Schema<IUser>({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    bio: {
        type: String,
        default: ""
    },
    profilePic:{
        type:String,
        default:""
    },
    nativeLanguage: {
        type: String,
        default:""
    },
    location:{
        type: String,
        default:""
    },
    isOnboarded: {
        type: Boolean,
        default:false,
    },
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ]
},{timestamps:true});

const User = mongoose.models.User || model<IUser>('User', userSchema);


userSchema.pre("save", async function(next){
    try{
         if (!this.isModified("password")) return next();
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    
        next();
    }catch(error){
        console.error("[X] - Error occurred while encrypting user password: ", error);
        throw new Error('Unable to encrypt password.');
    }
})

export default User;