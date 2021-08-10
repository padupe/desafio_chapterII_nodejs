import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Preciso verificar se o id existe, por isso usamos o método 'findById'
    const isAdmin = this.usersRepository.findById(user_id);

    // Se o id for INVÁLIDO, 'cai' no if
    if (!isAdmin) {
      throw new Error("User not found!");
      // Se o usuário não tiver permissão de Administrador 'cai' no if
    } else if (!isAdmin.admin) {
      throw new Error("You do not have Administrator privileges.");
    }

    // Após as duas validações, o usuário irá conseguir verificar a lista de usuários
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
