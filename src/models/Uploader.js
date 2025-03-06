import mongoose from "mongoose";

const UploaderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    notesUploaded: [{ type: mongoose.Schema.Types.ObjectId, ref: "NoteListing" }], // Notes uploaded by this user
    createdAt: { type: Date, default: Date.now }
  }
);

export default mongoose.models.Uploader || mongoose.model("Uploader", UploaderSchema);
