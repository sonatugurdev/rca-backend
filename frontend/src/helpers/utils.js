import { compact } from 'lodash';

export const composeClasses = (classes) => {
  return compact(classes).join(' ');
};

export const FrequencyTypes = {
  aficionado: 'aficionado',
  apprentice: 'apprentice',
  associate: 'associate'
}
