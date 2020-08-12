export class ServiceError {
  public static ProcessError(service: string): string {
    return `\n > [${service}] An error occurred while processing your request.`;
  }
}
