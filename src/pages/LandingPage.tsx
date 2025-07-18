import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { 
  Users, 
  Calendar,
  MessageSquare, 
  Briefcase, 
  GraduationCap,
  Network,
  TrendingUp,
  Award 
} from 'lucide-react';

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 py-20 text-white">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Campus Background"
              className="h-full w-full object-cover"
            />
          </div>
          
          <div className="container relative mx-auto px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Connect With Your <span className="text-accent-400">Alumni Network</span>
            </h1>
            
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-100 sm:text-xl">
              Stay connected with fellow alumni, explore career opportunities, and participate in exclusive events through our comprehensive alumni platform.
            </p>
            
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button 
                size="lg"
                className="bg-white text-primary-800 hover:bg-gray-100"
                onClick={() => window.location.href = '/signup'}
              >
                Join Now
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = '/login'}
              >
                Sign In
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Users size={24} />
                </div>
                <p className="mt-2 text-xl font-bold">10,000+</p>
                <p className="text-sm text-gray-200">Alumni</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Briefcase size={24} />
                </div>
                <p className="mt-2 text-xl font-bold">500+</p>
                <p className="text-sm text-gray-200">Companies</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Calendar size={24} />
                </div>
                <p className="mt-2 text-xl font-bold">200+</p>
                <p className="text-sm text-gray-200">Annual Events</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Network size={24} />
                </div>
                <p className="mt-2 text-xl font-bold">50+</p>
                <p className="text-sm text-gray-200">Countries</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Connect, Engage, and Grow Together
              </h2>
              
              <p className="mt-4 text-lg text-gray-600">
                Our platform provides all the tools you need to stay connected with your alma mater and fellow alumni around the world.
              </p>
            </div>
            
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex rounded-full bg-primary-100 p-3 text-primary-600">
                  <Users size={24} />
                </div>
                
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Alumni Directory
                </h3>
                
                <p className="text-gray-600">
                  Search and connect with alumni based on graduation year, field of study, location, or profession.
                </p>
              </div>
              
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex rounded-full bg-secondary-100 p-3 text-secondary-600">
                  <MessageSquare size={24} />
                </div>
                
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Community Feed
                </h3>
                
                <p className="text-gray-600">
                  Share updates, post job opportunities, and stay informed with the latest news from your alumni community.
                </p>
              </div>
              
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex rounded-full bg-accent-100 p-3 text-accent-600">
                  <Calendar size={24} />
                </div>
                
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Events & Meetups
                </h3>
                
                <p className="text-gray-600">
                  Discover and attend alumni events, reunions, and networking opportunities in your area or virtually.
                </p>
              </div>
              
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex rounded-full bg-green-100 p-3 text-green-600">
                  <Briefcase size={24} />
                </div>
                
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Career Opportunities
                </h3>
                
                <p className="text-gray-600">
                  Access exclusive job postings, mentorship programs, and career resources from fellow alumni.
                </p>
              </div>
              
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex rounded-full bg-blue-100 p-3 text-blue-600">
                  <TrendingUp size={24} />
                </div>
                
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Professional Growth
                </h3>
                
                <p className="text-gray-600">
                  Enhance your skills through workshops, webinars, and learning resources provided by successful alumni.
                </p>
              </div>
              
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex rounded-full bg-purple-100 p-3 text-purple-600">
                  <Award size={24} />
                </div>
                
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Achievement Showcase
                </h3>
                
                <p className="text-gray-600">
                  Highlight your accomplishments and celebrate the success stories of fellow alumni.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Hear From Our Alumni
              </h2>
              
              <p className="mt-4 text-lg text-gray-600">
                Discover how AlumniConnect has helped alumni stay connected and advance their careers.
              </p>
            </div>
            
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="#F59E0B" 
                      className="h-5 w-5"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="mb-4 text-gray-700">
                  "AlumniConnect has been a game-changer for me. I found my current job through a connection I made on the platform, and I've attended several networking events that have expanded my professional circle."
                </blockquote>
                
                <div className="flex items-center">
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150" 
                    alt="Alumni" 
                    className="mr-4 h-12 w-12 rounded-full object-cover"
                  />
                  
                  <div>
                    <p className="font-semibold text-gray-900">Michael Chen</p>
                    <p className="text-sm text-gray-600">Class of 2018, Software Engineer</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="#F59E0B" 
                      className="h-5 w-5"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="mb-4 text-gray-700">
                  "I've reconnected with so many of my classmates through AlumniConnect. The platform makes it easy to find old friends and stay updated on what everyone is doing. It's like having a class reunion all year round!"
                </blockquote>
                
                <div className="flex items-center">
                  <img 
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150" 
                    alt="Alumni" 
                    className="mr-4 h-12 w-12 rounded-full object-cover"
                  />
                  
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Class of 2016, Marketing Director</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="#F59E0B" 
                      className="h-5 w-5"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="mb-4 text-gray-700">
                  "As someone who moved abroad after graduation, AlumniConnect has been my lifeline to my alma mater. I can participate in virtual events, connect with alumni in my new country, and still feel part of the community."
                </blockquote>
                
                <div className="flex items-center">
                  <img 
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150" 
                    alt="Alumni" 
                    className="mr-4 h-12 w-12 rounded-full object-cover"
                  />
                  
                  <div>
                    <p className="font-semibold text-gray-900">James Rodriguez</p>
                    <p className="text-sm text-gray-600">Class of 2019, Financial Analyst</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-secondary-700 to-secondary-900 py-16 text-white sm:py-24">
          <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Ready to Connect with Your Alumni Network?
            </h2>
            
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-100">
              Join thousands of alumni who have already discovered the benefits of our platform. Sign up today and start building valuable connections!
            </p>
            
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button 
                size="lg"
                className="bg-white text-secondary-800 hover:bg-gray-100"
                onClick={() => window.location.href = '/signup'}
              >
                Join Now
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = '/login'}
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}