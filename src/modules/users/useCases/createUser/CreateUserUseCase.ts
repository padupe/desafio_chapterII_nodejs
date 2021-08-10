import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const verifyUser = this.usersRepository.findByEmail(email);
    if (verifyUser) {
      throw new Error("User already Exists!");
    }

    this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
