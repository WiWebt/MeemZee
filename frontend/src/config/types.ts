export type Environment = 'dev' | 'prod';

export interface ConfigData {
  apiBaseUrl: string;
  websocketUrl: string;
  analyticsEnabled: boolean;
  logLevel: string;
}

export interface Config {
  [key: string]: ConfigData;
}
