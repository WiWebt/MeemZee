import config from './config.json';
import type { Config, ConfigData, Environment } from './types';

class ConfigProvider {
  private static instance: ConfigProvider;
  private config: Config = config;

  private constructor() {}

  public static getInstance(): ConfigProvider {
    if (!ConfigProvider.instance) {
      ConfigProvider.instance = new ConfigProvider();
    }
    return ConfigProvider.instance;
  }

  private getEnvironment(): Environment {
    return (process.env.LANG_GANG_PROFILE || 'dev') as Environment;
  }

  public get<K extends keyof ConfigData>(key: K): ConfigData[K] {
    const env = this.getEnvironment();

    if (!this.config[env]) {
      throw new Error(
        `Invalid environment: ${env}. Must be one of ${Object.keys(this.config)}`
      );
    }

    if (!(key in this.config[env])) {
      throw new Error(`Configuration key '${key}' not found in ${env} environment`);
    }

    return this.config[env][key];
  }
}

export const configProvider = ConfigProvider.getInstance();
