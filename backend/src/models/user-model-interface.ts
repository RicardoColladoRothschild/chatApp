import mongoose, { Document, Schema, model } from 'mongoose';
export interface IUser extends Document{
    fullname: string;
    email: string;
    password: string;
    bio?: string;
    profilePic?:string;
    nativeLanguage?: string;
    location?: string;
    isOnboarded: boolean;
    friends: Types.ObjectId[]
}

