import React, { useState } from 'react'
import Modal from './components/Modal';

const App1 = () => {
    const [showModal, setshowModal] = useState(false);
    const handleOpenModal =() =>setshowModal(true);
    const handleCloseModal = () =>setshowModal(false);

  return (
    <div>
        <div className='p-4 '>
            <h1 className='text-2xl'>Full Code Modal</h1>
            <button
                onClick={handleOpenModal}
                className='bg-blue-200 rounded-md cursor-pointer p-1.5 mt-2'
            >
                Open Full code Modal
            </button>

            <Modal
                title="Full Code Modal"
                show={showModal}
                onClose={handleCloseModal}
             
            >
                <p>This is a text by kaustubh</p>
            </Modal>

        </div>
    </div>
  )
}

export default App1