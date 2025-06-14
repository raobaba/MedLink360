import React, { useState } from 'react';
import { 
  Heart, Shield, Clock, Users, Calendar, Stethoscope, Activity, Award,
  Menu, X, Phone, Mail, MapPin, Star, ChevronRight, Play,
  UserCheck, FileText, CreditCard, MessageSquare, Bell, Settings
} from 'lucide-react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      id: 1,
      title: "Emergency Care",
      subtitle: "24/7 Available",
      description: "Round-the-clock emergency services with expert medical professionals.",
      icon: Clock,
    },
    {
      id: 2,
      title: "Cardiology",
      subtitle: "Heart Specialists",
      description: "Advanced cardiac care with experienced cardiologists and modern equipment.",
      icon: Heart,
    },
    {
      id: 3,
      title: "Health Checkup",
      subtitle: "Prevention First",
      description: "Complete health screening packages with detailed reports.",
      icon: Shield,
    },
    {
      id: 4,
      title: "Surgery",
      subtitle: "Expert Surgeons",
      description: "Advanced surgical procedures with cutting-edge technology.",
      icon: Stethoscope,
    },
    {
      id: 5,
      title: "Family Medicine",
      subtitle: "All Ages",
      description: "Comprehensive healthcare services for the entire family.",
      icon: Users,
    },
    {
      id: 6,
      title: "Digital Records",
      subtitle: "Secure & Accessible",
      description: "Access your medical history anytime, anywhere securely.",
      icon: Activity,
    }
  ];

  const features = [
    {
      icon: UserCheck,
      title: "Easy Appointments",
      description: "Book appointments online with just a few clicks"
    },
    {
      icon: FileText,
      title: "Digital Records",
      description: "Access all your medical records digitally"
    },
    {
      icon: CreditCard,
      title: "Online Payments",
      description: "Secure and convenient payment options"
    },
    {
      icon: MessageSquare,
      title: "Telemedicine",
      description: "Consult with doctors from anywhere"
    }
  ];

  const stats = [
    { number: "500K+", label: "Patients Served" },
    { number: "200+", label: "Expert Doctors" },
    { number: "50+", label: "Specializations" },
    { number: "24/7", label: "Emergency Care" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      rating: 5,
      comment: "Excellent service and caring staff. The online system made everything so easy!"
    },
    {
      name: "Dr. Michael Chen",
      role: "Cardiologist",
      rating: 5,
      comment: "Great platform for managing patients and accessing medical records efficiently."
    },
    {
      name: "Emily Davis",
      role: "Patient",
      rating: 5,
      comment: "Quick appointments, professional care, and user-friendly digital experience."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">M+</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">MedLink360</h1>
                <p className="text-xs text-gray-500">Hospital Management</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-teal-600 text-sm font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 text-sm font-medium">Services</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 text-sm font-medium">Doctors</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 text-sm font-medium">About</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 text-sm font-medium">Contact</a>
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-3 space-y-3">
              <a href="#" className="block text-gray-600 hover:text-teal-600 text-sm font-medium">Home</a>
              <a href="#" className="block text-gray-600 hover:text-teal-600 text-sm font-medium">Services</a>
              <a href="#" className="block text-gray-600 hover:text-teal-600 text-sm font-medium">Doctors</a>
              <a href="#" className="block text-gray-600 hover:text-teal-600 text-sm font-medium">About</a>
              <a href="#" className="block text-gray-600 hover:text-teal-600 text-sm font-medium">Contact</a>
              <div className="pt-3 border-t border-gray-100 space-y-2">
                <button className="block w-full text-left text-teal-600 hover:text-teal-700 text-sm font-medium">
                  Sign In
                </button>
                <button className="block w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-emerald-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Award className="w-4 h-4 mr-2" />
                Top Rated Healthcare Platform
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Modern Healthcare
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600"> Management</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Experience seamless healthcare management with our advanced digital platform. 
                Book appointments, access records, and connect with healthcare professionals effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center">
                  Get Started
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
                <button className="flex items-center text-gray-600 hover:text-teal-600 px-6 py-3 font-semibold">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Quick Actions</h3>
                  <Bell className="w-5 h-5 text-gray-400" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-teal-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-teal-600 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Next Appointment</p>
                      <p className="text-xs text-gray-500">Today, 2:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <FileText className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Lab Results</p>
                      <p className="text-xs text-gray-500">2 new reports available</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <MessageSquare className="w-5 h-5 text-purple-600 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Messages</p>
                      <p className="text-xs text-gray-500">Dr. Smith replied</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Healthcare Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive medical services designed to meet all your healthcare needs with excellence and compassion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
                      <p className="text-sm text-teal-600 font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <button className="text-teal-600 hover:text-teal-700 text-sm font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose MedLink360?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the future of healthcare with our innovative features designed for better patient care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl hover:bg-teal-50 transition-colors group">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
            <p className="text-gray-600">Trusted by thousands of patients and healthcare professionals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <Calendar className="w-12 h-12 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Better Healthcare?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of satisfied patients who trust MedLink360 for their healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Create Account
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">M+</span>
                </div>
                <span className="text-lg font-bold">MedLink360</span>
              </div>
              <p className="text-gray-400 text-sm">
                Modern healthcare management platform for better patient care and seamless medical services.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Emergency Care</a></li>
                <li><a href="#" className="hover:text-white">Cardiology</a></li>
                <li><a href="#" className="hover:text-white">Surgery</a></li>
                <li><a href="#" className="hover:text-white">Family Medicine</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@medlink360.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>123 Healthcare Ave, Medical City</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 MedLink360. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;