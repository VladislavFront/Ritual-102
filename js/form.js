const TOKEN = '7718862089:AAHiKfZaIcrr3nScO_Po4j9rq4vnEYoHjhk'
const CTHAT_ID = '-1002663619250'
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

document.getElementById('contactForm').addEventListener('submit', function (e) {

  e.preventDefault()

  let message = 'Звявка с сайта\n' + "Имя: " + this.name.value + '\n' + 'Номер телефона: ' + this.phone.value

  axios.post(URL_API, {
    chat_id: CTHAT_ID,
    parse_mode: 'html',
    text: message
  })

  .then((res) => {
    console.log('доставлено')
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log('Завершилось')
    document.getElementById('contactForm').reset()
  })

})