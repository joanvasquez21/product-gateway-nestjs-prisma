import 'dotenv/config'
import * as joi from 'joi';
import { env } from 'process';

interface EnvVars {
    DATABASE_URL: string;
    PORT: number;
}

const envSchema = joi.object({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required(),
})
.unknown(true);


const {error, value} =  envSchema.validate(process.env)
if(error){
    throw new Error(`Config validation error: ${error.message}`)
}

const envsVars: EnvVars = value;

export const envs = {

    port: envsVars.PORT,
    databaseUrl: envsVars.DATABASE_URL
}
