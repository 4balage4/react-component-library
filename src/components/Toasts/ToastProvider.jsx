import {createContext, useContext, useState} from 'react'
import Toast from './Toast'

// toast context
const ToastContext = createContext()


function ToastProvider({children}) {

  // toast array
  const [toasts, setToasts] = useState([])


  // function to add toasts to the array and set timeout to delete them
  // takes two arguement. message string, type (can be anything but the styles have only alert, neutral, success)
  const addToast = (message, type) => {
    const id = Date.now()
    setToasts(prev => [...prev, {id, message, type}])


    // set timeout to 3 sec and filter out the toast
    setTimeout(() => {
      setToasts((prev) => prev.filter(toast => toast.id !== id))
    }, 3000)
  }
  return (
    // the function is passed so we can extract the function in other components
    <ToastContext.Provider value={{addToast}}>
      {/* rendering children. This is the rest of the app */}
      {children}
      <div className="toast-container">
          {toasts.map((toast) => {
            return (<Toast key={toast.id} type={toast.type}>{toast.message}</Toast>)
          })}
      </div>
      </ToastContext.Provider>

  )
}

export default ToastProvider


// creating a custom hook
export const useToast = () => useContext(ToastContext)
