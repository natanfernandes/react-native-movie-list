import axios from 'axios';
const API_URL = 'https://api.trakt.tv';
const API_CLIENT_SECRET = '86af8052a211c039cf1539c346536b564e50ab0aceedc0c83bd61cca06e09622';
const API_CLIENT_ID = 'e9d4ed2f56acd610af24426c08f1ae195b05dd8f0e5bb19fcf6509246dd906cb';

const traktApi = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'trakt-api-key': API_CLIENT_ID,
        'trakt-api-version':2
    }
})

export default traktApi;