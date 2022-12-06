export interface GetAuthTokenUsecase {
  get(): Promise<GetAuthTokenUsecase.Model>
}

export namespace GetAuthTokenUsecase {
  export type Params = {}
  export type Model = { accessToken: string }
}
