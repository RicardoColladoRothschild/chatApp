import mongoose, { Document, Schema, model } from 'mongoose';
import {IUser} from './user-model-interface'

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


export default User;