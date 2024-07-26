export interface IApiResponse<T> {
  limit: number;
  page: number;
  totalCount: number;
  pageCount: number;
  data: T;
}
