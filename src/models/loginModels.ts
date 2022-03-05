export interface LoginResponse {
  token: string;
  type: string;
  sub: string;
}

export interface LoginRequest {
  sub: string;
}
