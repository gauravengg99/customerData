import { db } from "../db/index.js";
import { customerTable } from "../db/schema.js";
export const createCustomer =async(req,res)=>{
 
    const {firstName , 
        lastName,
        companyName,
        address,email,
        phoneNumber, 
        customerRequirment
    } = req.body
    
 try {
    
     const customer = await db.insert(customerTable).values({
         firstName,
    lastName,
    companyName,
    address,
    email,
    phoneNumber,
    customerRequirment
}).returning({
    id:customerTable.id,
     firstName:customerTable.firstName,
     lastName:customerTable.lastName,
     companyName:customerTable.companyName,
     email:customerTable.email,
     phoneNumber:customerTable.phoneNumber,
     customerRequirment:customerTable.customerRequirment,
     address:customerTable.address
    })
    res.status(201).json({data:customer})
} catch (error) {
    res.status(500).json({message:"internal Server Error",error})  
}
}


