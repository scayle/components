/**
 * External dependencies.
 */
import DOMPurify from 'dompurify';

export default function(el: HTMLElement, binding: { oldValue: string; value: string }) {
    if (binding.value === binding.oldValue) {
        return;
    }

    el.innerHTML = DOMPurify.sanitize(binding.value);
}
