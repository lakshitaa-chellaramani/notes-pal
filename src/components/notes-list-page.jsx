"use client"

import { useState } from "react"
import { 
  PlusIcon, 
  SearchIcon, 
  FilterIcon, 
  TagIcon, 
  CalendarIcon 
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data - replace with actual data fetching logic
const mockNotes = [
  {
    id: "1",
    title: "Project Brainstorming",
    content: "Initial ideas for the upcoming product launch...",
    tags: ["work", "project"],
    createdAt: "2024-03-01",
    lastUpdated: "2024-03-05"
  },
  {
    id: "2",
    title: "Personal Goals 2024",
    content: "Outline of personal and professional objectives...",
    tags: ["personal", "goals"],
    createdAt: "2024-02-15",
    lastUpdated: "2024-03-02"
  },
  {
    id: "3",
    title: "Travel Bucket List",
    content: "Destinations I want to visit in the next few years...",
    tags: ["travel", "personal"],
    createdAt: "2024-01-20",
    lastUpdated: "2024-03-01"
  },
]

export default function NotesListPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState(null)
  const [sortBy, setSortBy] = useState("lastUpdated")

  // Filtering and sorting logic
  const filteredNotes = mockNotes
    .filter(note => 
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedTag === null || note.tags.includes(selectedTag))
    )
    .sort((a, b) => {
      if (sortBy === "createdAt") {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      }
      return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
    })

  // Get unique tags
  const allTags = [...new Set(mockNotes.flatMap(note => note.tags))]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-foreground">My Notes</h1>
        <Button className="flex items-center space-x-2">
          <PlusIcon className="w-5 h-5" />
          <span>Create Note</span>
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="mb-8 grid md:grid-cols-3 gap-4">
        {/* Search Input */}
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search notes..." 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Tag Filter */}
        <Select 
          value={selectedTag} 
          onValueChange={setSelectedTag}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Filter by Tag">
              {selectedTag ? (
                <div className="flex items-center">
                  <TagIcon className="w-4 h-4 mr-2" />
                  {selectedTag}
                </div>
              ) : (
                "All Tags"
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={null}>All Tags</SelectItem>
            {allTags.map(tag => (
              <SelectItem key={tag} value={tag}>
                {tag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Sort By */}
        <Select 
          value={sortBy} 
          onValueChange={setSortBy}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Sort By">
              <div className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-2" />
                {sortBy === "lastUpdated" ? "Last Updated" : "Created Date"}
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="lastUpdated">Last Updated</SelectItem>
            <SelectItem value="createdAt">Created Date</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Notes Grid */}
      {filteredNotes.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-xl">No notes found</p>
          <p className="mt-2">Try adjusting your search or filter</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map(note => (
            <Card key={note.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="line-clamp-1">{note.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3 mb-4">
                  {note.content}
                </p>
                <div className="flex flex-wrap gap-2">
                  {note.tags.map(tag => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="cursor-pointer hover:bg-secondary/80"
                      onClick={() => setSelectedTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between text-sm text-muted-foreground">
                <span>Created: {note.createdAt}</span>
                <span>Updated: {note.lastUpdated}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {/* Pagination (placeholder) */}
      <div className="mt-8 flex justify-center">
        <div className="bg-muted rounded-lg p-2 inline-flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            Previous
          </Button>
          <span className="text-sm">Page 1 of 5</span>
          <Button variant="ghost" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}