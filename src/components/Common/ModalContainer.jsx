import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Button, Modal, Space, Tooltip} from "antd";
import React from "react";
// import { useTheme } from "styled-components";

const ModalContainer = ({
        show,
        title,
        footer,
        closeModal,
        children,
        width,
        modalStyles,
    }) => {
    // const theme = useTheme();

    const modalContentStyle = {
        WebkitAppearance: "none",
        MozAppearance: "none",
        appearance: "none",
        border: "none",
        borderRadius: "20px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        padding: "7px",
        background: "white",
        color: "",
    };

    return (
        <Modal
            open={show}
            onCancel={closeModal}
            title={title}
            destroyOnClose={true}
            closeIcon={
                <Tooltip title="Fermer" color={"red"}>
                    <Button
                        icon={<FontAwesomeIcon icon={faTimes} size="2x" />}
                        style={{ marginTop: "-10px", padding: "0 2px", backgroundColor: "red", color: "white"}}
                    />
                </Tooltip>
            }
            width={width}
            maskClosable={false}
            footer={footer ? <Space>{footer}</Space> : null}
            style={{...modalStyles, ...modalContentStyle}}
            maskStyle={{
                backdropFilter: "blur(5px)",
                background: `linear-gradient(70deg, blue60, red60), blue60`,
            }}
            // bodyStyle={modalContentStyle}
        >
            {children}
        </Modal>
    );
};

export default ModalContainer;
