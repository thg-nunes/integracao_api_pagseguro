export class ErrorRequest {
  constructor(public message: string, public status: number = 400){
    this.message = message
    this.status = status
  }
}
