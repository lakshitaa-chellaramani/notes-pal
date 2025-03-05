"use client"

import { useState } from "react"
import { 
  SaveIcon, 
  TagIcon, 
  PlusIcon, 
  XIcon 
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function CreateNotePage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const predefinedTags = ["work", "personal", "ideas", "project"]

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag])
      setNewTag("")
    }
  }

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  const handleSaveNote = () => {
    // Placeholder for save note logic
    console.log("Saving note:", { title, content, tags })
    // TODO: Implement actual save functionality
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Create New Note</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Title Input */}
          <div>
            <Input 
              placeholder="Note Title" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-xl font-semibold"
            />
          </div>

          {/* Content Textarea */}
          <div>
            <Textarea 
              placeholder="Write your note here..." 
              rows={10}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          {/* Tags Section */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Input 
                placeholder="Add a tag" 
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                className="w-full"
              />
              <Button 
                variant="secondary" 
                size="icon" 
                onClick={handleAddTag}
              >
                <PlusIcon className="w-5 h-5" />
              </Button>
            </div>

            {/* Suggested Tags */}
            <div className="mt-2">
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
              <div className="mt-2">
                <p className="text-sm text-muted-foreground mb-2">Current Tags:</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="flex items-center"
                    >
                      {tag}
                      <XIcon 
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
            onClick={handleSaveNote}
            className="flex items-center space-x-2"
          >
            <SaveIcon className="w-5 h-5" />
            <span>Save Note</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}