import { BiMap } from '../src'

describe('BiMap', () => {
  it('should be empty at the start', () => {
    const m = new BiMap()
    expect(m).toMatchSnapshot()
  })

  it('should set correctly', () => {
    const m = new BiMap<string, number>()
    m.set('foo', 3)
    m.set('bar', 5)
    expect(m).toMatchSnapshot()
  })

  it('should accept array of entries', () => {
    const prodedural = new BiMap()
    prodedural.set('foo', 3)
    prodedural.set('bar', 5)

    const fromEntries = new BiMap([
      ['foo', 3],
      ['bar', 5],
    ])

    expect(fromEntries).toMatchSnapshot()
    expect(fromEntries).toEqual(prodedural)
  })

  it('should delete key correctly', () => {
    const m = new BiMap([
      ['foo', 3],
      ['bar', 5],
    ])

    m.delete('foo')
    expect(m).toMatchSnapshot()
  })

  it('should should ignore non-existing keys', () => {
    const m = new BiMap([
      ['foo', 3],
      ['bar', 5],
    ])

    m.delete('qux')
    expect(m).toMatchSnapshot()
  })

  it('should delete value correctly', () => {
    const m = new BiMap([
      ['foo', 3],
      ['bar', 5],
    ])

    m.deleteValue(3)
    expect(m).toMatchSnapshot()
  })

  it('should should ignore non-existing values', () => {
    const m = new BiMap([
      ['foo', 3],
      ['bar', 5],
    ])

    m.deleteValue(-1)
    expect(m).toMatchSnapshot()
  })

  it('should change value', () => {
    const m = new BiMap([
      ['foo', 3],
      ['bar', 5],
    ])

    m.set('foo', -1)
    expect(m).toMatchSnapshot()
  })

  it('should should have working get', () => {
    const m = new BiMap([
      ['foo', 3],
      ['bar', 5],
    ])

    expect(m.get('foo')).toBe(3)
    expect(m.getKey(3)).toBe('foo')

    expect(m.get('qux')).toBe(undefined)
  })

  it('should should have working has', () => {
    const m = new BiMap([
      ['foo', 3],
      ['bar', 5],
    ])

    expect(m.has('foo')).toBe(true)
    expect(m.hasValue(3)).toBe(true)

    expect(m.has('qux')).toBe(false)
    expect(m.hasValue(-1)).toBe(false)
  })

  it('should have working forEach', () => {
    const m = new BiMap([
      ['foo', 3],
      ['bar', 5],
    ])

    const arr: [string, number][] = []
    m.forEach((v, k) => {
      arr.push([k, v])
    })

    expect(arr).toMatchSnapshot()
  })

  it('should clear', () => {
    const m = new BiMap([
      ['foo', 3],
      ['bar', 5],
    ])

    m.clear()
    expect(m).toMatchSnapshot()
  })

  it('should get keys', () => {
    const m = new BiMap([
      ['foo', 3],
      ['bar', 5],
    ])

    expect([...m.keys()]).toMatchSnapshot()
  })

  it('should get values', () => {
    const m = new BiMap([
      ['foo', 3],
      ['bar', 5],
    ])

    expect([...m.values()]).toMatchSnapshot()
  })

  it('should get entries', () => {
    const m = new BiMap([
      ['foo', 3],
      ['bar', 5],
    ])

    expect([...m.entries()]).toMatchSnapshot()
  })

  it('should get entries by spread', () => {
    const m = new BiMap([
      ['foo', 3],
      ['bar', 5],
    ])

    expect([...m]).toMatchSnapshot()
  })

  it('should iterate keys', () => {
    const m = new BiMap([
      ['foo', 3],
      ['bar', 5],
    ])

    const arr = []
    for (const key of m.keys()) {
      arr.push(key)
    }
    expect(arr).toMatchSnapshot()
  })

  it('should iterate values', () => {
    const m = new BiMap([
      ['foo', 3],
      ['bar', 5],
    ])

    const arr = []
    for (const val of m.values()) {
      arr.push(val)
    }
    expect(arr).toMatchSnapshot()
  })

  it('should iterate entries', () => {
    const m = new BiMap([
      ['foo', 3],
      ['bar', 5],
    ])

    const arr = []
    for (const pair of m.entries()) {
      arr.push(pair)
    }
    expect(arr).toMatchSnapshot()
  })

  it('should iterate entries (without .entries())', () => {
    const m = new BiMap([
      ['foo', 3],
      ['bar', 5],
    ])

    const arr = []
    for (const pair of m) {
      arr.push(pair)
    }
    expect(arr).toMatchSnapshot()
  })

  it('should return correct size', () => {
    const m = new BiMap([
      ['foo', 3],
      ['bar', 5],
    ])

    expect(m.size).toBe(2)
  })
})
