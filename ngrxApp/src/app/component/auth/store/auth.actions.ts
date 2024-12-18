import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const LOGIN_START = '[Auth Page] Login Start';
export const LOGIN_SUCCESS = '[Auth Page] Login Success';
export const LOGIN_FAIL = '[Auth Page] Login Fail';

export const loginStart = createAction(LOGIN_START, props<{ email: string; password: string }>());
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{ user: User }>());
export const loginFail = createAction(LOGIN_FAIL);
