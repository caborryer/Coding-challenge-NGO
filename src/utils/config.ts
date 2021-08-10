require('dotenv').config()

export default {
    dbName : process.env.DB_DATABASE,
    dbUsername : process.env.DB_USERNAME,
    dbPassword : process.env.DB_PASSWORD,
    cluster : process.env.DB_CLUSTER,
    externalURL : process.env.EXTERNAL_URL,
    externalAPI : process.env.EXTERNAL_USER_INFO_API,
    AUTH_TOKEN : process.env.EXTERNAL_API_KEY
}
