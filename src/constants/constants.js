const PROD_API_URL = 'https://blog.jmj2d2us5ef36.us-west-2.cs.amazonlightsail.com/';
const DEV_API_URL = '/'

export const API_URL = process.env.NODE_ENV === 'development' ? DEV_API_URL : PROD_API_URL;
