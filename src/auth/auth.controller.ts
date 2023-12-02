import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('token')
  acquireAuthToken(@Body() data: { token: string }) {
    return this.authService.acquireAuthToken(data.token);
  }
}
