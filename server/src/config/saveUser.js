import User from '../models/userModel.js'

async function saveUser(user){
    try {
        const newUser = new User(user);

        const savedUser = await newUser.save();
        console.log('User saved successfully:', savedUser);
    } catch (err) {
        console.error('Error saving user:', err);
    }
}

export default saveUser