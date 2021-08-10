import log4js from "log4js";
import axios from "axios";
import { LengthError } from "../utils/errors/length.error";
import config from "../utils/config";
const{externalURL} = config;


const logger = log4js.getLogger();


export async function syncWithExternalSystem() {
    if (!externalURL) {
        throw new LengthError('El campo no cumple con el numero de caractt');
    }

    let URL = externalURL;
    logger.debug(`[syncWithExternalSystem] externalAPI URL ${URL}`);
    return axios.get(URL)
        .then(response => {
            logger.debug(`[syncWithExternalSystem] RESPONSE ${JSON.stringify(response.data)}`);
            return response.data
        })
        .catch(error => {
            logger.error(`[syncWithExternalSystem] ${error}`);
            return null
        })
    logger.debug(`[syncWithExternalSystem] FINISHED`);
}