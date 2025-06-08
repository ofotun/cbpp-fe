// Application URLs configuration
export const APP_URLS = {
  // Base URLs for different applications
  HMPP: import.meta.env.VITE_HMPP_URL || 'https://heath-proc.demo.asosconsulting.com/',
  CBPP: import.meta.env.VITE_CBPP_URL || '/cbpp',
  BPP: import.meta.env.VITE_BPP_URL || 'https://bpp.gov.ng',
  
  // API endpoints
  API: {
    BASE: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
    AUTH: import.meta.env.VITE_API_AUTH_URL || '/api/auth',
    USERS: import.meta.env.VITE_API_USERS_URL || '/api/users',
    PROJECTS: import.meta.env.VITE_API_PROJECTS_URL || '/api/projects',
  },
  
  // External services
  EXTERNAL: {
    DOCS: import.meta.env.VITE_DOCS_URL || 'https://docs.cbpp.gov.ng',
    SUPPORT: import.meta.env.VITE_SUPPORT_URL || 'https://support.cbpp.gov.ng',
  }
}; 