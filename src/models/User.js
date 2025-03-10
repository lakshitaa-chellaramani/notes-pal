import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["viewer", "uploader"], default: "viewer" }, // Toggle between viewer and uploader
    notesUploaded: [{ type: mongoose.Schema.Types.ObjectId, ref: "NoteListing" }], // Only for uploaders
    savedNotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "NoteListing" }], // Only for viewers
    createdAt: { type: Date, default: Date.now }
  }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);

