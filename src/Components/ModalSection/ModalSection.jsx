import { useState } from "react";
import "../ModalSection/ModalSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const ModalSection = () =>{
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () =>{
        setShowModal(!showModal);
    }
    return(
        <>
            <main className="modal-main">
                <section className="modal-section">
                    <div className="modal-grid">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className={`banner ${showModal ? 'hide' : 'show'}`}>
                                        <div className="banner-heading">Modal</div>
                                        <button className="modal-open-btn" onClick={handleShowModal}>open modal</button>
                                    </div>
                                    <div className={`modal-container ${showModal ? 'show-modal' : 'hide-modal'}`}>
                                        <h3 className="modal-container-heading">Modal Content</h3>
                                        <button className="modal-close-btn" onClick={handleShowModal}>
                                            <i className="fa fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default ModalSection;