import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const getUser = this.usersRepository.findById(user_id);

    if (!getUser) {
      throw new Error("User not exist!");
    }
    this.usersRepository.turnAdmin(getUser);
    return getUser;
  }
}

export { TurnUserAdminUseCase };
