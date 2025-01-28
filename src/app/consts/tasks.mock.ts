import {ITask} from '../interfaces/task.interface';
import {TaskStateEnum, TaskTypeEnum} from '../enums/task.type.enum';

export const mockTasks: ITask[] = [
  {
    id: 1,
    number: 'TR-321',
    icon: 'frontend.svg',
    time: '1ч / 13ч',
    user: null,
    type: TaskTypeEnum.frontend,
    state: TaskStateEnum.execution,
    stages: {
      total: 5,
      passed: 2,
      current: 'work'
    },
    route: [
      {
        text: 'Simplanum',
        icon: 'simplanum.svg'
      },
      {
        text: 'iOS',
        icon: 'ios.svg'
      },
      {
        text: '1.12',
        icon: null
      },
      {
        text: 'Вопрос по процедуре',
        icon: 'feature.svg'
      }
    ],
    title: 'Не отображается текст "Пока нет вопросов", если Заказчик откроет Вопросы по процедуре в которой нет ни одного вопроса',
  },
  {
    id: 2,
    number: 'TR-322',
    icon: 'backend.svg',
    time: '2ч / 13ч',
    user: {
      text: 'Вильгельмина Ш.',
      icon: 'account-logo.svg'
    },
    type: TaskTypeEnum.backend,
    state: TaskStateEnum.coordination,
    stages: {
      total: 4,
      passed: 1,
      current: 'paused'
    },
    route: [
      {
        text: 'Simplanum',
        icon: 'simplanum.svg'
      },
      {
        text: 'iOS',
        icon: 'ios.svg'
      },
      {
        text: '1.12',
        icon: null
      },
      {
        text: 'Вопрос по процедуре',
        icon: 'feature.svg'
      }
    ],
    title: '222 Не отображается текст "Пока нет вопросов", если Заказчик откроет Вопросы по процедуре в которой нет ни одного вопроса',
  },
  {
    id: 3,
    number: 'TR-323',
    icon: 'testing.svg',
    time: '1ч / 13ч',
    user: null,
    type: TaskTypeEnum.testing,
    state: TaskStateEnum.review,
    stages: {
      total: 3,
      passed: 2,
      current: null
    },
    route: [
      {
        text: 'Simplanum',
        icon: 'simplanum.svg'
      },
      {
        text: 'iOS',
        icon: 'ios.svg'
      },
      {
        text: '1.12',
        icon: null
      },
      {
        text: 'Вопрос по процедуре',
        icon: 'feature.svg'
      }
    ],
    title: '333 Не отображается текст "Пока нет вопросов", если Заказчик откроет Вопросы по процедуре в которой нет ни одного вопроса',
  },
  {
    id: 4,
    number: 'TR-324',
    icon: 'design.svg',
    time: '1ч / 13ч',
    user: {
      text: 'Вильгельмина Ш.',
      icon: 'account-logo.svg'
    },
    type: TaskTypeEnum.design,
    state: TaskStateEnum.deploy,
    stages: {
      total: 5,
      passed: 5,
      current: null
    },
    route: [
      {
        text: 'Simplanum',
        icon: 'simplanum.svg'
      },
      {
        text: 'iOS',
        icon: 'ios.svg'
      },
      {
        text: '1.12',
        icon: null
      },
      {
        text: 'Вопрос по процедуре',
        icon: 'feature.svg'
      }
    ],
    title: '444 Не отображается текст "Пока нет вопросов", если Заказчик откроет Вопросы по процедуре в которой нет ни одного вопроса',
  },
  {
    id: 5,
    number: 'TR-325',
    icon: 'frontend.svg',
    time: '1ч / 13ч',
    user: null,
    type: TaskTypeEnum.analytics,
    state: TaskStateEnum.execution,
    stages: {
      total: 4,
      passed: 2,
      current: null
    },
    route: [
      {
        text: 'Simplanum',
        icon: 'simplanum.svg'
      },
      {
        text: 'iOS',
        icon: 'ios.svg'
      },
      {
        text: '1.12',
        icon: null
      },
      {
        text: 'Вопрос по процедуре',
        icon: 'feature.svg'
      }
    ],
    title: '5555 Не отображается текст "Пока нет вопросов", если Заказчик откроет Вопросы по процедуре в которой нет ни одного вопроса',
  },
  {
    id: 6,
    number: 'TR-326',
    icon: 'frontend.svg',
    time: '1ч / 13ч',
    user: {
      text: 'Вильгельмина Ш.',
      icon: 'account-logo.svg'
    },
    type: TaskTypeEnum.frontend,
    state: TaskStateEnum.closed,
    stages: {
      total: 5,
      passed: 2,
      current: null
    },
    route: [
      {
        text: 'Simplanum',
        icon: 'simplanum.svg'
      },
      {
        text: 'iOS',
        icon: 'ios.svg'
      },
      {
        text: '1.12',
        icon: null
      },
      {
        text: 'Вопрос по процедуре',
        icon: 'feature.svg'
      }
    ],
    title: '6666 Не отображается текст "Пока нет вопросов", если Заказчик откроет Вопросы по процедуре в которой нет ни одного вопроса',
  },
  {
    id: 7,
    number: 'TR-327',
    icon: 'testing.svg',
    time: '1ч / 13ч',
    user: {
      text: 'Вильгельмина Ш.',
      icon: 'account-logo.svg'
    },
    type: TaskTypeEnum.testing,
    state: TaskStateEnum.coordination,
    stages: {
      total: 3,
      passed: 0,
      current: null
    },
    route: [
      {
        text: 'Simplanum',
        icon: 'simplanum.svg'
      },
      {
        text: 'iOS',
        icon: 'ios.svg'
      },
      {
        text: '1.12',
        icon: null
      },
      {
        text: 'Вопрос по процедуре',
        icon: 'feature.svg'
      }
    ],
    title: '77777 Не отображается текст "Пока нет вопросов", если Заказчик откроет Вопросы по процедуре в которой нет ни одного вопроса',
  },
  {
    id: 8,
    number: 'TR-328',
    icon: 'frontend.svg',
    time: '1ч / 13ч',
    user: null,
    type: TaskTypeEnum.frontend,
    state: TaskStateEnum.testing,
    stages: {
      total: 2,
      passed: 2,
      current: null
    },
    route: [
      {
        text: 'Simplanum',
        icon: 'simplanum.svg'
      },
      {
        text: 'iOS',
        icon: 'ios.svg'
      },
      {
        text: '1.12',
        icon: null
      },
      {
        text: 'Вопрос по процедуре',
        icon: 'feature.svg'
      }
    ],
    title: '888 Не отображается текст "Пока нет вопросов", если Заказчик откроет Вопросы по процедуре в которой нет ни одного вопроса',
  },
  {
    id: 9,
    number: 'TR-329',
    icon: 'frontend.svg',
    time: '1ч / 13ч',
    user: null,
    type: TaskTypeEnum.frontend,
    state: TaskStateEnum.execution,
    stages: {
      total: 6,
      passed: 1,
      current: null
    },
    route: [
      {
        text: 'Simplanum',
        icon: 'simplanum.svg'
      },
      {
        text: 'iOS',
        icon: 'ios.svg'
      },
      {
        text: '1.12',
        icon: null
      },
      {
        text: 'Вопрос по процедуре',
        icon: 'feature.svg'
      }
    ],
    title: '9999 Не отображается текст "Пока нет вопросов", если Заказчик откроет Вопросы по процедуре в которой нет ни одного вопроса',
  },
  {
    id: 10,
    number: 'TR-320',
    icon: 'frontend.svg',
    time: '1ч / 13ч',
    user: {
      text: 'Вильгельмина Ш.',
      icon: 'account-logo.svg'
    },
    type: TaskTypeEnum.frontend,
    state: TaskStateEnum.coordination,
    stages: {
      total: 5,
      passed: 2,
      current: null
    },
    route: [
      {
        text: 'Simplanum',
        icon: 'simplanum.svg'
      },
      {
        text: 'iOS',
        icon: 'ios.svg'
      },
      {
        text: '1.12',
        icon: null
      },
      {
        text: 'Вопрос по процедуре',
        icon: 'feature.svg'
      }
    ],
    title: '101010 Не отображается текст "Пока нет вопросов", если Заказчик откроет Вопросы по процедуре в которой нет ни одного вопроса',
  },

]
