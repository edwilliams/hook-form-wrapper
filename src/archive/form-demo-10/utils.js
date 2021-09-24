export const triggerFormChange = detail => {
  document.dispatchEvent(new CustomEvent('cmp-form-onchange', { bubbles: true, detail }))
}
