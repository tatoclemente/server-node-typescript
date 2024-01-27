import { UserModel } from "../../data/mongodb";
import { AuthDatasource, CustomError, RegisterUserDto, UserEntity } from "../../domain";




export class AuthDatasourceImpl implements AuthDatasource {

  async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    
    const { name, email, password } = registerUserDto;

    try {

      // 1. Verificar si el email ya existe

      const emailExist = await UserModel.findOne({ email });
      if ( emailExist ) {
        throw CustomError.badRequest('User already exist');
      }

      const user = await UserModel.create({
        name,
        email,
        password,
      })

      // 2. Hash de contraseña


      await user.save()
      // 3. Mapear la respuesta a nuestra entidad

      return new UserEntity(
        user.id,
        name,
        email,
        password,
        user.roles
      )
      
      
    } catch (error) {

      if (error instanceof CustomError) {
        throw error;
      }
      
      throw CustomError.internalServer();
      
    }
    
  }



}