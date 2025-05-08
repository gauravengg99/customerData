
import {integer,timestamp,pgTable,varchar} from 'drizzle-orm/pg-core'

export const customerTable = pgTable("customerdata",{
    id:integer().primaryKey().generatedAlwaysAsIdentity(),
    firstName:varchar('firstName'),
    lastName:varchar("lastName"),
    companyName:varchar("companyName"),
    address:varchar("address"),
    phoneNumber:varchar("phoneNumber"),
    customerRequirment:varchar("customerRequirment"),
    email:varchar("email"),
    createdAt: timestamp().defaultNow().notNull(),
    updatedAt:timestamp()    
},table=>{
    return{
        firstName:table.firstName,
        lastName:table.lastName,
        companyName:table.companyName,
        address:table.address,
        phoneNumber:table.phoneNumber,
        email:table.email,
        customerRequirment:table.customerRequirment,
        createdAt:table.createdAt        
    }    
})
