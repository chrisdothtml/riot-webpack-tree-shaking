import riot from 'riot'
import { one } from '../src/index-compiler.js'

// this does not work
// riot.mount(one)

// this works
riot.mount('one')
