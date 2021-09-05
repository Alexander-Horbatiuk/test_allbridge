import React, {useState} from "react";
import Modal from "react-modal";
import CoinData from "../CoinData";
import "./style.css"

Modal.setAppElement(document.getElementById('root'));

const customStyles = {
    overlay: {
        backgroundColor: '#908d8dbf',
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '15px',
        border: 'none',
        padding: '40px 64px 24px',
        maxWidth: '644px',
        width: '100%',
    },
};

const ModalWindow = () => {
    const [count, setCount] = useState('');

    const [modalIsOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div className="contentBox">
             <label className="labelInputCoin">
                 From
                 <span className="InputCoin"  onClick={openModal} >
                     {count}

                 </span>
             </label>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <CoinData  stateCount={count} setStateCount={setCount} closeModalFunc={closeModal}/>
            </Modal>
        </div>

    )
};

export default ModalWindow;