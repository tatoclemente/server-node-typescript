
import { UserEntity } from '../entities/user.entity';
import { RegisterUserDto } from '../dtos/auth/register-user.dto';


export abstract class AuthRepository {
  
  //  Todo:
  // abstract login ()

  abstract register( registerUserDto: RegisterUserDto ):Promise<UserEntity>
  

}


