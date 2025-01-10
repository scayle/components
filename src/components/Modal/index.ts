/* istanbul ignore file */

/**
 * External dependencies.
 */

/**
 * Internal dependencies.
 */
import _Modal from './Modal/Modal.vue';
import _BaseModal from './BaseModal.vue';
import _ModalBody from './components/ModalBody/ModalBody.vue';
import _ModalFooter from './components/ModalFooter/ModalFooter.vue';
import _ModalHeader from './components/ModalHeader/ModalHeader.vue';
import _ModalButton from './components/ModalButton/ModalButton.vue';
import _ModalTemplate from './components/ModalTemplate/ModalTemplate.vue';
import _DangerousActionModal from './DangerousActionModal/DangerousActionModal.vue';
import { withPlugin } from '@/utils';

export const Modal = withPlugin(_Modal);

export const BaseModal = withPlugin(_BaseModal);

export const ModalBody = withPlugin(_ModalBody);

export const ModalFooter = withPlugin(_ModalFooter);

export const ModalHeader = withPlugin(_ModalHeader);

export const ModalButton = withPlugin(_ModalButton);

export const ModalTemplate = withPlugin(_ModalTemplate);

export const DangerousActionModal = withPlugin(_DangerousActionModal);
