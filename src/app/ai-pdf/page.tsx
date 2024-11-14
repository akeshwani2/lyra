"use client";

import { useState } from 'react';
import { Upload, MessageSquare, Loader2 } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import { motion, AnimatePresence } from 'framer-motion';

const PDFPage = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [currentPDF, setCurrentPDF] = useState<File | null>(null);
  const { user } = useUser();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type === 'application/pdf') {
      setCurrentPDF(files[0]);
      await handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0 && files[0].type === 'application/pdf') {
      setCurrentPDF(files[0]);
      await handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = async (file: File) => {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('pdf', file);
      
      // We'll implement this API endpoint next
      const response = await fetch('/api/pdf/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      // Handle successful upload
      const data = await response.json();
      // Navigate to chat interface or show chat UI
      
    } catch (error) {
      console.error('Upload error:', error);
      // Show error message to user
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          Chat with Your PDF
        </h1>

        {/* Upload Area */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`
            border-2 border-dashed rounded-lg p-12 text-center
            transition-all duration-200 ease-in-out
            ${isDragging 
              ? 'border-purple-500 bg-purple-500/10' 
              : 'border-gray-600 hover:border-purple-500/50'}
          `}
        >
          {uploading ? (
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
              <p className="text-gray-400">Uploading your PDF...</p>
            </div>
          ) : (
            <>
              <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-400 mb-2">
                Drag and drop your PDF here, or{' '}
                <label className="text-purple-500 hover:text-purple-400 cursor-pointer">
                  browse
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf"
                    onChange={handleFileSelect}
                  />
                </label>
              </p>
              <p className="text-sm text-gray-500">PDF files only, up to 10MB</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PDFPage;