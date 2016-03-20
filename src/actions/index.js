export const APPLICATION_STARTED = 'APPLICATION_STARTED';

export function applicationStarted(status) {
  return {
    type: APPLICATION_STARTED,
    status
  };
}

export * from './data/index';
export * from './ui/index';
