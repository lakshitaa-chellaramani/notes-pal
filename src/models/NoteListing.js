import mongoose from "mongoose";

const NoteListingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    subject: { type: String, required: true },
    fileUrl: { type: String, required: true }, // Cloud storage URL for the PDF file
    uploader: { type: mongoose.Schema.Types.ObjectId, ref: "Uploader", required: true },
    views: { type: Number, default: 0 }, // Track number of times viewed
    tags: [{ type: String }], // Optional tags for searching
    createdAt: { type: Date, default: Date.now }
  }
);

export default mongoose.models.NoteListing || mongoose.model("NoteListing", NoteListingSchema);
