import { GetAuthTokenUsecase } from "@/domain/usecases";

export class GetAuthTokenMock implements GetAuthTokenUsecase {
  async get(): Promise<GetAuthTokenUsecase.Model> {
    return new Promise(resolve => resolve({ accessToken: 'any_token' }))
  }
}