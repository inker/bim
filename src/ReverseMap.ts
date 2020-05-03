export default interface ReverseMap<K, V> {
  deleteValue(value: V): boolean,
  getKey(value: V): K | undefined,
  hasValue(value: V): boolean,
}
