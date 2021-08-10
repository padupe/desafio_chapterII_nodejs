import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userADM = this.usersRepository.findById(user_id);

    if (!userADM) {
      throw new Error("User not found!");
    }

    userADM.admin = true;
    userADM.updated_at = new Date();

    return userADM;
  }
}

export { TurnUserAdminUseCase };
