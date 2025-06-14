import React from 'react';
import { Heart, Shield, Clock, Users, Calendar, Stethoscope, Activity, Award } from 'lucide-react';

const AdvCards = () => {
  const advertisementCards = [
    {
      id: 1,
      title: "24/7 Emergency Care",
      subtitle: "Always Here When You Need Us",
      description: "Round-the-clock emergency services with expert medical professionals ready to assist you.",
      icon: Clock,
      gradient: "from-teal-500 to-emerald-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700",
      buttonColor: "bg-teal-500 hover:bg-teal-600"
    },
    {
      id: 2,
      title: "Advanced Cardiology",
      subtitle: "Heart Care Excellence",
      description: "State-of-the-art cardiac care with experienced cardiologists and modern equipment.",
      icon: Heart,
      gradient: "from-teal-500 to-emerald-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700",
      buttonColor: "bg-teal-500 hover:bg-teal-600"
    },
    {
      id: 3,
      title: "Comprehensive Health Checkup",
      subtitle: "Prevention is Better Than Cure",
      description: "Complete health screening packages with detailed reports and personalized recommendations.",
      icon: Shield,
      gradient: "from-teal-500 to-emerald-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700",
      buttonColor: "bg-teal-500 hover:bg-teal-600"
    },
    {
      id: 4,
      title: "Specialized Surgery",
      subtitle: "Precision & Care Combined",
      description: "Advanced surgical procedures performed by renowned surgeons with cutting-edge technology.",
      icon: Stethoscope,
      gradient: "from-teal-500 to-emerald-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700",
      buttonColor: "bg-teal-500 hover:bg-teal-600"
    },
    {
      id: 5,
      title: "Family Medicine",
      subtitle: "Healthcare for Every Generation",
      description: "Comprehensive family healthcare services from pediatrics to geriatrics under one roof.",
      icon: Users,
      gradient: "from-teal-500 to-emerald-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700",
      buttonColor: "bg-teal-500 hover:bg-teal-600"
    },
    {
      id: 6,
      title: "Digital Health Records",
      subtitle: "Your Health, Digitally Secured",
      description: "Access your complete medical history anytime, anywhere with our secure digital platform.",
      icon: Activity,
      gradient: "from-teal-500 to-emerald-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700",
      buttonColor: "bg-teal-500 hover:bg-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-4 px-4 max-w-6xl mx-auto">
      {/* Header Section with MediHub Branding */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full mb-3 shadow-lg">
          <span className="text-white font-bold text-sm">M+</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          MedLink360
        </h1>
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Healthcare Services
        </h2>
        <p className="text-sm text-gray-600 max-w-xl mx-auto">
          Join Our Healthcare Community - Discover our comprehensive range of medical services designed to keep you and your family healthy
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div className="bg-gradient-to-r from-teal-500 to-emerald-600 h-1.5 rounded-full w-1/3"></div>
        </div>
      </div>

      {/* Cards Grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {advertisementCards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.id}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg mb-3 shadow-md">
                <IconComponent className="w-4 h-4 text-white" />
              </div>

              <div className="relative z-10">
                <h3 className="text-sm font-bold text-gray-800 mb-1">
                  {card.title}
                </h3>
                <p className="text-xs font-medium text-gray-500 mb-2">
                  {card.subtitle}
                </p>
                <p className="text-gray-600 mb-3 text-xs leading-relaxed">
                  {card.description}
                </p>

                <button className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          );
        })}
      </div> */}

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-xl p-4 text-center text-white shadow-xl mb-6">
        <div className="max-w-2xl mx-auto">
          <Calendar className="w-8 h-8 mx-auto mb-2 opacity-90" />
          <h3 className="text-lg font-bold mb-2">
            Ready to Book Your Appointment?
          </h3>
          <p className="text-sm mb-4 opacity-90">
            Take the first step towards better health. Our medical experts are ready to provide you with exceptional care.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <button className="bg-white text-teal-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-md">
              Create Account
            </button>
            <button className="border-2 border-white text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-white hover:text-teal-600 transition-all duration-200 transform hover:scale-105">
              Sign in here
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center mb-4">
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-xl font-bold text-teal-600 mb-1">500K+</div>
          <div className="text-gray-600 font-medium text-xs">Patients Served</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-xl font-bold text-emerald-600 mb-1">200+</div>
          <div className="text-gray-600 font-medium text-xs">Expert Doctors</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-xl font-bold text-teal-600 mb-1">50+</div>
          <div className="text-gray-600 font-medium text-xs">Specializations</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="text-xl font-bold text-emerald-600 mb-1">24/7</div>
          <div className="text-gray-600 font-medium text-xs">Emergency Care</div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center pb-4">
        <p className="text-gray-500 text-xs">
          Already have an account? <span className="text-teal-600 font-semibold cursor-pointer hover:underline">Sign in here</span>
        </p>
      </div>
    </div>
  );
};

export default AdvCards;