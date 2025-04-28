

// children is the message
function Toast({ type, children}) {
  return (
    <div className={`toast ${type}`}>{children}</div>
  )
}

export default Toast
