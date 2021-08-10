import config from "../src/utils/config";
const {dbUsername, cluster, dbPassword, dbName} = config;
export const mongodb = {
    connectionString: `mongodb+srv://${dbUsername}:${dbPassword}@${cluster}/${dbName}?retryWrites=true&w=majority`
};