export interface Task {
  id: string;
  label: string;
  time: TaskTime;
}

export interface TaskTime {
  hours: number;
  minutes: number;
  seconds: number;
}
