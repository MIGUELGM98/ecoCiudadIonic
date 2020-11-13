import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    // private google: GooglePlus
  ) {}

  // loginGoogle(){
  //   return this.google.login({}).then(
  //     res => {
  //       const user_data = res;

  //       return this.afsAuth.signInWithCredential(
  //         auth.auth.GoogleAuthProvider.credential(null, user_data.accessToken)
  //       );
  //     }
  //   )
  // }
}