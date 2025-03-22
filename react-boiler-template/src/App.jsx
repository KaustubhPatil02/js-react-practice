// import React from 'react'
// import Mobile from './components/Mobile'
// import ChildComponent from './props/ChildComponent'
// import ParentComponent from './props/ParentComponent'
// import Forms from './forms-validation/Forms'
// import FormValidate from './forms-validation/FormValidate'
// import FormValidationHook from './forms-validation/FormValidationHook'
// import KanbanBoard from './components/KanbanBoard'

// const App = () => {
//   return (
//     // <Mobile />
//     <>
//       {/* <ChildComponent/> */}
//       {/* <ParentComponent/> */}
//       {/* <Forms/> */}
//       {/* <FormValidate/> */} 
//       <KanbanBoard/>
//       {/* <FormValidationHook/> */}
//     </>
//   )
// }

// export default App

import Folder from "./components/Folders";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="p-6">
      {/* <h1 className="mb-4 text-xl font-bold">📂 Nested Folder Explorer</h1> */}
      {/* <Folder data={folderData} /> */}
    {/* <Searchable/> */}
    <Todo/>
    </div>
    
  );
}

export default App;
