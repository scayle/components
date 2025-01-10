/**
 * A directive to update an element's innerHTML with a [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)
 */
export default function(el: HTMLElement, binding: { oldValue: DocumentFragment; value: DocumentFragment }) {
    if (binding.value === binding.oldValue) {
        return;
    }

    el.replaceChildren(binding.value);
}
