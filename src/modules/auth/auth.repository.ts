import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";
import { User } from "../users/users.model";

export class AuthRepository {
  private collection() {
    return getDb().collection<User>("users");
  }

  async findEmail(email: string): Promise<User | null> {
    return this.collection().findOne({ email });
  }

  async create(user: User): Promise<User> {
    const result = await this.collection().insertOne(
      user
    );

    return {
      _id: result.insertedId,
      ...user,
    };
  }

  async findAll() {
    return this.collection().find().toArray();
  }

  async findById(id: string) {
    return this.collection().findOne({
      _id: new ObjectId(id),
    });
  }

  async update(id: string, data: Partial<User>) {
    const result = await this.collection().updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: data,
      }
    );

    return result.modifiedCount > 0;
  }

  async delete(id: string) {
    const result = await this.collection().deleteOne({
      _id: new ObjectId(id),
    });

    return result.deletedCount > 0;
  }
}