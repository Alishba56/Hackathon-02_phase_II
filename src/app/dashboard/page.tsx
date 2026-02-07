'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Sparkles } from 'lucide-react';
import { TaskList } from '@/components/task/task-list';
import { TaskDialog } from '@/components/task/task-dialog';
import { EmptyState } from '@/components/task/empty-state';

export default function DashboardPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [tasks, setTasks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch tasks from backend
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8002';
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('No authentication token found');
        setIsLoading(false);
        return;
      }

      const response = await fetch(`${apiUrl}/api/tasks`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }

      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      <div className="w-full max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 animate-fade-in-up">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <h1 className="text-5xl font-bold gradient-text">My Tasks</h1>
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            </div>
            <p className="text-lg text-muted-foreground">
              Manage your tasks with ease and style
            </p>
          </div>
          <Button
            size="lg"
            onClick={() => setIsDialogOpen(true)}
            className="hidden md:flex bg-gradient-to-r from-primary to-accent hover:shadow-glow-lg transition-all duration-300 hover:scale-105 gap-2 whitespace-nowrap"
          >
            <Plus className="h-5 w-5" />
            Add Task
          </Button>
        </div>

        {/* Task List or Empty State */}
        <div className="animate-fade-in-up animation-delay-200">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
          ) : tasks.length === 0 ? (
            <EmptyState onAddTask={() => setIsDialogOpen(true)} />
          ) : (
            <TaskList tasks={tasks} onTaskUpdate={setTasks} />
          )}
        </div>
      </div>

      {/* Floating Action Button for Mobile */}
      <Button
        size="lg"
        onClick={() => setIsDialogOpen(true)}
        className="md:hidden fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-glow-lg bg-gradient-to-r from-primary to-accent hover:scale-110 transition-all duration-300 z-50"
      >
        <Plus className="h-7 w-7" />
      </Button>

      {/* Task Dialog */}
      <TaskDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onTaskCreated={(newTask) => {
          setTasks([...tasks, newTask]);
          setIsDialogOpen(false);
        }}
      />
    </div>
  );
}
