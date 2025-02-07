// Отправка данных формы в Телеграм
const TOKEN = "7449790241:AAFE9SLF2jaEoJ9gxAMUTAFI7yjlhJ1qRws";
const CHAT_ID = "-1002192494433";
const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

const forms = document.querySelectorAll("form.form");
if (forms) {
  forms.forEach(form => form.addEventListener("submit", sendMessageTelegram));
}

function sendMessageTelegram (evt) {
  evt.preventDefault();

  const successFormMessage = this.querySelector('.feedback__form-success');

  function formSuccess () {
    successFormMessage.classList.add('js-popup-success');
    setTimeout(() => {
      successFormMessage.classList.remove('js-popup-success');
    }, 5 * 1000);
  }

  function formError () {
    alert("Ошибка при отправке формы. Перезвоните по телефону на сайте")
  }


  let message = `<b>Заявка с сайта К.Барке:</b>\n`;
  message += `<b>Имя:</b> ${this.name.value}\n`;
  message += `<b>Телефон:</b> ${this.phone.value}\n`;

  if (this.message.value) {
    message += `<b>Сообщение:</b> ${this.message.value}\n`;
  }



  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  })
    .then( () => {
      console.log("Заявка отправлена");
      formSuccess();
    })
    .catch(err => {
      console.warn(err);
      formError();
    })
    .finally(() => {
      console.log("Конец");
    });
  this.reset();

};