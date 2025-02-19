import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { 
  ChevronRight, 
  Award, 
  Clock, 
  CheckCircle, 
  FileText,
  User as UserIcon
} from 'lucide-react';

export function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
          <p className="mt-1 text-gray-600">{user?.email}</p>
        </div>
      </div>

      {/* Profile Completion Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900">Complete Your Profile</h2>
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full w-1/3"></div>
          </div>
          <p className="mt-2 text-sm text-gray-600">33% complete</p>
        </div>
        <div className="mt-4 space-y-3">
          <div className="flex items-center text-gray-700">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            <span>Basic Information</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Clock className="w-5 h-5 text-gray-400 mr-2" />
            <span>Professional Experience</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Clock className="w-5 h-5 text-gray-400 mr-2" />
            <span>Certifications & Licenses</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <Award className="w-8 h-8 text-blue-600" />
          <h3 className="mt-4 text-lg font-medium text-gray-900">Available Jobs</h3>
          <p className="mt-2 text-gray-600">Browse through our latest healthcare positions</p>
          <button className="mt-4 flex items-center text-blue-600 hover:text-blue-700">
            View Jobs
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <FileText className="w-8 h-8 text-blue-600" />
          <h3 className="mt-4 text-lg font-medium text-gray-900">My Applications</h3>
          <p className="mt-2 text-gray-600">Track your job application status</p>
          <button className="mt-4 flex items-center text-blue-600 hover:text-blue-700">
            View Applications
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <UserIcon className="w-8 h-8 text-blue-600" />
          <h3 className="mt-4 text-lg font-medium text-gray-900">Profile Settings</h3>
          <p className="mt-2 text-gray-600">Update your professional information</p>
          <button className="mt-4 flex items-center text-blue-600 hover:text-blue-700">
            Edit Profile
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}