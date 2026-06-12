export function buildUtmUrl(baseUrl: string, campaign: string): string {
  try {
    const url = new URL(baseUrl);
    url.searchParams.set("utm_source", "portfolio");
    url.searchParams.set("utm_medium", "referral");
    url.searchParams.set("utm_campaign", campaign);
    return url.toString();
  } catch {
    // If baseUrl is invalid (e.g., placeholder "#"), fall back to a simple query string append
    if (baseUrl.includes("?")) {
      return `${baseUrl}&utm_source=portfolio&utm_medium=referral&utm_campaign=${campaign}`;
    }
    return `${baseUrl}?utm_source=portfolio&utm_medium=referral&utm_campaign=${campaign}`;
  }
}
