"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { getUser } from '@/hooks/useUser';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const setUpdatedUser = (userData) => {
    setUser(userData);
  };

  const fetchUserDetails = async (userId) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/users/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error('Error fetching user details:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser();
      if (userData) {
        const detailedUserData = await fetchUserDetails(userData.id);
        if (detailedUserData) {
          setUser(detailedUserData);
        } else {
          setUser(userData);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    };

    fetchUser();

    // Supabase auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        const detailedUserData = await fetchUserDetails(session.user.id);
        if (detailedUserData) {
          setUser(detailedUserData);
        } else {
          setUser(session.user);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setUpdatedUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);