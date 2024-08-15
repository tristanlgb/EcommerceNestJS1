import { PassportModule } from '@nestjs/passport';

export const PassportConfig = PassportModule.register({ defaultStrategy: 'jwt' });
