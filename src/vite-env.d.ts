interface ImportMetaEnv{
   readonly VITE_ART_API_URL: string
    readonly VITE_ART_IMPRESSIONISM_PATH: string
    readonly VITE_ART_MODERN_PATH: string
    readonly VITE_ART_IIIF_BASE_URL: string
    readonly VITE_LOGO_API_URL: string
    readonly VITE_LOGO_PUBLISHABLE_API_KEY: string
}
interface ImportMeta {
    readonly env: ImportMetaEnv;
}