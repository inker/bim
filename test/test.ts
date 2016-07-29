import { BiMap } from '../src/bim';

const m = new BiMap<string, number>();
m.set("foo", 3);
m.set("bar", 12);
m.set("qux", 10);
// m.set("qux", 10);
m.delete("bar");
m.deleteValue(3);
m.set("refre", 15);
m.set("aaaa", 15);
m.set("bbb", 10);
m.set("aaaa", 155);
m.set("aaaa", undefined);
m.set("bbb", undefined);
m.set("c", 15);
//m.set(undefined, 15)
m.set("zz", 20);
//m.set(undefined, undefined);
m.set('zz', undefined);
m.set('poo', 15);
m.set('yy', undefined);
m.set('yy', 20);
m.set(undefined, 25);
m.set('yy', 100);
m.set(undefined, 125);
//m.deleteValue(undefined);
console.log(m);
console.log(m.getKey(15), m.has(undefined));
for (let it = m.entries(), res = it.next(); !res.done; res = it.next()) {
    console.log(res.value);
}