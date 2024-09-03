import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['gitmoji'],
  rules: {
    'footer-leading-blank': [0],
    'header-max-length': [0],
    'subject-empty': [2, 'never'],
    'type-empty': [0, 'never'],
  },
};

export default Configuration;
