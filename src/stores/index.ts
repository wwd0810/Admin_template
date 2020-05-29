import UserStore from "./user";

class RootStore {
  userStore: UserStore;
  constructor() {
    this.userStore = new UserStore(this);
  }
}
export default RootStore;
