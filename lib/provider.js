'use babel';

const self = '[build-rscript] ';
const debug = atom.config.get('build-rscript.debug');

import {exec} from 'child_process';

export function provideBuilder() {
  return class RscriptProvider {
    constructor(cwd) {
      this.cwd = cwd;
    }

    getNiceName() {
      return 'Rscript';
    }

    isEligible() {
      exec('which Rscript', function (error, stdout, stderr) {
        if (error !== null) {
          if (debug === true) console.log(self + error);
          // No Rscript installed
          return false;
        }
        if (debug === true) console.log(self + stdout);
      });
      // Let's go!
      return true;
    }

    settings() {
      const errorMatch = [
      ];

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
