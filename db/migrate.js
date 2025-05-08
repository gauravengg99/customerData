import { migrate } from "drizzle-orm/neon-http/migrator";
import {db} from './index.js'

const main = async() =>{
    try {
       await migrate(db , {
            migrationsFolder:'./db/migrations'
        })
        console.log('migration database success')
    } catch (error) {
        console.error('migration failed', error)
    }
}

main()