type EnvironmentType = 'development' | 'production';

const environmentRootUrl: Record<EnvironmentType, string> = {
    development: 'http://localhost:9090/api',
    production: 'http://api.shuffleroyale.com'
}

export const rootUrl: string = environmentRootUrl[(process.env.NODE_ENV || 'development') as EnvironmentType];