import mongoose from "mongoose";

const ViewerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    savedNotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "NoteListing" }], // Notes saved by the viewer
    createdAt: { type: Date, default: Date.now }
  }
);

export default mongoose.models.Viewer || mongoose.model("Viewer", ViewerSchema);
