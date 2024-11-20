import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess } from "./auth.actions";
import { exhaustMap, map } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginStart),//for filtering Actions
      exhaustMap(action => {//When a new value is emitted from the source observable, if there is an ongoing inner observable (the one returned by exhaustMap), that new emission is ignored.
        return this.authService.login(action.email, action.password).pipe(
          map(data => { //transform value
            const user=this.authService.formatUser(data);
            return loginSuccess({ user });
          })
        );
      })
    )
  );
}
