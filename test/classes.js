import riot from 'riot'
import { one } from '../src/index-classes.js'

// this does not work
// riot.mount(one)

// neither does this
// riot.mount('one')

// this works
new one(
  document.querySelector('[data-is="one"]')
).mount()
