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
      gradient: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      buttonColor: "bg-red-500 hover:bg-red-600"
    },
    {
      id: 2,
      title: "Advanced Cardiology",
      subtitle: "Heart Care Excellence",
      description: "State-of-the-art cardiac care with experienced cardiologists and modern equipment.",
      icon: Heart,
      gradient: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      buttonColor: "bg-blue-500 hover:bg-blue-600"
    },
    {
      id: 3,
      title: "Comprehensive Health Checkup",
      subtitle: "Prevention is Better Than Cure",
      description: "Complete health screening packages with detailed reports and personalized recommendations.",
      icon: Shield,
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      buttonColor: "bg-green-500 hover:bg-green-600"
    },
    {
      id: 4,
      title: "Specialized Surgery",
      subtitle: "Precision & Care Combined",
      description: "Advanced surgical procedures performed by renowned surgeons with cutting-edge technology.",
      icon: Stethoscope,
      gradient: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      buttonColor: "bg-purple-500 hover:bg-purple-600"
    },
    {
      id: 5,
      title: "Family Medicine",
      subtitle: "Healthcare for Every Generation",
      description: "Comprehensive family healthcare services from pediatrics to geriatrics under one roof.",
      icon: Users,
      gradient: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      buttonColor: "bg-orange-500 hover:bg-orange-600"
    },
    {
      id: 6,
      title: "Digital Health Records",
      subtitle: "Your Health, Digitally Secured",
      description: "Access your complete medical history anytime, anywhere with our secure digital platform.",
      icon: Activity,
      gradient: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700",
      buttonColor: "bg-teal-500 hover:bg-teal-600"
    }
  ];

  return (
    <div className="pt-8 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
          <Award className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Healthcare Services
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our comprehensive range of medical services designed to keep you and your family healthy
        </p>
      </div>

      {/* Cards Grid */}
{/*       
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {advertisementCards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.id}
              className={`${card.bgColor} rounded-xl p-5 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-white/20 backdrop-blur-sm relative overflow-hidden group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r ${card.gradient} rounded-lg mb-4 shadow-md`}>
                <IconComponent className="w-5 h-5 text-white" />
              </div>

              <div className="relative z-10">
                <h3 className={`text-lg font-bold ${card.textColor} mb-1`}>
                  {card.title}
                </h3>
                <p className={`text-xs font-semibold ${card.textColor} opacity-80 mb-3`}>
                  {card.subtitle}
                </p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {card.description}
                </p>

                <button className={`${card.buttonColor} text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg`}>
                  Learn More
                </button>
              </div>

              <div className="absolute -top-2 -right-2 w-16 h-16 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/5 rounded-full"></div>
            </div>
          );
        })}
      </div> */}

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-2xl p-8 text-center text-white shadow-xl">
        <div className="max-w-3xl mx-auto">
          <Calendar className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl font-bold mb-3">
            Ready to Book Your Appointment?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Take the first step towards better health. Our medical experts are ready to provide you with exceptional care.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-md">
              Book Appointment
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
        <div className="p-4">
          <div className="text-3xl font-bold text-blue-600 mb-1">500K+</div>
          <div className="text-gray-600 font-medium text-sm">Patients Served</div>
        </div>
        <div className="p-4">
          <div className="text-3xl font-bold text-green-600 mb-1">200+</div>
          <div className="text-gray-600 font-medium text-sm">Expert Doctors</div>
        </div>
        <div className="p-4">
          <div className="text-3xl font-bold text-purple-600 mb-1">50+</div>
          <div className="text-gray-600 font-medium text-sm">Specializations</div>
        </div>
        <div className="p-4">
          <div className="text-3xl font-bold text-orange-600 mb-1">24/7</div>
          <div className="text-gray-600 font-medium text-sm">Emergency Care</div>
        </div>
      </div>
    </div>
  );
};

export default AdvCards;