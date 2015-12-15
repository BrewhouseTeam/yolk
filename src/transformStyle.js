import { default as isNumber } from './isNumber'

const unitlessNumberProperties = {
  animationIterationCount: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  fillOpacity: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  stopOpacity: true,
  strokeDashoffset: true,
  strokeOpacity: true,
  strokeWidth: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
}

export default function transformStyle (props, style) {
  if (!style) {
    return false
  }

  const keys = Object.keys(style)
  const length = keys.length
  const newStyle = {}

  for (let i = 0; i < length; i++) {
    const key = keys[i]
    const isUnitlessNumber = unitlessNumberProperties[key] || false
    let value = style[key]

    if (!isUnitlessNumber && isNumber(value)) {
      value = `${value}px`
    }

    newStyle[key] = value
  }

  props.style = newStyle

  return props
}
