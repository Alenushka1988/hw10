// Решить следующие задачи:
// Создать в html форму с тремя инпутами (имя, фамилия, возраст). Написать скрипт, который при отправке формы выводит собранные данные в консоль.
// Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта.
// Реализовать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива. Настроить rerender при добавлении нового пользователя.
// Доработать rerender таким образом, чтобы при двойном клике по карточке из массива удалялся пользователь по id и вызывался rerender.


        
const users = [];

function rerender() {
  const usersContainer = document.getElementById('usersContainer');
  usersContainer.innerHTML = users.map(user =>
    `<div class="userCard" data-id="${user.id}">
      Имя: ${user.firstName}, Фамилия: ${user.lastName}, Возраст: ${user.age}, ID: ${user.id}
    </div>`
  ).join('');

  usersContainer.querySelectorAll('.userCard').forEach(card => {
    card.addEventListener('dblclick', () => {
      const id = parseInt(card.dataset.id);
      const index = users.findIndex(user => user.id === id);
      if (index !== -1) {
        users.splice(index, 1);
        rerender();
      }
    });
  });
}

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const age = document.getElementById('age').value;

  const newUser = {
    id: Date.now(),
    firstName,
    lastName,
    age
  };

  users.push(newUser);
  rerender();
});
