import 'dotenv/config'
import * as joi from 'joi';


interface EnvVars {
    
    PORT: number;
    PRODUCTS_MICROSERVICE_HOST: string;
    PRODUCTS_MICROSERVICE_PORT: number;
}

const envSchema = joi.object({
    PORT: joi.number().required(),
    PRODUCTS_MICROSERVICE_HOST: joi.string().required(),
    PRODUCTS_MICROSERVICE_PORT: joi.number().required()
})
.unknown(true);


const {error, value} =  envSchema.validate(process.env)
if(error){
    throw new Error(`Config validation error: ${error.message}`)
}

const envsVars: EnvVars = value;

export const envs = {

    port: envsVars.PORT,
    productsMicroserviceHost: envsVars.PRODUCTS_MICROSERVICE_HOST,
    productsMicroservicePort: envsVars.PRODUCTS_MICROSERVICE_PORT
};