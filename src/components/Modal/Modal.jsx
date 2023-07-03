import React, { Component } from "react";
import styles from "./Modal.module.css"

class Modal extends Component {
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        if (event.code === "Escape") {
            this.props.onClose();
        }
    };

    handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            this.props.onClose();
        }
    };

    render() {
        const { imageUrl, onClose } = this.props;

        return (
            <div className={styles.modalOverlay} onClick={this.handleOverlayClick}>
                <div className={styles.modalContent}>
                    <img src={imageUrl} alt="" className={styles.modalImage} />
                </div>
            </div>
        );
    }
}

export default Modal;
