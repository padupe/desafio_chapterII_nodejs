import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const showUser = this.usersRepository.findById(user_id);

    if (!showUser) {
      throw new Error("User not found!");
    }
    return showUser;
  }
}

export { ShowUserProfileUseCase };
