import { Tag } from 'riot'

export default class extends Tag {
  get name () {
    return 'one'
  }

  get tmpl () {
    return `<span>This is tag one</span>`
  }
}
