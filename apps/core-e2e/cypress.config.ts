import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: { default: 'nx run core:start' },
      ciWebServerCommand: 'nx run core:serve-static',
    }),
    baseUrl: 'http://localhost:3000',
  },
});
