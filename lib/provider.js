'use babel';

import { install } from 'atom-package-deps';
import { execSync } from 'child_process';

// Package settings
import meta from '../package.json';
const notEligible = `**${meta.name}**: \`Rscript\` is not in your PATH`;

// This package depends on build, make sure it's installed
export function activate() {
  if (!atom.inSpecMode()) {
    install(meta.name);
  }
}

export function provideBuilder() {
  return class RscriptProvider {
    constructor(cwd) {
      this.cwd = cwd;
    }

    getNiceName() {
      return 'Rscript';
    }

    isEligible() {
      try {
        execSync('Rscript --version');
        if (atom.inDevMode()) atom.notifications.addError(notEligible, { detail: error, dismissable: true });
        return true;
      } catch (e) {
        if (atom.inDevMode()) atom.notifications.addInfo(`**${meta.name}**`, { detail: stdout, dismissable: false });
        return false;
      }
    }

    settings() {
      return [
        {
          name: 'Rscript',
          exec: 'Rscript',
          args: [ '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          atomCommandName: 'rscript:run'
        }
      ];
    }
  };
}
