import type { Goal, TimeBlock, BlockStatus } from '../types';
import { addHours, startOfToday, setHours, setMinutes } from 'date-fns';

const today = startOfToday();

// Helper to create ISO time for today at specific hour
const todayAt = (hour: number, minute: number = 0) => {
  return setMinutes(setHours(today, hour), minute).toISOString();
};

export const mockGoals: Goal[] = [
  {
    id: 'goal-1',
    name: 'Gym Workout',
    sessionLength: 60,
    targetFrequency: 5,
    minFrequency: 3,
    preferredDays: ['monday', 'wednesday', 'friday'],
    preferredTimeStart: '07:00',
    preferredTimeEnd: '09:00',
    priority: 1,
    color: '#EF4444', // red
    isActive: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'goal-2',
    name: 'LeetCode Practice',
    sessionLength: 45,
    targetFrequency: 5,
    minFrequency: 4,
    preferredDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
    preferredTimeStart: '20:00',
    preferredTimeEnd: '22:00',
    priority: 2,
    color: '#3B82F6', // blue
    isActive: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'goal-3',
    name: 'Spanish Learning',
    sessionLength: 30,
    targetFrequency: 4,
    minFrequency: 3,
    preferredDays: ['tuesday', 'thursday', 'saturday', 'sunday'],
    preferredTimeStart: '18:00',
    preferredTimeEnd: '19:00',
    priority: 3,
    color: '#10B981', // green
    isActive: true,
    createdAt: new Date().toISOString(),
  },
];

// Today's blocks (some in the past, some upcoming, some completed)
export const mockTodayBlocks: TimeBlock[] = [
  {
    id: 'block-1',
    goalId: 'goal-1',
    goalName: 'Gym Workout',
    goalColor: '#EF4444',
    startTime: todayAt(7, 0),
    endTime: todayAt(8, 0),
    status: 'completed',
    notes: 'Great session! PRed on bench press.',
    checklist: [
      { id: 'c1', text: 'Warm-up 10 min', completed: true },
      { id: 'c2', text: 'Bench press 3x8', completed: true },
      { id: 'c3', text: 'Squats 3x10', completed: true },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'block-2',
    goalId: 'goal-3',
    goalName: 'Spanish Learning',
    goalColor: '#10B981',
    startTime: todayAt(12, 30),
    endTime: todayAt(13, 0),
    status: 'planned',
    notes: '',
    checklist: [
      { id: 'c4', text: 'Duolingo lesson', completed: false },
      { id: 'c5', text: 'Watch Spanish news', completed: false },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'block-3',
    goalId: 'goal-2',
    goalName: 'LeetCode Practice',
    goalColor: '#3B82F6',
    startTime: todayAt(20, 0),
    endTime: todayAt(20, 45),
    status: 'planned',
    notes: '',
    checklist: [
      { id: 'c6', text: 'Solve 2 medium problems', completed: false },
      { id: 'c7', text: 'Review solutions', completed: false },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
