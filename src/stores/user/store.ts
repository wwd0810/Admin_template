import { observable, flow, computed, action } from "mobx";

import BaseStore from "stores/BaseStore";
import RootStore from "stores";

import { UserType, PremiumType } from "./types";
import UserService from "services/user/UserService";

class UserStore extends BaseStore {
  root: RootStore;

  constructor(root: RootStore) {
    super();
    this.root = root;
  }

  @observable
  private _isLoggedIn = false;

  @observable
  private _userType?: number;

  @observable
  private _userList: UserType[] = [];

  @observable
  private _recoList: UserType[] = [];

  @observable
  private _rewardList: UserType[] = [];

  @observable
  private _premium?: PremiumType;

  @computed
  get IsLoggedIn() {
    return this._isLoggedIn;
  }

  @computed
  get UserType() {
    return this._userType;
  }

  @computed
  get UserList() {
    return this._userList;
  }

  @computed
  get RecoList() {
    return this._recoList;
  }

  @computed
  get RewardList() {
    return this._rewardList;
  }

  @computed
  get Premium() {
    return this._premium;
  }

  @action
  public logout() {
    this._isLoggedIn = false;
    this._userType = undefined;
  }

  login = flow(function* (this: UserStore, id: string, pw: string) {
    this._init("LOGIN");
    try {
      const form = new FormData();
      form.set("id", id);
      form.set("pass", pw);

      const res = yield UserService.LoginAPI(form);

      this._userType = res.data.data;
      this._isLoggedIn = true;

      this._success["LOGIN"] = true;
    } catch (e) {
      this._failure["LOGIN"] = [true, e];
    } finally {
      this._pending["LOGIN"] = false;
    }
  });

  GetUserList = flow(function* (this: UserStore, id?: string, name?: string, phone?: string) {
    this._init("GET_USER_LIST");

    try {
      const {
        data: res,
      }: {
        data: ApiResult<UserType[]>;
      } = yield UserService.GetUserListAPI(id, name, phone);

      this._userList = res.data;

      this._success["GET_USER_LIST"] = true;
    } catch (e) {
      this._failure["GET_USER_LIST"] = [true, e];
    } finally {
      this._pending["GET_USER_LIST"] = false;
    }
  });

  PutUserPoint = flow(function* (this: UserStore, idx: number, point: number) {
    this._init("PUT_USER_POINT");

    try {
      yield UserService.PutUserPointAPI(idx, point);

      this._success["PUT_USER_POINT"] = true;
    } catch (e) {
      this._failure["PUT_USER_POINT"] = [true, e];
    } finally {
      this._pending["PUT_USER_POINT"] = false;
    }
  });

  PutUserLevel = flow(function* (this: UserStore, idx: number, type: number) {
    this._init("PUT_USER_LEVEL");

    try {
      yield UserService.PutUserLevelAPI(idx, type);

      this._success["PUT_USER_LEVEL"] = true;
    } catch (e) {
      this._failure["PUT_USER_LEVEL"] = [true, e];
    } finally {
      this._pending["PUT_USER_LEVEL"] = false;
    }
  });

  PutReco = flow(function* (this: UserStore, idx: number, id: string, recoCode: string) {
    this._init("PUT_RECO");
    try {
      yield UserService.PutRecoAPI(idx, id, recoCode);

      this._success["PUT_RECO"] = true;
    } catch (e) {
      this._failure["PUT_RECO"] = [true, e];
    } finally {
      this._pending["PUT_RECO"] = false;
    }
  });

  GetPremium = flow(function* (this: UserStore) {
    this._init("GET_PREMIUM");

    try {
      const {
        data: res,
      }: {
        data: ApiResult<PremiumType[]>;
      } = yield UserService.GetPremium();

      this._premium = res.data[0];
      this._success["GET_PREMIUM"] = true;
    } catch (e) {
      this._failure["GET_PREMIUM"] = [true, e];
    } finally {
      this._pending["GET_PREMIUM"] = false;
    }
  });

  GetRecoList = flow(function* (this: UserStore) {
    this._init("GET_RECO_LIST");

    try {
      const {
        data: res,
      }: {
        data: ApiResult<UserType[]>;
      } = yield UserService.GetRecoNoneAPI();

      this._recoList = res.data;

      this._success["GET_RECO_LIST"] = true;
    } catch (e) {
      this._failure["GET_RECO_LIST"] = [true, e];
    } finally {
      this._pending["GET_RECO_LIST"] = false;
    }
  });

  GetRewardList = flow(function* (this: UserStore, idx: number) {
    this._init("GET_REWARD_LIST");

    try {
      const {
        data: res,
      }: {
        data: ApiResult<UserType[]>;
      } = yield UserService.GetRewardUser(idx);

      this._rewardList = res.data;

      this._success["GET_REWARD_LIST"] = true;
    } catch (e) {
      this._failure["GET_REWARD_LIST"] = [true, e];
    } finally {
      this._pending["GET_REWARD_LIST"] = false;
    }
  });

  PutPremium = flow(function* (this: UserStore, idx: number, content: string) {
    this._init("PUT_PREMIUM");

    try {
      yield UserService.PostPremium(idx, content);

      this._success["PUT_PREMIUM"] = true;
    } catch (e) {
      this._failure["PUT_PREMIUM"] = [true, e];
    } finally {
      this._pending["PUT_PREMIUM"] = false;
    }
  });
}

export default UserStore;
