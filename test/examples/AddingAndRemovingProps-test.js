import { default as test } from 'tape'
import { h, render } from 'yolk' // eslint-disable-line no-unused-vars
import { default as renderInDoc } from '../helpers/renderInDoc'

test(`AddingAndRemovingProps: addings and removing props after the initial render`, t => {
  t.plan(1)

  const component = <div key="first" />
  const nextComponent = <div className="some-class" key="second" />
  const [node, cleanup] = renderInDoc(component)
  const parent = node.parentNode
  render(nextComponent, parent)

  t.equal(parent.firstChild.className, `some-class`)

  cleanup()
})
