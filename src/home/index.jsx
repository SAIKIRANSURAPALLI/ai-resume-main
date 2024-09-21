import React from "react";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";
import { AtomIcon, Edit, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Moved to a separate file: components/Header.tsx
import Header from "../components/custom/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <section className="text-center">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
            <Badge className="inline-flex items-center px-3 py-1 text-base font-semibold text-primary-foreground">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              New
            </Badge>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Build Your Resume <span className="text-primary">With AI</span>
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48">
              Effortlessly Craft a Standout Resume with Our AI-Powered Builder
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link to="/auth/sign-in">
                <Button
                  size="lg"
                  className="inline-flex justify-center items-center"
                >
                  Get Started
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-8 bg-white rounded-lg shadow-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-2">
              How it Works?
            </h2>
            <p className="text-md text-gray-500 text-center mb-8">
              Create your resume in just 3 simple easy steps
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <AtomIcon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-center">
                    Write prompt for your resume
                  </h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Edit className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-center">
                    Edit Your resume
                  </h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Share2 className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-center">
                    Share & Start Applying
                  </h3>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Link to="/auth/sign-in">
                <Button
                  size="lg"
                  className="inline-flex items-center justify-center"
                >
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
