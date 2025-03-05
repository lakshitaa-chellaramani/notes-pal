"use client"

import { useState, useRef } from "react"
import { 
  UploadIcon, 
  FileTextIcon, 
  TagIcon, 
  BookIcon, 
  FileIcon, 
  SparklesIcon 
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function NotesUploadPage() {
  // State for form fields
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState("")
  const [subject, setSubject] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")
  const [useProfileDetails, setUseProfileDetails] = useState(true)

  // File input ref
  const fileInputRef = useRef(null)

  // Predefined subjects and tags
  const subjects = [
    "Mathematics", 
    "Computer Science", 
    "Physics", 
    "Chemistry", 
    "Biology"
  ]

  const predefinedTags = [
    "exam-notes", 
    "reference", 
    "summary", 
    "detailed-explanation"
  ]

  // File upload handler
  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0]
    if (uploadedFile) {
      setFile(uploadedFile)
      setFileName(uploadedFile.name)
    }
  }

  // Tag management
  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag])
      setNewTag("")
    }
  }

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  // AI Summarizer placeholder
  const handleAISummarize = () => {
    // TODO: Implement AI summarization logic
    console.log("Generating AI summary...")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center">
            <UploadIcon className="mr-3 text-primary" />
            Upload Notes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* File Upload Section */}
          <div>
            <Label className="flex items-center space-x-2 mb-2">
              <FileTextIcon className="w-5 h-5" />
              <span>Upload File</span>
            </Label>
            <div className="flex space-x-2">
              <Input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx,.txt"
                className="hidden"
              />
              <Input 
                placeholder="Choose file" 
                value={fileName}
                readOnly 
                className="flex-grow"
              />
              <Button 
                variant="secondary" 
                onClick={() => fileInputRef.current.click()}
              >
                Browse
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Supported formats: PDF, DOC, TXT
            </p>
          </div>

          {/* Profile Details Toggle */}
          <div className="flex items-center space-x-2">
            <Switch 
              id="profile-details"
              checked={useProfileDetails}
              onCheckedChange={setUseProfileDetails}
            />
            <Label htmlFor="profile-details">
              Use Profile Details
            </Label>
          </div>

          {/* Subject and Description */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label className="flex items-center space-x-2 mb-2">
                <BookIcon className="w-5 h-5" />
                <span>Subject</span>
              </Label>
              <Select 
                value={subject} 
                onValueChange={setSubject}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map(sub => (
                    <SelectItem key={sub} value={sub}>
                      {sub}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="flex items-center space-x-2 mb-2">
                <SparklesIcon className="w-5 h-5" />
                <span>Description</span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleAISummarize}
                  className="ml-2"
                >
                  AI Summarize
                </Button>
              </Label>
              <Textarea 
                placeholder="Notes description..." 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
              />
            </div>
          </div>

          {/* Tags Section */}
          <div>
            <Label className="flex items-center space-x-2 mb-2">
              <TagIcon className="w-5 h-5" />
              <span>Tags</span>
            </Label>
            <div className="flex space-x-2 mb-2">
              <Input 
                placeholder="Add a tag" 
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                className="flex-grow"
              />
              <Button 
                variant="secondary" 
                onClick={handleAddTag}
              >
                Add Tag
              </Button>
            </div>

            {/* Suggested Tags */}
            <div className="mb-2">
              <p className="text-sm text-muted-foreground mb-2">Suggested Tags:</p>
              <div className="flex flex-wrap gap-2">
                {predefinedTags
                  .filter(tag => !tags.includes(tag))
                  .map(tag => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-accent"
                      onClick={() => setTags([...tags, tag])}
                    >
                      {tag}
                    </Badge>
                ))}
              </div>
            </div>

            {/* Current Tags */}
            {tags.length > 0 && (
              <div>
                <p className="text-sm text-muted-foreground mb-2">Current Tags:</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="flex items-center"
                    >
                      {tag}
                      <FileIcon 
                        className="ml-2 w-4 h-4 cursor-pointer" 
                        onClick={() => handleRemoveTag(tag)}
                      />
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button 
            className="flex items-center space-x-2"
          >
            <UploadIcon className="w-5 h-5" />
            <span>Upload Notes</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}