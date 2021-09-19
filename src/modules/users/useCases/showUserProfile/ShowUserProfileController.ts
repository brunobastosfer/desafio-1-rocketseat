import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id, email } = request.body;

    const user = this.showUserProfileUseCase.execute({ user_id: id, email });

    return response.status(200).json(user);
  }
}

export { ShowUserProfileController };
