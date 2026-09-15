const formEl = document.querySelector(".js-feedback-form");
const textareaEl = formEl.querySelector('textarea[name="message"]');
const inputEl = formEl.querySelector('input[name="name"]');
const FORM_DATA = "form-massage"
const onInputChange = (event) => {
const value = event.target.value
localStorage.setItem(FORM_DATA, value)
}
formEl.addEventListener("input", onInputChange)

const populateData = () => {
    const date = localStorage.getItem(FORM_DATA)
    textareaEl.value = date
}
populateData()
const onSubmitForm = (event) => {
event.preventDefault()
event.currentTarget.reset()
localStorage.removeItem(FORM_DATA)
}
formEl.addEventListener("submit", onSubmitForm)
