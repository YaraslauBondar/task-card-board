import {TaskStateEnum, TaskTypeEnum} from '../enums/task.type.enum';

export interface ITask {
  id: number;
  number: string;
  time: string;
  user: ITaskInfo | null;
  type: TaskTypeEnum;
  state: TaskStateEnum;
  stages: ITaskStage;
  route: ITaskInfo[];
  title: string;
  icon: string;
}

export interface ITaskInfo {
  text: string;
  icon: string | null;
}

export interface ITab {
  text: string;
  link: string;
  icon?: string;
}

export interface ITaskStage {
  total: number;
  passed: number;
  current: 'work' | 'paused' | null;
}
