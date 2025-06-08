/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HMPP_URL: string
  readonly VITE_CBPP_URL: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_API_AUTH_URL: string
  readonly VITE_API_USERS_URL: string
  readonly VITE_API_PROJECTS_URL: string
  readonly VITE_DOCS_URL: string
  readonly VITE_SUPPORT_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 