import { UsersRepository } from "./users.repository";

export class UsersService {
  private repository = new UsersRepository();

  async register(data: any) {
    const exists = await this.repository.findByEmail(
      data.email
    );

    if (exists) {
      throw new Error(
        "El usuario ya existe"
      );
    }

    data.role = "user";

    return this.repository.create(data);
  }

  async findAllUsers() {
    return this.repository.findAllUsers();
  }

  async findById(id: string) {
    return this.repository.findById(id);
  }

  async update(id: string, data: any) {
    return this.repository.update(id, data);
  }

  async delete(id: string) {
    return this.repository.delete(id);
  }
}