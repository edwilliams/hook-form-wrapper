// export const triggerFormChange = ({ data }) => {
//   document.dispatchEvent(new CustomEvent('cmp-form-onchange', { bubbles: true, detail: { data } }))
// }

export const triggerFormChange = () => {
  document.dispatchEvent(new CustomEvent('cmp-form-onchange', { bubbles: true }))
}
