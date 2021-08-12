import log4js from "log4js";
import axios from "axios";
import { DataError } from "../utils/errors/length.error";
import config from "../utils/config";
const{externalURL} = config;


const logger = log4js.getLogger();

export async function syncWithExternalSystem() {
    if (!externalURL) {
        throw new DataError('Dont get any data');
    }
    let URL = externalURL;
    return axios.get(URL)
        .then(response => {
            return response.data
        })
        .catch(error => {
            logger.error(`[syncWithExternalSystem] ${error}`);
            return null
        })
}