import dotenv from 'dotenv';

import dns from "dns";
dns.setDefaultResultOrder("ipv4first");

dotenv.config();

export const env = {
    port: Number(process.env.PORT) || 3000,
    mongoUri: process.env.MONGO_URI || 'mongodb://derianguerrero19_db_user:Tobi2017@ac-hq3i9zo-shard-00-00.cxujark.mongodb.net:27017,ac-hq3i9zo-shard-00-01.cxujark.mongodb.net:27017,ac-hq3i9zo-shard-00-02.cxujark.mongodb.net:27017/?ssl=true&replicaSet=atlas-wqv8v3-shard-0&authSource=admin&appName=Cluster0',
    mongoDbName: process.env.MONGO_DB_NAME || 'test',
    jwtSecret: process.env.JWT_SECRET || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30',
    jwtExpiration:  process.env.JWT_EXPIRATION || '10h'
}