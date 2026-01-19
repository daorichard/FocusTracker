// Core Domain Types

export type BlockStatus = 'planned' | 'completed' | 'skipped';

export type DayOfWeek =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export interface Goal {
  id: string;
  name: string;
  sessionLength: number; // in minutes
  targetFrequency: number; // sessions per week
  minFrequency: number; // minimum sessions per week
  preferredDays: DayOfWeek[];
  preferredTimeStart?: string; // HH:mm format
  preferredTimeEnd?: string; // HH:mm format
  priority: number; // 1-5, where 1 is highest
  color?: string; // for user customization
  isActive: boolean;
  createdAt: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface TimeBlock {
  id: string;
  goalId: string;
  goalName: string; // denormalized for easy display
  goalColor?: string;
  startTime: string; // ISO 8601 format
  endTime: string; // ISO 8601 format
  status: BlockStatus;
  notes?: string;
  checklist: ChecklistItem[];
  createdAt: string;
  updatedAt: string;
}

export interface BusyTemplate {
  id: string;
  name: string; // e.g., "Work", "Class"
  daysOfWeek: DayOfWeek[];
  startTime: string; // HH:mm format
  endTime: string; // HH:mm format
}
