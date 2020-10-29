const easyvk = require('easyvk') // Подключаем easyvk

easyvk({ /** Авторизуемся */
  username: '',
  password: ''
}).then(async (vk) => {

  /** Отправляем сообщение */
  let peerId = 2000000042
  let response = await vk.call('messages.send', {
	/** Отправляем самому себе */
	peer_id: peerId,
	message: "Привет! ЭТО NODEJS PISHET VAM S KOMPUTERA ALEXANDRA",
	/** Получаем случайное число с привязкой к дате*/
	random_id: easyvk.randomId()
  })

  console.log(response) // Выводим ID отправленного сообщения

})