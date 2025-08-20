import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Calendar, 
  MessageCircle, 
  TrendingUp, 
  Bell,
  Plus,
  Activity,
  Users,
  Clock,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { db } from '../lib/firebase';
import { collection, query, where, getDocs, orderBy, limit, getCountFromServer } from 'firebase/firestore';
import { format } from 'date-fns';

interface DashboardStats {
  totalSymptomLogs: number;
  upcomingAppointments: number;
  communityPosts: number;
  lastCheckup: string | null;
}

export default function Dashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState<DashboardStats>({
    totalSymptomLogs: 0,
    upcomingAppointments: 0,
    communityPosts: 0,
    lastCheckup: null,
  });
  const [recentActivity, setRecentActivity] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadDashboardData();
    }
  }, [user]);

  const loadDashboardData = async () => {
    try {
      // Load symptom logs count
      const symptomLogsRef = collection(db, 'symptom_logs');
      const symptomQuery = query(symptomLogsRef, where('user_id', '==', user!.uid));
      const symptomSnapshot = await getCountFromServer(symptomQuery);
      const symptomCount = symptomSnapshot.data().count;

      // Load upcoming appointments count
      const appointmentsRef = collection(db, 'appointments');
      const appointmentQuery = query(
        appointmentsRef, 
        where('user_id', '==', user!.uid),
        where('status', '==', 'scheduled'),
        where('date', '>=', new Date().toISOString().split('T')[0])
      );
      const appointmentSnapshot = await getCountFromServer(appointmentQuery);
      const appointmentCount = appointmentSnapshot.data().count;

      // Load community posts count
      const postsRef = collection(db, 'community_posts');
      const postsQuery = query(postsRef, where('user_id', '==', user!.uid));
      const postsSnapshot = await getCountFromServer(postsQuery);
      const postsCount = postsSnapshot.data().count;

      // Load recent symptom logs for activity
      const recentLogsQuery = query(
        symptomLogsRef,
        where('user_id', '==', user!.uid),
        orderBy('created_at', 'desc'),
        limit(5)
      );
      const recentLogsSnapshot = await getDocs(recentLogsQuery);
      const recentLogs = recentLogsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setStats({
        totalSymptomLogs: symptomCount || 0,
        upcomingAppointments: appointmentCount || 0,
        communityPosts: postsCount || 0,
        lastCheckup: null, // This would come from appointments or checkup records
      });

      setRecentActivity(recentLogs || []);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const quickActions = [
    {
      title: 'Log Symptoms',
      description: 'Track how you\'re feeling today',
      icon: Heart,
      color: 'from-pink-400 to-rose-500',
      href: '/tracker',
    },
    {
      title: 'AI Chat',
      description: 'Get instant health guidance',
      icon: MessageCircle,
      color: 'from-purple-400 to-indigo-500',
      href: '/chat',
    },
    {
      title: 'Book Appointment',
      description: 'Schedule with a specialist',
      icon: Calendar,
      color: 'from-teal-400 to-cyan-500',
      href: '/appointments',
    },
    {
      title: 'Join Community',
      description: 'Connect with others',
      icon: Users,
      color: 'from-green-400 to-emerald-500',
      href: '/community',
    },
  ];

  if (loading) {
    return (
      <div className="p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome back, {user?.displayName || 'there'}! 👋
        </h1>
        <p className="text-gray-600">Here's your health overview for today</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-pink-100 p-3 rounded-xl">
              <Activity className="h-6 w-6 text-pink-500" />
            </div>
            <span className="text-2xl font-bold text-gray-800">{stats.totalSymptomLogs}</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">Symptom Logs</h3>
          <p className="text-gray-600 text-sm">Total entries recorded</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-teal-100 p-3 rounded-xl">
              <Calendar className="h-6 w-6 text-teal-500" />
            </div>
            <span className="text-2xl font-bold text-gray-800">{stats.upcomingAppointments}</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">Upcoming</h3>
          <p className="text-gray-600 text-sm">Scheduled appointments</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Users className="h-6 w-6 text-purple-500" />
            </div>
            <span className="text-2xl font-bold text-gray-800">{stats.communityPosts}</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">Community</h3>
          <p className="text-gray-600 text-sm">Your posts shared</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <TrendingUp className="h-6 w-6 text-green-500" />
            </div>
            <span className="text-2xl font-bold text-gray-800">Good</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">Health Score</h3>
          <p className="text-gray-600 text-sm">Based on recent data</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {quickActions.map((action, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className={`bg-gradient-to-r ${action.color} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform`}>
                  <action.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{action.title}</h3>
                <p className="text-gray-600 text-sm">{action.description}</p>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
            {recentActivity.length > 0 ? (
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl">
                    <div className="bg-pink-100 p-2 rounded-lg">
                      <Activity className="h-4 w-4 text-pink-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">
                        Logged symptoms: {activity.symptoms.join(', ')}
                      </p>
                      <p className="text-xs text-gray-600">
                        Severity: {activity.severity}/10 • {format(new Date(activity.created_at), 'MMM d, h:mm a')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Activity className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No recent activity</p>
                <p className="text-gray-400 text-sm">Start logging your symptoms to see activity here</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Health Reminders */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Health Reminders</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-xl">
                <Bell className="h-5 w-5 text-yellow-500" />
                <div>
                  <p className="text-sm font-medium text-gray-800">Daily Check-in</p>
                  <p className="text-xs text-gray-600">Log your symptoms</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl">
                <Clock className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-sm font-medium text-gray-800">Medication</p>
                  <p className="text-xs text-gray-600">Take evening dose</p>
                </div>
              </div>
            </div>
          </div>

          {/* Health Tips */}
          <div className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-4">Today's Health Tip</h3>
            <p className="text-sm opacity-90 mb-4">
              Stay hydrated! Drinking plenty of water helps your body function optimally and can help manage treatment side effects.
            </p>
            <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors">
              Learn More
            </button>
          </div>

          {/* Emergency Contact */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <div className="flex items-center space-x-2 mb-3">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <h3 className="font-semibold text-red-800">Emergency</h3>
            </div>
            <p className="text-sm text-red-700 mb-3">
              If you're experiencing severe symptoms, don't wait.
            </p>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors w-full">
              Call Emergency Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}