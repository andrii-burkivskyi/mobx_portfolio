import { observer } from 'mobx-react';
import React, { Component } from 'react';

import Modal from '../../../components/Modal/Modal';
import Icon from '../../../components/Icon/Icon';

import styles from './modals_contact_me.scss';
import Input from "../../../components/Form/Input/Input";

import ContactMe from "./ContactMe.store";
import TextArea from "../../../components/Form/TextArea/TextArea";
import Button, { ButtonTheme, ButtonIconPosition } from "../../../components/Button/Button";


@observer
export default class ContactMeView extends Component {
    render() {
        if (!ContactMe.modal.isOpen.get()) { return null; }

        return (
            <Modal onOutsideClick={ContactMe.modal.close}>
                <div className={styles.container}>
                    {this.renderHeader()}
                    {this.renderBody()}
                    {this.renderFooter()}
                </div>
            </Modal>
        );
    }

    renderHeader = () => (
        <div className={styles.header}>
            <span className={styles.title}>
                Contact letter:
            </span>
            <button className={styles.button} onClick={ContactMe.modal.close}>
                <Icon className={styles.button_icon} glyph="#close-button" />
            </button>
        </div>
    )

    renderBody = () => (
        <div className={styles.body}>
            <Input model={ContactMe.form.fields.theme} />
            <Input model={ContactMe.form.fields.email} />
            <TextArea model={ContactMe.form.fields.message} />
        </div>
    )

    renderFooter = () => (
        <div className={styles.footer}>
            <Button
                theme={ButtonTheme.POPUP}
                iconPosition={ButtonIconPosition.RIGHT}
                model={ContactMe.submitButton}
                padding="0 10px"
                text="Send letter"
                glyph="#sent-mail"
                onClick={ContactMe.form.submit}
            />
        </div>
    )
}