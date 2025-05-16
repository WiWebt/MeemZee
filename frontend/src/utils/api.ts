interface RetryConfig {
  maxRetries?: number;
  delayMs?: number;
  backoffFactor?: number;
}

export async function fetchWithRetry(
  path: string,
  options: RequestInit = {},
  retryConfig: RetryConfig = {}
) {
  const {
    maxRetries = 3,
    delayMs = 1000,
    backoffFactor = 2,
  } = retryConfig;

  let lastError: Error | null = null;
  let currentDelay = delayMs;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const domain = process.env.API_URL || 'http://localhost:8000';
      const response = await fetch(`${domain}${path}`, options);
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }
      
      return response;
    } catch (error) {
      lastError = error as Error;
      
      if (attempt < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, currentDelay));
        currentDelay *= backoffFactor;
      }
    }
  }

  throw lastError || new Error('Failed after retry attempts');
}
