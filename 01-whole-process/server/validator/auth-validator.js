const {z} = require('zod');

// creating an object schema

const schema = z.object({
    username: z
        .string({required_error:"Name is required"})
        .min(3, {message:"Name must be atlist 3 chars."})
        .max(20,{message:"Name must be less than 20 chars."}),
    email: z
        .string({required_error:"Email is required"})
        .email({message:"Invalid email affress"})
        .max(30,{message:"Name must be less than 30 chars."}),
    phone: z
        .number({required_error: "number requred"})
        .min(10, {message:"Phone no must be at least of 10 characters"}),
    password: z 
        .string({required_error:"phone no is required"}) 
        .min(8, {message:"password must be at least of 8 characters"})
        .max(30,{message:"Name must be less than 30 chars."}),

});


module.exports = {schema};
