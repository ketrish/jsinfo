let login = prompt('Логин');
if (login == 'Админ') {
    let password = prompt('Пароль?');
    if (password == 'Я главный') {
        alert('Здравствуйте')
    } else if (password == '' || password == null){
        alert('Отмена')
    } else {
        alert('Неверный пароль')
    }
}  if (login == '' || login == null){
    alert('Неверно');
} else {
    alert ('ТЫ кто?');
}