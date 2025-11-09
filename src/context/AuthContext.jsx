import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for stored user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('pradraksha_user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('pradraksha_user');
      }
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      setLoading(true);
      
      // Simulate API call - Replace with actual authentication
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data - Replace with actual API response
      const userData = {
        id: Date.now(),
        email: email,
        displayName: email.split('@')[0],
        photoURL: null,
        role: 'student',
        createdAt: new Date().toISOString(),
      };
      
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('pradraksha_user', JSON.stringify(userData));
      
      toast.success('Welcome back!');
      return { success: true, user: userData };
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please try again.');
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Signup function
  const signup = async (email, password, displayName) => {
    try {
      setLoading(true);
      
      // Simulate API call - Replace with actual authentication
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data - Replace with actual API response
      const userData = {
        id: Date.now(),
        email: email,
        displayName: displayName || email.split('@')[0],
        photoURL: null,
        role: 'student',
        createdAt: new Date().toISOString(),
      };
      
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('pradraksha_user', JSON.stringify(userData));
      
      toast.success('Account created successfully!');
      return { success: true, user: userData };
    } catch (error) {
      console.error('Signup error:', error);
      toast.error('Signup failed. Please try again.');
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('pradraksha_user');
    toast.success('Logged out successfully');
  };

  // Update user profile
  const updateProfile = async (updates) => {
    try {
      setLoading(true);
      
      // Simulate API call - Replace with actual API
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('pradraksha_user', JSON.stringify(updatedUser));
      
      toast.success('Profile updated successfully!');
      return { success: true, user: updatedUser };
    } catch (error) {
      console.error('Update profile error:', error);
      toast.error('Failed to update profile');
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    signup,
    logout,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
