import { MongooseModule } from '@nestjs/mongoose';

export const MongooseConfig = MongooseModule.forRoot(
  'mongodb+srv://tristanlgb:<hola123>@pokemons.gobj7y1.mongodb.net/Pokemons?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);






