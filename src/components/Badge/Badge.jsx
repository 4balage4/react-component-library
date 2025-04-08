
// The badge component:
  // will have two styles
  // if children not passed then it will say "Badge"
 // user can pass a prop as a color

function Badge({children, color, shape, textColor}) {

  // if shape is not passed then it will be square
  const form = shape === 'pill' ? 'pill' : 'square'
  // if color, bg color is not passed then it will be gray
  const colorB = color ? color : 'gray'
  const textColorB = textColor ? textColor : 'white'

  return (
    <div className={`badge ${form}`} style={{backgroundColor: colorB, color: textColorB}}>
      {children ? children : 'Badge'}
    </div>

  )
}

export default Badge
