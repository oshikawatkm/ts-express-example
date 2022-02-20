import { Model, model, Schema } from 'mongoose';
import { IAuthorModel } from '../interfaces/author.interface';

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  bio: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  website: {
    type: String,
    maxlength: 100
  }
})

export const AuthorModel: Model<IAuthorModel> = model<IAuthorModel>('Author', authorSchema);