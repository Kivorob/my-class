# Инструкция

1. **Импорт проекта**

   Склонируйте репозиторий на ПК при помощи команды:

   ```sh
   git clone https://github.com/kivorob/my-class
   ```
   
2. **Установка зависимостей**

   Перейдите в каталог и установите зависимости:

   ```sh
   cd my-class
   npm ci
   ```
   
3. **Выполнение миграций**

   Для проведения миграций базы данных, запустите команду:

   ```sh
   npx knex migrate:latest
   ```

4. **Сборка проекта**

   Соберите проект с помощью команды:

   ```sh
   npm run build
   ```

5. **Запуск приложения**

   Запустите собранное приложение командой:

   ```sh
   npm run start:prod
   ```
   
6. **Работа с приложением**

   Если все сделано правильно, то можно работать - удачи))
