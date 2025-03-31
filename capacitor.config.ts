import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.releaseapp.myapp',
  appName: 'myApp',
  webDir: 'www',
  plugins: {
    LiveUpdates: {
      appId: 'be2141cd',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};

export default config;
