import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import NoteListing from "@/models/NoteListing";
import cloudinary from "@/lib/cloudinary";

export async function POST(req) {
  try {
    const { title, description, subject, uploader, file } = await req.json();

    if (!title || !description || !subject || !uploader || !file) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    await dbConnect();

    // Upload PDF to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(file, {
      resource_type: "raw", // Important for PDFs
      folder: "notes",
    });

    // Create NoteListing entry in MongoDB
    const note = await NoteListing.create({
      title,
      description,
      subject,
      fileUrl: uploadResponse.secure_url, // Store Cloudinary PDF URL
      uploader,
    });

    return NextResponse.json({ message: "Note uploaded successfully", note }, { status: 201 });
  } catch (error) {
    console.error("Upload Failed:", error);
    return NextResponse.json({ error: "Failed to upload note" }, { status: 500 });
  }
}
