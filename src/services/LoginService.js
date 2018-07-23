import { Network } from '../utils';

export const login = async (credentials) => Network.post('login', credentials)
