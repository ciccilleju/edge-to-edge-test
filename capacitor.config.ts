import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'edge-to-edge',
  webDir: 'www',
  plugins: {

    "EdgeToEdge": {
      "backgroundColor": "#ffffff",
      "navigationBarColor": "#f8f9fa",
      "statusBarColor": "#ff7600"
    }
  }


};

export default config;
