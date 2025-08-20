import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Search, 
  Heart, 
  MessageCircle, 
  User,
  Filter,
  Calendar,
  Users
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { db } from '../lib/firebase';
import { collection, query, getDocs, addDoc, doc, updateDoc, orderBy } from 'firebase/firestore';
import toast from 'react-hot-toast';

interface CommunityPost {
  id: string;
  title: string;
  content: string;
  category: string;
  likes: number;
  created_at: string;
  profiles: {
    full_name: string | null;
    avatar_url: string | null;
  } | null;
}

export default function Community() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'support',
  });

  const categories = [
    { id: 'all', name: 'All Posts', color: 'bg-gray-100 text-gray-800' },
    { id: 'support', name: 'Support', color: 'bg-pink-100 text-pink-800' },
    { id: 'treatment', name: 'Treatment', color: 'bg-purple-100 text-purple-800' },
    { id: 'lifestyle', name: 'Lifestyle', color: 'bg-teal-100 text-teal-800' },
    { id: 'celebration', name: 'Celebration', color: 'bg-green-100 text-green-800' },
    { id: 'questions', name: 'Questions', color: 'bg-blue-100 text-blue-800' },
  ];

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const postsRef = collection(db, 'community_posts');
      const q = query(postsRef, orderBy('created_at', 'desc'));
      const querySnapshot = await getDocs(q);
      
      const postsData = await Promise.all(
        querySnapshot.docs.map(async (docSnapshot) => {
          const postData = docSnapshot.data();
          // Get user profile data
          const userProfileRef = doc(db, 'profiles', postData.user_id);
          const userProfileSnap = await getDocs(collection(db, 'profiles'));
          const userProfile = userProfileSnap.docs.find(doc => doc.id === postData.user_id)?.data();
          
          return {
            id: docSnapshot.id,
            ...postData,
            profiles: {
              full_name: userProfile?.full_name || 'Anonymous',
              avatar_url: userProfile?.avatar_url || null,
            }
          };
        })
      );
      
      setPosts(postsData);
    } catch (error) {
      console.error('Error loading posts:', error);
      toast.error('Failed to load community posts');
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.content.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const postsRef = collection(db, 'community_posts');
      await addDoc(postsRef, {
        user_id: user!.uid,
        title: formData.title,
        content: formData.content,
        category: formData.category,
        likes: 0,
        created_at: new Date().toISOString(),
      });

      toast.success('Post created successfully!');
      setFormData({ title: '', content: '', category: 'support' });
      setShowCreatePost(false);
      loadPosts();
    } catch (error) {
      console.error('Error creating post:', error);
      toast.error('Failed to create post');
    }
  };

  const handleLikePost = async (postId: string, currentLikes: number) => {
    try {
      const postRef = doc(db, 'community_posts', postId);
      await updateDoc(postRef, { likes: currentLikes + 1 });

      setPosts(prev => prev.map(post => 
        post.id === postId 
          ? { ...post, likes: post.likes + 1 }
          : post
      ));
    } catch (error) {
      console.error('Error liking post:', error);
      toast.error('Failed to like post');
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
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
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Community</h1>
          <p className="text-gray-600">Connect, share, and support each other</p>
        </div>
        <button
          onClick={() => setShowCreatePost(true)}
          className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>New Post</span>
        </button>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-pink-100 p-3 rounded-xl">
              <Users className="h-6 w-6 text-pink-500" />
            </div>
            <span className="text-2xl font-bold text-gray-800">15,247</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">Members</h3>
          <p className="text-gray-600 text-sm">Active community</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <MessageCircle className="h-6 w-6 text-purple-500" />
            </div>
            <span className="text-2xl font-bold text-gray-800">{posts.length}</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">Posts</h3>
          <p className="text-gray-600 text-sm">Shared stories</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-teal-100 p-3 rounded-xl">
              <Heart className="h-6 w-6 text-teal-500" />
            </div>
            <span className="text-2xl font-bold text-gray-800">
              {posts.reduce((sum, post) => sum + post.likes, 0)}
            </span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">Support</h3>
          <p className="text-gray-600 text-sm">Hearts given</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <Calendar className="h-6 w-6 text-green-500" />
            </div>
            <span className="text-2xl font-bold text-gray-800">24/7</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">Available</h3>
          <p className="text-gray-600 text-sm">Always here</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search posts..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? category.color
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                    {post.profiles?.avatar_url ? (
                      <img 
                        src={post.profiles.avatar_url} 
                        alt="Avatar" 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <User className="h-6 w-6 text-white" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {post.profiles?.full_name || 'Anonymous'}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {new Date(post.created_at).toLocaleDateString()} • {new Date(post.created_at).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  categories.find(c => c.id === post.category)?.color || 'bg-gray-100 text-gray-800'
                }`}>
                  {categories.find(c => c.id === post.category)?.name || post.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{post.content}</p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button
                  onClick={() => handleLikePost(post.id, post.likes)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors"
                >
                  <Heart className="h-5 w-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-500 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                  <span>Reply</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
            <MessageCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-800 mb-2">No posts found</h3>
            <p className="text-gray-600 mb-6">
              {searchQuery || selectedCategory !== 'all' 
                ? 'Try adjusting your search or filters'
                : 'Be the first to share your story'
              }
            </p>
            <button
              onClick={() => setShowCreatePost(true)}
              className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Create First Post
            </button>
          </div>
        )}
      </div>

      {/* Create Post Modal */}
      {showCreatePost && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Share Your Story</h3>
            
            <form onSubmit={handleCreatePost} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  {categories.slice(1).map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="What would you like to share?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                  rows={6}
                  placeholder="Share your thoughts, experiences, or questions..."
                  required
                />
              </div>

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowCreatePost(false)}
                  className="flex-1 bg-gray-100 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-pink-400 to-purple-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Plus className="h-5 w-5" />
                  <span>Share Post</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}