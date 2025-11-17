import { neon } from '@neondatabase/serverless';
import 'dotenv/config';

const sql = neon(process.env.DATABASE_URL);

async function testConnection() {
    try {
        const result = await sql`SELECT NOW()`;
        console.log('Database connected successfully!', result);
    } catch (error) {
        console.error('Database connection failed:', error.message);
    }
}

testConnection();