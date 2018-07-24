import * as types from './types';
import { LoginService } from '../../services';

export const login = credentials => ({ type: types.LOGIN, payload: LoginService.login(credentials) }); // eslint-disable-line
