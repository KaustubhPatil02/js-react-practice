import React, { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [showFirstModal, setShowFirstModal] = useState(false); // State for the first modal
  const [showSecondModal, setShowSecondModal] = useState(false); // State for the second modal

  const handleOpenFirstModal = () => setShowFirstModal(true);
  const handleCloseFirstModal = () => setShowFirstModal(false);

  const handleOpenSecondModal = () => setShowSecondModal(true);
  const handleCloseSecondModal = () => setShowSecondModal(false);
  return (
    <div className="App">
      <h1 className="p-3 mt-2 text-2xl ">Reusable Modal Example</h1>
     <div className="flex flex-col gap-4 p-4 w-lg">
     <button
        onClick={handleOpenFirstModal}
        className="px-4 py-2 text-white bg-blue-500 rounded cursor-pointer"
      >
        Open Modal
      </button>

      <button
        onClick={handleOpenSecondModal}
        className="px-4 py-2 text-white bg-blue-500 rounded cursor-pointer"
      >
        Open another Modal
      </button>
     </div>

      {/* Modal Component */}
      <Modal
        title="Modal Title"
        show={showFirstModal}
        onClose={handleCloseFirstModal}
      >
        <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
      </Modal>

      <Modal
        title="Another Modal"
        show={showSecondModal}
        onClose={handleCloseSecondModal}
      >
        <p>This is a second modal which is reusing the same modal logic</p>
      </Modal>
    </div>
  );
};

export default App;