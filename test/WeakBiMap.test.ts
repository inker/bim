import { WeakBiMap } from '../src'

describe('WeakBiMap', () => {
  it('should be empty at the start', () => {
    const m = new WeakBiMap()
    expect(m).toMatchSnapshot()
  })

  it('should set correctly', () => {
    const a = { a: 1 }
    const b = { b: 2 }
    const c = { c: 3 }
    const d = { d: 4 }
    const m = new WeakBiMap<{ [key: string]: number }, { [key: string]: number }>()
    m.set(a, c)
    m.set(b, d)

    expect(m.get(a)).toBe(c)
    expect(m.getKey(c)).toBe(a)
    expect(m.get(b)).toBe(d)
    expect(m.getKey(d)).toBe(b)
  })

  it('should accept array of entries', () => {
    const a = { a: 1 }
    const b = { b: 2 }
    const c = { c: 3 }
    const d = { d: 4 }
    const m = new WeakBiMap<{ [key: string]: number }, { [key: string]: number }>([
      [a, c],
      [b, d],
    ])

    expect(m.get(a)).toBe(c)
    expect(m.getKey(c)).toBe(a)
    expect(m.get(b)).toBe(d)
    expect(m.getKey(d)).toBe(b)
  })

  it('should get & delete key correctly', () => {
    const a = { a: 1 }
    const b = { b: 2 }
    const c = { c: 3 }
    const d = { d: 4 }
    const m = new WeakBiMap<{ [key: string]: number }, { [key: string]: number }>([
      [a, c],
      [b, d],
    ])

    expect(m.get(a)).toBe(c)
    expect(m.getKey(c)).toBe(a)
    m.delete(a)
    expect(m.get(a)).toBe(undefined)
    expect(m.getKey(c)).toBe(undefined)
    expect(m.get(b)).toBe(d)
    expect(m.getKey(d)).toBe(b)
  })

  it('should get & delete value correctly', () => {
    const a = { a: 1 }
    const b = { b: 2 }
    const c = { c: 3 }
    const d = { d: 4 }
    const m = new WeakBiMap<{ [key: string]: number }, { [key: string]: number }>([
      [a, c],
      [b, d],
    ])

    expect(m.get(a)).toBe(c)
    expect(m.getKey(c)).toBe(a)
    m.deleteValue(c)
    expect(m.get(a)).toBe(undefined)
    expect(m.getKey(c)).toBe(undefined)
    expect(m.get(b)).toBe(d)
    expect(m.getKey(d)).toBe(b)
  })

  it('should should ignore non-existing values', () => {
    const a = { a: 1 }
    const b = { b: 2 }
    const c = { c: 3 }
    const d = { d: 4 }
    const m = new WeakBiMap<{ [key: string]: number }, { [key: string]: number }>([
      [a, c],
      [b, d],
    ])

    expect(m.get(a)).toBe(c)
    expect(m.getKey(c)).toBe(a)
    m.deleteValue({})
    expect(m.get(a)).toBe(c)
    expect(m.getKey(c)).toBe(a)
    expect(m.get(b)).toBe(d)
    expect(m.getKey(d)).toBe(b)
  })

  it('should change value', () => {
    const a = { a: 1 }
    const b = { b: 2 }
    const c = { c: 3 }
    const d = { d: 4 }
    const m = new WeakBiMap<{ [key: string]: number }, { [key: string]: number }>([
      [a, c],
      [b, d],
    ])

    const e = { e: 5 }
    m.set(a, e)
    expect(m.get(a)).toBe(e)
    expect(m.getKey(e)).toBe(a)
    expect(m.getKey(c)).toBe(undefined)
    expect(m.get(b)).toBe(d)
    expect(m.getKey(d)).toBe(b)
  })

  it('should should have working has', () => {
    const a = { a: 1 }
    const b = { b: 2 }
    const c = { c: 3 }
    const d = { d: 4 }
    const m = new WeakBiMap<{ [key: string]: number }, { [key: string]: number }>([
      [a, c],
      [b, d],
    ])

    const e = { e: 5 }
    expect(m.has(a)).toBe(true)
    expect(m.hasValue(c)).toBe(true)
    m.set(a, e)
    expect(m.has(a)).toBe(true)
    expect(m.hasValue(e)).toBe(true)
    expect(m.hasValue(c)).toBe(false)
    expect(m.has(b)).toBe(true)
    expect(m.hasValue(d)).toBe(true)
  })
})
