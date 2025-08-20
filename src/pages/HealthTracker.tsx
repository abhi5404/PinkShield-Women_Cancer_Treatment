import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Calendar, 
  TrendingUp, 
  Heart, 
  Activity,
  AlertCircle,
  Save,
  BarChart3
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { db } from '../lib/firebase';
import { collection, query, where, getDocs, addDoc, orderBy, limit } from 'firebase/firestore';
import { format, subDays } from 'date-fns';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import toast from 'react-hot-toast';

interface SymptomLog {
  id: string;
  symptoms: string[];
  severity: number;
  notes: string | null;
  created_at: string;
}

export default function HealthTracker() {
  const { user } = useAuth();
  const [symptomLogs, setSymptomLogs] = useState<SymptomLog[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    symptoms: [] as string[],
    severity: 5,
    notes: '',
  });

  const commonSymptoms = [
    'Fatigue', 'Nausea', 'Pain', 'Headache', 'Dizziness', 'Fever',
    'Cough', 'Shortness of breath', 'Chest pain', 'Abdominal pain',
    'Back pain', 'Joint pain', 'Muscle pain', 'Sleep issues', 'Anxiety'
  ];

  useEffect(() => {
    if (user) {
      loadSymptomLogs();
    }
  }, [user]);

  const loadSymptomLogs = async () => {
    try {
      const symptomLogsRef = collection(db, 'symptom_logs');
      const q = query(
        symptomLogsRef,
        where('user_id', '==', user!.uid),
        orderBy('created_at', 'desc'),
        limit(30)
      );
      
      const querySnapshot = await getDocs(q);
      const logs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as SymptomLog[];
      
      setSymptomLogs(logs);
    } catch (error) {
      console.error('Error loading symptom logs:', error);
      toast.error('Failed to load symptom logs');
    } finally {
      setLoading(false);
    }
  };

  const handleSymptomToggle = (symptom: string) => {
    setFormData(prev => ({
      ...prev,
      symptoms: prev.symptoms.includes(symptom)
        ? prev.symptoms.filter(s => s !== symptom)
        : [...prev.symptoms, symptom]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.symptoms.length === 0) {
      toast.error('Please select at least one symptom');
      return;
    }

    try {
      const symptomLogsRef = collection(db, 'symptom_logs');
      await addDoc(symptomLogsRef, {
        user_id: user!.uid,
        symptoms: formData.symptoms,
        severity: formData.severity,
        notes: formData.notes || null,
        created_at: new Date().toISOString(),
      });

      toast.success('Symptom log saved successfully');
      setFormData({ symptoms: [], severity: 5, notes: '' });
      setShowAddForm(false);
      loadSymptomLogs();
    } catch (error) {
      console.error('Error saving symptom log:', error);
      toast.error('Failed to save symptom log');
    }
  };

  const getChartData = () => {
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = subDays(new Date(), 6 - i);
      const dayLogs = symptomLogs.filter(log => 
        format(new Date(log.created_at), 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
      );
      
      const avgSeverity = dayLogs.length > 0 
        ? dayLogs.reduce((sum, log) => sum + log.severity, 0) / dayLogs.length 
        : 0;

      return {
        date: format(date, 'MMM dd'),
        severity: Math.round(avgSeverity * 10) / 10,
        count: dayLogs.length,
      };
    });

    return last7Days;
  };

  const getMostCommonSymptoms = () => {
    const symptomCount: { [key: string]: number } = {};
    
    symptomLogs.forEach(log => {
      log.symptoms.forEach(symptom => {
        symptomCount[symptom] = (symptomCount[symptom] || 0) + 1;
      });
    });

    return Object.entries(symptomCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([symptom, count]) => ({ symptom, count }));
  };

  if (loading) {
    return (
      <div className="p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 h-96 bg-gray-200 rounded-2xl"></div>
            <div className="h-96 bg-gray-200 rounded-2xl"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Health Tracker</h1>
          <p className="text-gray-600">Monitor your symptoms and track your health journey</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Log Symptoms</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-pink-100 p-3 rounded-xl">
              <Activity className="h-6 w-6 text-pink-500" />
            </div>
            <span className="text-2xl font-bold text-gray-800">{symptomLogs.length}</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">Total Logs</h3>
          <p className="text-gray-600 text-sm">Symptoms recorded</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-teal-100 p-3 rounded-xl">
              <TrendingUp className="h-6 w-6 text-teal-500" />
            </div>
            <span className="text-2xl font-bold text-gray-800">
              {symptomLogs.length > 0 
                ? Math.round((symptomLogs.reduce((sum, log) => sum + log.severity, 0) / symptomLogs.length) * 10) / 10
                : 0
              }
            </span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">Avg Severity</h3>
          <p className="text-gray-600 text-sm">Out of 10</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Calendar className="h-6 w-6 text-purple-500" />
            </div>
            <span className="text-2xl font-bold text-gray-800">
              {symptomLogs.filter(log => 
                new Date(log.created_at) > subDays(new Date(), 7)
              ).length}
            </span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">This Week</h3>
          <p className="text-gray-600 text-sm">Recent entries</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Symptom Severity Trend</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={getChartData()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[0, 10]} />
                <Tooltip 
                  formatter={(value: any, name: string) => [
                    name === 'severity' ? `${value}/10` : value,
                    name === 'severity' ? 'Avg Severity' : 'Entries'
                  ]}
                />
                <Line 
                  type="monotone" 
                  dataKey="severity" 
                  stroke="#ec4899" 
                  strokeWidth={3}
                  dot={{ fill: '#ec4899', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Most Common Symptoms */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Most Common Symptoms</h3>
          <div className="space-y-4">
            {getMostCommonSymptoms().map(({ symptom, count }, index) => (
              <div key={symptom} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    index === 0 ? 'bg-pink-500' :
                    index === 1 ? 'bg-purple-500' :
                    index === 2 ? 'bg-teal-500' :
                    index === 3 ? 'bg-blue-500' : 'bg-gray-400'
                  }`}></div>
                  <span className="text-sm font-medium text-gray-800">{symptom}</span>
                </div>
                <span className="text-sm text-gray-600">{count}x</span>
              </div>
            ))}
            {getMostCommonSymptoms().length === 0 && (
              <div className="text-center py-8">
                <BarChart3 className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No symptoms logged yet</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Recent Logs */}
      <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Recent Symptom Logs</h3>
        {symptomLogs.length > 0 ? (
          <div className="space-y-4">
            {symptomLogs.slice(0, 10).map((log) => (
              <div key={log.id} className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex flex-wrap gap-2">
                    {log.symptoms.map((symptom) => (
                      <span
                        key={symptom}
                        className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {symptom}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      log.severity <= 3 ? 'bg-green-100 text-green-800' :
                      log.severity <= 6 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {log.severity}/10
                    </div>
                  </div>
                </div>
                {log.notes && (
                  <p className="text-gray-600 text-sm mb-2">{log.notes}</p>
                )}
                <p className="text-gray-500 text-xs">
                  {format(new Date(log.created_at), 'MMM d, yyyy • h:mm a')}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-800 mb-2">No symptoms logged yet</h4>
            <p className="text-gray-600 mb-6">Start tracking your symptoms to monitor your health</p>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Log Your First Symptom
            </button>
          </div>
        )}
      </div>

      {/* Add Symptom Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Log Symptoms</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Symptoms
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {commonSymptoms.map((symptom) => (
                    <button
                      key={symptom}
                      type="button"
                      onClick={() => handleSymptomToggle(symptom)}
                      className={`p-3 rounded-xl text-sm font-medium transition-all ${
                        formData.symptoms.includes(symptom)
                          ? 'bg-pink-100 text-pink-800 border-2 border-pink-300'
                          : 'bg-gray-50 text-gray-700 border-2 border-transparent hover:bg-gray-100'
                      }`}
                    >
                      {symptom}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Severity Level: {formData.severity}/10
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formData.severity}
                  onChange={(e) => setFormData(prev => ({ ...prev, severity: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Mild</span>
                  <span>Moderate</span>
                  <span>Severe</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                  rows={3}
                  placeholder="Any additional details about your symptoms..."
                />
              </div>

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 bg-gray-100 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-pink-400 to-purple-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Save className="h-5 w-5" />
                  <span>Save Log</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}