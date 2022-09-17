import axios from 'axios';

import type { UserModel } from '../models/UserModel';

export default async function fetchUserData(username: string) {
  const response = await axios.get<UserModel>(
    `https://api.github.com/users/${username}`
  );
  return response.data;
}
