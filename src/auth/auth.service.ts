import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService) {}

  async acquireAuthToken(code) {
    const { data } = await firstValueFrom(
      this.httpService
        .post('https://kauth.kakao.com/oauth/token', {
          grant_type: 'authorization_code',
          client_id: 'client_id',
          redirect_uri: 'localhost:3000/auth',
          code,
        })
        .pipe(
          catchError((error) => {
            console.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );

    console.log(data);
    return data;
  }
}
