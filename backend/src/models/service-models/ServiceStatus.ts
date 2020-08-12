export class ServiceStatus {
  constructor(
    public readonly service: string,
    public readonly status: string,
    public readonly checkAt: Date
  ) {}
}
