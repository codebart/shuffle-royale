type EnvironmentType = 'local' | 'production';

const environmentRootUrl: Record<EnvironmentType, string> = {
    local: 'http://localhost:9090/api',
    production: 'http://api.shuffleroyale.com'
}

export const rootUrl: string = environmentRootUrl[(process.env.NODE_ENV || 'local') as EnvironmentType];