import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
  email?: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id, email }: IRequest): User {
    if (email) {
      const userEmail = this.usersRepository.findByEmail(email);
      if (!userEmail) {
        throw new Error("User not exist!");
      }
      return userEmail;
    }
    const userID = this.usersRepository.findById(user_id);
    if (!userID) {
      throw new Error("User not exist");
    }
    return userID;
  }
}

export { ShowUserProfileUseCase };
