import { configureRequest } from "../utils/fetch";

const GITHUB_URL = 'https://raw.githubusercontent.com/andrii-burkivskyi/data/master';

const request = configureRequest({ baseUrl: GITHUB_URL });

export const getUserProfile = () => request.get("/cv/user_profile.json");