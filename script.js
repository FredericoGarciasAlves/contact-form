document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (event) => {
    if (
      !messageErrorinputFirstName() ||
      !messageErrorInputlastName() ||
      !messageErrorInputEmailAddress() ||
      !messageErrorInputRadio() ||
      !messageErrorTextareaMessage() ||
      !messageErrorCheckboxContactedTeam()
    ) {
      !messageErrorInputEmailAddress();
      !messageErrorInputlastName();
      !messageErrorinputFirstName();
      !messageErrorInputRadio();
      !messageErrorTextareaMessage();
      !messageErrorCheckboxContactedTeam();
      event.preventDefault();
    }

    event.preventDefault();
    if (messageSent()) {
      event.preventDefault();
      boxRadioQueryType[0].style.backgroundColor = "#fff";
      boxRadioQueryType[1].style.backgroundColor = "#fff";
      form.reset();
    }
  });
});
const form = document.getElementById("form");
const inputFirstName = document.getElementById("f-name");
const inputLastName = document.getElementById("l-name");
const inputEmailAddress = document.getElementById("e-address");
const inputRadioGeneralEnquiry = document.getElementById("general-enquiry");
const inputRadioSupportRequest = document.getElementById("support-request");
const boxRadioQueryType = document.querySelectorAll(".box-radio-query-type");
const boxQueryType = document.querySelector(".box-query-type");
const textareaMessage = document.getElementById("message");
const checkboxContactedTeam = document.getElementById("contacted-team");
const boxContactedTeam = document.querySelector(".box-contacted-team");

function messageSent() {
  if (
    inputFirstName.value !== "" &&
    inputLastName.value !== "" &&
    inputEmailAddress.value !== "" &&
    textareaMessage !== "" &&
    checkboxContactedTeam.checked
  ) {
    if (inputRadioGeneralEnquiry.checked || inputRadioSupportRequest.checked) {
      const boxMessageSent = document.createElement("div");
      boxMessageSent.innerHTML = `
      <div class="line-message-sent">
       <img src="./assets/images/icon-success-check.svg" alt="Icon success ckeck" class="icon-message-sent">
        <p>Message Sent!</p>
      </div>
      <p class="pagrath-message-sent">Thanks for completing the form. We’ll be in touch soon!</p>
        `;
      boxMessageSent.className = "box-message-sent";
      form.appendChild(boxMessageSent);
      return true;
    }
  }
}

function messageErrorinputFirstName() {
  if (inputFirstName.value === "") {
    const messageErrorRem = document.querySelector(".message-error-f-name");
    if (messageErrorRem) {
      messageErrorRem.remove();
    }
    const messageError = document.createElement("p");
    messageError.className = "message-error-f-name";
    messageError.innerText = "This is field is requerid";
    inputFirstName.insertAdjacentElement("afterend", messageError);
    inputFirstName.style.border = "1px solid #d73c3c";
    return false;
  } else {
    const messageErrorRem = document.querySelector(".message-error-f-name");
    if (messageErrorRem) {
      messageErrorRem.remove();
    }
    inputFirstName.style.border = "1px solid #86a2a5";
  }
  return true;
}

function messageErrorInputlastName() {
  if (inputLastName.value === "") {
    const messageErrorRem = document.querySelector(".message-error-l-name");
    if (messageErrorRem) {
      messageErrorRem.remove();
    }
    const messageError = document.createElement("p");
    messageError.className = "message-error-l-name";
    messageError.innerText = "This is field is requerid";
    inputLastName.insertAdjacentElement("afterend", messageError);
    inputLastName.style.border = "1px solid #d73c3c";
    return false;
  } else {
    const messageErrorRem = document.querySelector(".message-error-l-name");
    if (messageErrorRem) {
      messageErrorRem.remove();
    }
    inputLastName.style.border = "1px solid #86a2a5";
  }
  return true;
}

function messageErrorInputEmailAddress() {
  if (
    inputEmailAddress.value === "" ||
    !inputEmailAddress.value.includes("@")
  ) {
    const messageErrorRem = document.querySelector(".message-error-e-name");
    if (messageErrorRem) {
      messageErrorRem.remove();
    }
    const messageError = document.createElement("p");
    messageError.className = "message-error-e-name";
    messageError.innerText = "Please enter a valid email address";
    inputEmailAddress.insertAdjacentElement("afterend", messageError);
    inputEmailAddress.style.border = "1px solid #d73c3c";
    return false;
  } else {
    const messageErrorRem = document.querySelector(".message-error-e-name");
    if (messageErrorRem) {
      messageErrorRem.remove();
    }
    inputEmailAddress.style.border = "1px solid #86a2a5";
  }
  return true;
}

function messageErrorInputRadio() {
  if (!inputRadioGeneralEnquiry.checked && !inputRadioSupportRequest.checked) {
    const messageErrorRem = document.querySelector(
      ".message-error-input-radio"
    );
    if (messageErrorRem) {
      messageErrorRem.remove();
    }
    const messageError = document.createElement("p");
    messageError.className = "message-error-input-radio";
    messageError.innerText = "Please select a query type";
    boxQueryType.insertAdjacentElement("afterend", messageError);
    boxRadioQueryType[0].style.border = "1px solid #d73c3c";
    boxRadioQueryType[1].style.border = "1px solid #d73c3c";
    return false;
  } else {
    const messageErrorRem = document.querySelector(
      ".message-error-input-radio"
    );
    if (messageErrorRem) {
      messageErrorRem.remove();
    }
    boxRadioQueryType[0].style.border = "1px solid #86a2a5";
    boxRadioQueryType[1].style.border = "1px solid #86a2a5";
  }
  return true;
}

function messageErrorTextareaMessage() {
  if (textareaMessage.value === "") {
    const messageErrorRem = document.querySelector(
      ".message-error-textarea-message"
    );
    if (messageErrorRem) {
      messageErrorRem.remove();
    }
    const messageError = document.createElement("p");
    messageError.className = "message-error-textarea-message";
    messageError.innerText = "This is field is requerid";
    textareaMessage.insertAdjacentElement("afterend", messageError);
    textareaMessage.style.border = "1px solid #d73c3c";
    return false;
  } else {
    const messageErrorRem = document.querySelector(
      ".message-error-textarea-message"
    );
    if (messageErrorRem) {
      messageErrorRem.remove();
    }
    textareaMessage.style.border = "1px solid #86a2a5";
  }
  return true;
}

function messageErrorCheckboxContactedTeam() {
  if (!checkboxContactedTeam.checked) {
    const messageErrorRem = document.querySelector(
      ".message-error-input-checkbox"
    );
    if (messageErrorRem) {
      messageErrorRem.remove();
    }
    const messageError = document.createElement("p");
    messageError.className = "message-error-input-checkbox";
    messageError.innerText =
      "To submit this form, please consent to being contacted";
    boxContactedTeam.insertAdjacentElement("afterend", messageError);
    return false;
  } else {
    const messageErrorRem = document.querySelector(
      ".message-error-input-checkbox"
    );
    if (messageErrorRem) {
      messageErrorRem.remove();
    }
  }
  return true;
}

function atualizarEstiloRadios() {
  // Resetar os dois estilos primeiro
  boxRadioQueryType[0].style.backgroundColor = "#fff";
  boxRadioQueryType[1].style.backgroundColor = "#fff";

  // Aplicar estilo no que está checado
  if (inputRadioGeneralEnquiry.checked) {
    boxRadioQueryType[0].style.backgroundColor = "#e0f1e8";
  }

  if (inputRadioSupportRequest.checked) {
    boxRadioQueryType[1].style.backgroundColor = "#e0f1e8";
  }
}

inputRadioGeneralEnquiry.addEventListener("change", atualizarEstiloRadios);
inputRadioSupportRequest.addEventListener("change", atualizarEstiloRadios);
