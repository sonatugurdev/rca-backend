import { compact } from 'lodash';

export const composeClasses = (classes) => {
  return compact(classes).join(' ');
};
