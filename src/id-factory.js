export default class IdFactory {
  static getIds(count) {
    return new Array(count).fill(0).map((item, index) => ({ id: index + 1 }));
  }
}