import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";

export class UsersRepository {
  private collection() {
    return getDb().collection("users");
  }

  async create(data: any) {
    const result = await this.collection().insertOne(
      data
    );

    return {
      _id: result.insertedId,
      ...data,
    };
  }

  async findAllUsers() {
    return this.collection().find().toArray();
  }

  async findByEmail(email: string) {
    return this.collection().findOne({ email });
  }

  async findById(id: string) {
    return this.collection().findOne({
      _id: new ObjectId(id),
    });
  }

  async update(id: string, data: any) {
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