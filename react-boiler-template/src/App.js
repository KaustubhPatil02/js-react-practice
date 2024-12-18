import React from 'react'
import Mobile from './components/Mobile'
import ChildComponent from './props/ChildComponent'
import ParentComponent from './props/ParentComponent'
import Forms from './forms-validation/Forms'
import FormValidate from './forms-validation/FormValidate'
import FormValidationHook from './forms-validation/FormValidationHook'

const App = () => {
  return (
    // <Mobile />
    <>
      {/* <ChildComponent/> */}
      {/* <ParentComponent/> */}
      {/* <Forms/> */}
      {/* <FormValidate/> */} 
      <FormValidationHook/>
    </>
  )
}

export default App