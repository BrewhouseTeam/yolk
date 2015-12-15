import 'document-register-element'

import { default as Rx } from 'rx'
import { default as h } from './createElement'
import { default as DOM } from './HTMLHelpers'
import { default as registerElement } from './registerElement'
import { default as CustomComponent } from './YolkCustomComponent'
import { default as wrapObject } from './wrapObject'
import { render } from './YolkRootComponent'

export {h, DOM, registerElement, CustomComponent, wrapObject, render, Rx}
