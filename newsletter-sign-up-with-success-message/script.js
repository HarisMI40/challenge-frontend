function submitForm(e){
  // e.preventDefault()
  let input_email = document.getElementById("input-email");
  let form_input = document.getElementById('form-input');
  let error_message = document.getElementById('error-message');
  let card_subscribe = document.getElementById("card-subscribe");
  let card_success = document.getElementById("card-success");

  if(!input_email.value.includes("@")){
    form_input.classList.add("error")
    error_message.textContent = "valid email required";
    return;
  }

  card_subscribe.style.display = "none";
  card_success.style.display = "block";


}