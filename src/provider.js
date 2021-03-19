import { configSchema, getConfig } from './config';
import { EventEmitter } from 'events';
import { satisfyDependencies } from 'atom-satisfy-dependencies';
import { spawnSync } from 'child_process';
import { which } from './util';

export { configSchema as config };

export function provideBuilder() {
  return class RscriptProvider extends EventEmitter {
    constructor(cwd) {
      super();
      this.cwd = cwd;
      atom.config.observe('build-rscript.customArguments', () => this.emit('refresh'));
    }

    getNiceName() {
      return 'Rscript';
    }

    isEligible() {
      if (getConfig('alwaysEligible') === true) {
        return true;
      }

      const cmd = spawnSync(which(), ['Rscript']);
      if (!cmd.stdout.toString()) {
        return false;
      }

      return true;
    }

    settings() {
      // User settings
      const customArguments = getConfig('customArguments').trim().split(' ');

      return [
        {
          name: 'Rscript',
          exec: 'Rscript',
          args: [ '{FILE_ACTIVE}' ],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          atomCommandName: 'rscript:run'
        },
        {
          name: 'Rscript (user)',
          exec: 'Rscript',
          args: customArguments,
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          atomCommandName: 'rscript:run-with-custom-arguments'
        }
      ];
    }
  };
}

// This package depends on build, make sure it's installed
export function activate() {
  if (getConfig('manageDependencies') === true) {
    satisfyDependencies('build-rscript');
  }
}
