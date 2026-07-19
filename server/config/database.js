import pg from 'pg'

const config ={
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: {
        rejectUnauthorized: false
    }

}

export const pool = new pg.Pool(config)



pool.connect((err, _client, relase)=>{
    if (err){
        console.error('Database connection failed:', err.message)
    }else{
        console.log('Database connected successfully')
        relase()
    }
})