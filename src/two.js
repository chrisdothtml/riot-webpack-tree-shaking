import { Tag } from 'riot'

export default class extends Tag {
  get name () {
    return 'two'
  }

  get tmpl () {
    return `<span>This is tag two</span>`
  }
}
