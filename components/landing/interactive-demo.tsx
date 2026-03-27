"use client";

import React, { useState } from 'react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, Search, FileText, BookOpen, SplitSquareVertical } from 'lucide-react';
import { ParticlesBackground } from '@/components/particles-background';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function InteractiveDemoSection() {
  const [activeDemoTab, setActiveDemoTab] = useState('pdf');
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <section id="demo" className="py-20 md:py-28 relative overflow-hidden bg-navy-50/50 dark:bg-navy-900/30">
      <ParticlesBackground quantity={15} />
      
      <Container>
        <SectionHeading
          title="Try LOOKUP In Action"
          subtitle="Experience the power of AI document intelligence with this interactive demo."
          centered
        />
        
        <div className="max-w-5xl mx-auto mt-8">
          <div className="glass-card overflow-hidden">
            <Tabs 
              defaultValue="pdf" 
              value={activeDemoTab}
              onValueChange={(value) => {
                setActiveDemoTab(value);
                setShowResults(false);
              }}
            >
              <div className="border-b border-border p-4">
                <TabsList className="grid grid-cols-2 w-full md:w-[400px] bg-muted">
                  <TabsTrigger value="pdf" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" /> PDF Analysis
                  </TabsTrigger>
                  <TabsTrigger value="book" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" /> Book Search
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <div className="p-6">
                <TabsContent value="pdf" className="mt-0">
                  {!showResults ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="border-2 border-dashed border-muted rounded-xl p-10 text-center"
                    >
                      <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-xl font-medium mb-2">Upload your PDF</h3>
                      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                        Drag and drop your file here, or click to browse
                      </p>
                      <Button onClick={() => setShowResults(true)}>
                        Select Demo PDF
                      </Button>
                    </motion.div>
                  ) : (
                    <PDFAnalysisResult />
                  )}
                </TabsContent>
                
                <TabsContent value="book" className="mt-0">
                  {!showResults ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                        <div className="relative mb-8">
                          <Input
                            type="text"
                            placeholder="Search for a book title or author..."
                            className="pl-10 py-6 text-lg"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                        </div>
                        <div className="text-center">
                          <Button type="submit" size="lg">
                            Search Books
                          </Button>
                        </div>
                      </form>
                    </motion.div>
                  ) : (
                    <BookSearchResult />
                  )}
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PDFAnalysisResult() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <FileText className="h-5 w-5 text-primary" />
          <h3 className="font-medium">Annual Report 2025.pdf</h3>
        </div>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <SplitSquareVertical className="h-4 w-4 mr-1" /> Split View
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-lg bg-background/50">
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Original Document</h4>
          <div className="space-y-3">
            <div className="h-6 bg-muted rounded w-full"></div>
            <div className="h-6 bg-muted rounded w-5/6"></div>
            <div className="h-6 bg-muted rounded w-full"></div>
            <div className="h-6 bg-muted rounded w-4/5"></div>
            <div className="h-6 bg-muted rounded w-full"></div>
            <div className="h-6 bg-muted rounded w-3/4"></div>
            <div className="h-6 bg-muted rounded w-5/6"></div>
            <div className="h-6 bg-muted rounded w-full"></div>
          </div>
        </div>
        
        <div className="p-4 border rounded-lg bg-background/50">
          <h4 className="text-sm font-medium text-muted-foreground mb-3">AI Summary</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-medium text-sm text-primary mb-1">Key Highlights</h5>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Revenue increased by 18% to $5.8 billion</li>
                <li>Expanded to 4 new international markets</li>
                <li>Research & Development investment up 24%</li>
                <li>Sustainability targets exceeded by 12%</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium text-sm text-primary mb-1">Executive Summary</h5>
              <p className="text-sm text-muted-foreground">
                FY2025 marked significant growth with successful product launches
                and market expansion. The company focused on sustainable practices
                while maintaining strong financial performance...
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 border rounded-lg">
        <h4 className="font-medium mb-3">Ask a question about this document</h4>
        <div className="flex space-x-3">
          <Input placeholder="e.g., What were the key financial metrics?" className="flex-1" />
          <Button>Ask</Button>
        </div>
      </div>
    </motion.div>
  );
}

function BookSearchResult() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Search Results</h3>
        <p className="text-muted-foreground">Showing AI analysis for the top matching book</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="rounded-md overflow-hidden aspect-[2/3] bg-muted mb-3">
            <img 
              src="https://images.pexels.com/photos/3747139/pexels-photo-3747139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Book cover" 
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="font-medium">The Future of AI</h4>
          <p className="text-sm text-muted-foreground">by Dr. Sarah Johnson</p>
        </div>
        
        <div className="md:col-span-2 space-y-5">
          <div>
            <h4 className="font-medium text-primary mb-2">Quick Summary</h4>
            <p className="text-muted-foreground text-sm">
              This book explores how artificial intelligence is reshaping industries and society.
              It examines both the technical advancements and ethical considerations of modern AI,
              offering insights into how these technologies will transform our future.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-primary mb-2">Key Concepts</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-background rounded-md">
                <h5 className="text-sm font-medium">Machine Learning Evolution</h5>
                <p className="text-xs text-muted-foreground">Pages 12-34</p>
              </div>
              <div className="p-3 bg-background rounded-md">
                <h5 className="text-sm font-medium">AI Ethics Framework</h5>
                <p className="text-xs text-muted-foreground">Pages 58-79</p>
              </div>
              <div className="p-3 bg-background rounded-md">
                <h5 className="text-sm font-medium">Industry Applications</h5>
                <p className="text-xs text-muted-foreground">Pages 102-140</p>
              </div>
              <div className="p-3 bg-background rounded-md">
                <h5 className="text-sm font-medium">Future Predictions</h5>
                <p className="text-xs text-muted-foreground">Pages 205-230</p>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <Button>Generate Full Summary</Button>
            <Button variant="outline">Ask Questions</Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}