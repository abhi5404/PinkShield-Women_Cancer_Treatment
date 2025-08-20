import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Shield, 
  Bot, 
  Map, 
  Users, 
  BookOpen, 
  Calendar, 
  DollarSign, 
  MessageCircle, 
  Search, 
  User, 
  BarChart3, 
  Truck, 
  Building2, 
  Pill, 
  Stethoscope,
  ArrowRight,
  Check,
  Star,
  Play,
  ChevronDown,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: Bot, title: "AI Symptom Chatbot", desc: "Get instant guidance with our smart AI assistant" },
    { icon: Map, title: "Personalized Diagnostic Pathway", desc: "Custom care paths tailored to your needs" },
    { icon: Users, title: "Family Tree Cancer Risk Mapping", desc: "Understand your genetic risk factors" },
    { icon: BookOpen, title: "Prevention & Lifestyle Tips", desc: "Daily guidance for healthier living" },
    { icon: Calendar, title: "Side-Effect & Symptom Diary", desc: "Track and manage your health journey" },
    { icon: DollarSign, title: "Financial Aid Navigator", desc: "Find funding and insurance support" },
    { icon: MessageCircle, title: "Emotional & Community Support Hub", desc: "Connect with others who understand" },
    { icon: Search, title: "Clinical Trial Finder", desc: "Discover relevant research opportunities" },
    { icon: User, title: "Digital Twin Health Record", desc: "Complete digital health profile" },
    { icon: BarChart3, title: "Caregiver Dashboard", desc: "Tools for family and caregivers" },
    { icon: Truck, title: "Ambulance & Hospital Tracker", desc: "Emergency services at your fingertips" },
    { icon: Building2, title: "Chemo Rehab Centre", desc: "Rehabilitation and recovery support" },
    { icon: Pill, title: "In-app Pharmacy", desc: "Discounted medicines delivered to you" },
    { icon: Stethoscope, title: "Free Health Checkup", desc: "Partner hospital collaborations" }
  ];

  const steps = [
    { number: "01", title: "Symptom Check", desc: "Share your concerns with our AI" },
    { number: "02", title: "AI Guidance", desc: "Get personalized recommendations" },
    { number: "03", title: "Right Tests", desc: "Find appropriate screening options" },
    { number: "04", title: "Doctor Connect", desc: "Match with specialist doctors" },
    { number: "05", title: "Treatment", desc: "Navigate your treatment journey" },
    { number: "06", title: "Recovery", desc: "Support through recovery & beyond" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      age: "45, Survivor",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "PinkShield helped me catch my cancer early. The AI chatbot guided me to get the right tests at the right time."
    },
    {
      name: "Maria Rodriguez",
      age: "38, Caregiver",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "As a caregiver, the dashboard helped me coordinate my mother's care. The community support was invaluable."
    },
    {
      name: "Aisha Patel",
      age: "52, Survivor",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "The financial aid navigator saved us thousands. PinkShield made an overwhelming journey manageable."
    }
  ];

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-pink-400 to-purple-500 p-2 rounded-xl">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">PinkShield</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-pink-500 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-pink-500 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-pink-500 transition-colors">Stories</a>
              <a href="#community" className="text-gray-600 hover:text-pink-500 transition-colors">Community</a>
            </div>
            <Link 
              to="/auth"
              className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
                PinkShield
              </span>
              <br />
              <span className="text-3xl md:text-5xl">Your Cancer Care Companion</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              From early signs to recovery, all in one place. Empowering women with AI-driven care, 
              community support, and comprehensive health navigation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/auth"
                className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="bg-white text-gray-800 border-2 border-teal-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-50 transition-all duration-300 inline-flex items-center justify-center">
                Book Free Checkup <Stethoscope className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Hero Image/Illustration */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
              <img 
                src="https://images.pexels.com/photos/7446997/pexels-photo-7446997.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                alt="Women supporting each other" 
                className="w-full h-64 md:h-80 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Why <span className="text-pink-500">Early Detection</span> Matters
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Every year, thousands of women face delayed cancer diagnosis due to lack of awareness, 
                limited access to specialists, and complex healthcare navigation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <ArrowRight className="h-5 w-5 text-red-500" />
                  </div>
                  <span className="text-gray-700">70% of cancers are detected in advanced stages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <ArrowRight className="h-5 w-5 text-red-500" />
                  </div>
                  <span className="text-gray-700">Women often delay seeking help due to symptom confusion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <ArrowRight className="h-5 w-5 text-red-500" />
                  </div>
                  <span className="text-gray-700">Complex healthcare systems create barriers to care</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Healthcare consultation" 
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-pink-400 to-purple-500 p-6 rounded-2xl text-white">
                <Heart className="h-12 w-12 mb-2" />
                <p className="font-semibold">We're here to change that</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">Care Suite</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for your cancer care journey, powered by AI and supported by community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-3 rounded-xl w-fit mb-4 group-hover:from-pink-200 group-hover:to-purple-200 transition-all">
                  <feature.icon className="h-6 w-6 text-pink-500" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              How <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">It Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your journey from concern to care, simplified and supported every step of the way
            </p>
          </div>

          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              <div className="flex justify-between items-center mb-12">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center relative">
                    <div className="bg-gradient-to-r from-teal-400 to-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-sm text-center max-w-32">{step.desc}</p>
                    {index < steps.length - 1 && (
                      <ArrowRight className="absolute -right-8 top-6 h-6 w-6 text-gray-300" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-teal-400 to-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Stories of <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">Hope & Strength</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real women, real journeys, real impact. Here's how PinkShield has made a difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.age}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Support */}
      <section id="community" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                You're Not <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">Alone</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Connect with a community of survivors, caregivers, and advocates who understand your journey
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-xl">
                    <MessageCircle className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Peer Chat Groups</h3>
                    <p className="text-gray-600">Connect with others at similar stages of their journey</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <Heart className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Mentorship Program</h3>
                    <p className="text-gray-600">Get guidance from survivors who've walked this path</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 p-3 rounded-xl">
                    <Users className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Survivor Network</h3>
                    <p className="text-gray-600">Build lasting friendships with women who understand</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Women supporting each other" 
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-800">15,000+ Active Members</span>
                </div>
                <p className="text-xs text-gray-600">Supporting each other daily</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Affordable <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">Care for All</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential features free forever. Premium features at a price everyone can afford.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Free Forever</h3>
              <div className="text-4xl font-bold text-gray-800 mb-6">$0<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>AI Symptom Chatbot</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Community Support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Basic Health Tracking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Educational Resources</span>
                </li>
              </ul>
              <Link
                to="/auth"
                className="w-full bg-gray-100 text-gray-800 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors block text-center"
              >
                Get Started Free
              </Link>
            </div>

            <div className="bg-gradient-to-br from-pink-400 to-purple-500 text-white rounded-2xl p-8 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-gray-800 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Care</h3>
              <div className="text-4xl font-bold mb-6">$9.99<span className="text-lg opacity-80">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-white" />
                  <span>Everything in Free</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-white" />
                  <span>Personalized Care Plans</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-white" />
                  <span>1-on-1 Specialist Consultations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-white" />
                  <span>Advanced Analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-white" />
                  <span>Priority Support</span>
                </li>
              </ul>
              <Link
                to="/auth"
                className="w-full bg-white text-purple-500 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors block text-center"
              >
                Start Premium Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 bg-gradient-to-r from-pink-400 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Join PinkShield Today!
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
            Take control of your health journey. Connect with experts, find support, 
            and navigate cancer care with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              to="/auth"
              className="bg-white text-purple-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center"
            >
              Start Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 inline-flex items-center justify-center">
              Download App <Play className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
            <div>
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <div className="opacity-80">Women Supported</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="opacity-80">User Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="opacity-80">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-pink-400 to-purple-500 p-2 rounded-xl">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">PinkShield</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering women through comprehensive cancer care navigation and support.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">AI Symptom Checker</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Care Navigation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Health Tracking</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>1-800-PINKSHIELD</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>support@pinkshield.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>Available Nationwide</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PinkShield. All rights reserved. Made with ❤️ for women's health.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}