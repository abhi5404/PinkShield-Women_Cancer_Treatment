import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, AlertTriangle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { db } from '../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
  symptoms?: string[];
  severity?: number;
}

export default function AIChat() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI health companion. I'm here to help you understand your symptoms and guide you to appropriate care. Please remember that I'm not a replacement for professional medical advice. How are you feeling today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Symptom-based responses
    if (lowerMessage.includes('pain') || lowerMessage.includes('hurt')) {
      return "I understand you're experiencing pain. Can you tell me more about the location, intensity (1-10), and when it started? Pain can have many causes, and it's important to track these details. If the pain is severe or sudden, please consider contacting your healthcare provider immediately.";
    }
    
    if (lowerMessage.includes('tired') || lowerMessage.includes('fatigue')) {
      return "Fatigue is a common concern. It can be related to many factors including treatment, stress, sleep quality, or underlying conditions. Are you getting adequate rest? Have you noticed any patterns with your fatigue? I'd recommend discussing persistent fatigue with your healthcare team.";
    }
    
    if (lowerMessage.includes('nausea') || lowerMessage.includes('sick')) {
      return "Nausea can be challenging to deal with. Some helpful strategies include eating small, frequent meals, staying hydrated, and avoiding strong odors. Ginger tea or crackers might help. If nausea is severe or persistent, your doctor may be able to prescribe anti-nausea medication.";
    }
    
    if (lowerMessage.includes('lump') || lowerMessage.includes('bump')) {
      return "Finding a lump can be concerning. While many lumps are benign, it's important to have any new or changing lumps evaluated by a healthcare professional. Please schedule an appointment with your doctor as soon as possible for proper examination and assessment.";
    }
    
    if (lowerMessage.includes('breast') && (lowerMessage.includes('pain') || lowerMessage.includes('change'))) {
      return "Breast changes should always be taken seriously. This could include lumps, pain, skin changes, or nipple discharge. I strongly recommend scheduling a clinical breast exam with your healthcare provider. Early detection is key for the best outcomes.";
    }
    
    // Emotional support
    if (lowerMessage.includes('scared') || lowerMessage.includes('worried') || lowerMessage.includes('anxious')) {
      return "It's completely normal to feel scared or anxious about health concerns. These feelings are valid and shared by many people. Consider reaching out to our community support groups, speaking with a counselor, or practicing relaxation techniques. Remember, you're not alone in this journey.";
    }
    
    // General health advice
    if (lowerMessage.includes('prevent') || lowerMessage.includes('healthy')) {
      return "Great question about prevention! Key strategies include regular screenings, maintaining a healthy diet rich in fruits and vegetables, staying physically active, limiting alcohol, not smoking, and managing stress. Regular check-ups with your healthcare provider are also essential.";
    }
    
    // Default response
    return "Thank you for sharing that with me. Based on what you've described, I'd recommend keeping track of your symptoms and discussing them with your healthcare provider. They can provide personalized advice based on your medical history. Is there anything specific you'd like to know more about?";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Simulate AI processing delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const aiResponse = generateAIResponse(inputMessage);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);

      // Extract symptoms and severity if mentioned
      const symptoms = extractSymptoms(inputMessage);
      const severity = extractSeverity(inputMessage);

      // Save to database if symptoms are detected
      if (symptoms.length > 0 && user) {
        const symptomLogsRef = collection(db, 'symptom_logs');
        await addDoc(symptomLogsRef, {
          user_id: user.uid,
          symptoms,
          severity: severity || 5,
          notes: inputMessage,
          ai_response: aiResponse,
          created_at: new Date().toISOString(),
        });
      }

    } catch (error) {
      console.error('Error generating AI response:', error);
      toast.error('Sorry, I encountered an error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const extractSymptoms = (message: string): string[] => {
    const symptoms = [];
    const lowerMessage = message.toLowerCase();
    
    const symptomKeywords = [
      'pain', 'headache', 'nausea', 'fatigue', 'tired', 'dizzy', 'fever',
      'cough', 'shortness of breath', 'chest pain', 'abdominal pain',
      'back pain', 'joint pain', 'muscle pain', 'sore throat', 'runny nose'
    ];

    symptomKeywords.forEach(symptom => {
      if (lowerMessage.includes(symptom)) {
        symptoms.push(symptom);
      }
    });

    return symptoms;
  };

  const extractSeverity = (message: string): number | null => {
    const severityMatch = message.match(/(\d+)\/10|(\d+) out of 10|severity (\d+)/i);
    if (severityMatch) {
      return parseInt(severityMatch[1] || severityMatch[2] || severityMatch[3]);
    }
    return null;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-screen flex flex-col bg-pink-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-purple-400 to-indigo-500 p-3 rounded-xl">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">AI Health Assistant</h1>
            <p className="text-gray-600 text-sm">Get instant guidance and support</p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mx-6 mt-4 rounded-r-lg">
        <div className="flex items-start space-x-2">
          <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
          <div>
            <p className="text-sm text-yellow-800">
              <strong>Important:</strong> This AI assistant provides general health information and guidance. 
              It is not a substitute for professional medical advice, diagnosis, or treatment. 
              Always consult with qualified healthcare providers for medical concerns.
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                message.isBot
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'bg-gradient-to-r from-pink-400 to-purple-500 text-white'
              }`}
            >
              <div className="flex items-start space-x-2">
                {message.isBot && (
                  <div className="bg-purple-100 p-1 rounded-full mt-1">
                    <Bot className="h-4 w-4 text-purple-500" />
                  </div>
                )}
                <div className="flex-1">
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p className={`text-xs mt-2 ${
                    message.isBot ? 'text-gray-500' : 'text-white/70'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
                {!message.isBot && (
                  <div className="bg-white/20 p-1 rounded-full mt-1">
                    <User className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white px-4 py-3 rounded-2xl shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="bg-purple-100 p-1 rounded-full">
                  <Bot className="h-4 w-4 text-purple-500" />
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-200 p-6">
        <div className="flex space-x-4">
          <div className="flex-1 relative">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Describe your symptoms or ask a health question..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
              rows={2}
              disabled={isLoading}
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isLoading}
            className="bg-gradient-to-r from-pink-400 to-purple-500 text-white p-3 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <Loader className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </button>
        </div>
        
        <div className="mt-3 flex items-center justify-center space-x-4 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <Heart className="h-3 w-3" />
            <span>Confidential & Secure</span>
          </div>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          <span>Available 24/7</span>
        </div>
      </div>
    </div>
  );
}