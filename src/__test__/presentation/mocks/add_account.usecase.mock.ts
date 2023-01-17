import { AddAccountUsecase } from "@/domain/usecases";

export class AddAccountMock implements AddAccountUsecase {
  async add(params: AddAccountUsecase.Params): Promise<AddAccountUsecase.Model> {
    return new Promise(resolve => resolve({
      accessToken: 'any_token',
      name: 'any_name'
    }))
  }
}