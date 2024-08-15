import { MongooseModule } from '@nestjs/mongoose';

export const MongooseConfig = MongooseModule.forRoot(process.env.MONGO_URI);








