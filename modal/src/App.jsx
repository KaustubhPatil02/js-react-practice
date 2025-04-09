import React, { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="App">
      <h1 className="text-">Reusable Modal Example</h1>
      <button
        onClick={handleOpenModal}
        className="px-4 py-2 text-white bg-blue-500 rounded"
      >
        Open Modal
      </button>

      {/* Modal Component */}
      <Modal
        title="Modal Title"
        show={showModal}
        onClose={handleCloseModal}
      >
        <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
      </Modal>
    </div>
  );
};

export default App;