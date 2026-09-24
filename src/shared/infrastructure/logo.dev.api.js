const logoApiUrl = import.meta.env.VITE_LOGO_API_URL;
const apiKey = import.meta.env.VITE_LOGO_PUBLISHABLE_API_KEY;

export class LogoDevApi {
    getURLToLogo = (source) => {const rawUrl = typeof source === 'string' ? source : source?.url?.toString();const host = rawUrl ? new URL(rawUrl.startsWith('http') ? rawUrl : `https://${rawUrl}`).host : 'artic.edu';return `${logoApiUrl}/${host}?token=${apiKey}`;
    };
}