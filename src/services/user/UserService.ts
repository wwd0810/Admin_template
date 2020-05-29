import qs from "query-string";

import client from "lib/client";

class UserService {
  public LoginAPI(data: FormData) {
    return client.post(`/api/admin/admin-login`, data);
  }

  public GetUserListAPI(id?: string, name?: string, phone?: string) {
    return client.get(`/api/users/users-select`, { params: { id: id, name: name, phone: phone } });
  }

  public PutUserPointAPI(idx: number, point: number) {
    return client.put(`/api/users/user-update-point`, qs.stringify({ idx: idx, point: point }));
  }

  public PutUserLevelAPI(idx: number, type: number) {
    return client.put(`/api/users/user-update-type`, qs.stringify({ idx, type }));
  }

  public PutRecoAPI(idx: number, id: string, recoCode: string) {
    return client.put(`/api/users/reco-update`, qs.stringify({ idx, id, recoCode }));
  }

  public GetRecoNoneAPI() {
    return client.get(`/api/users/reco-none-user`);
  }

  public GetPremium() {
    return client.get(`/api/admin/select-premium`);
  }

  public PostPremium(idx: number, content: string) {
    return client.put(`/api/admin/update-premium`, qs.stringify({ idx, content }));
  }

  public GetRewardUser(idx: number) {
    return client.get(`/api/users/get-reword-user`, { params: { idx: idx } });
  }
}

export default new UserService();
