import React from 'react';
import { TaskProvider } from './src/contexts/TaskContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <TaskProvider>
      <AppNavigator />
    </TaskProvider>
  );
} 