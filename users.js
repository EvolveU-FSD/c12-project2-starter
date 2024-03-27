import mongoose, { Schema } from "mongoose"

await mongoose.connect('mongodb://localhost:27017/c12App')

const UserSchema = new Schema({
    name: String,
    team: String
})
const User = mongoose.model("user", UserSchema)

export async function getAllUsers(){
    return await User.find()
}

export async function getUserById(id){
    return await User.findById(id) 
}

export async function deleteUser(id){
    await User.findByIdAndDelete(id)     
}

export async function addUser(newUserData) {
    const created = new User(newUserData)
    await created.save()
    return created
}


