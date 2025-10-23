import { Schema, model, Document } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
  ip?: string;
}

const ContactSchema = new Schema<IContact>({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  email: { type: String, required: true, trim: true, lowercase: true },
  message: { type: String, required: true, trim: true, maxlength: 5000 },
  ip: { type: String },
}, { timestamps: { createdAt: 'createdAt' } });

export default model<IContact>('Contact', ContactSchema);