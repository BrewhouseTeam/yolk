/* eslint-disable guard-for-in */

export default function addProperties (base, ...objs) {
  const length = objs.length
  let i = -1

  while (++i < length) {
    const obj = objs[i]

    for (const key in obj) {
      base[key] = obj[key]
    }
  }

  return base
}
