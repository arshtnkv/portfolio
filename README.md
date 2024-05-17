<h1 align="center">Портфолио</h1>
<br/>
<h3>Light Landing page</h3>
<p>URL:
  <a href="https://portfolio-arshtnkv.vercel.app/" target="_blank"> portfolio-arshtnkv.vercel.app</a>
</p>
<div>
  <h3>Stack:</h3>
  <ul>
    <li>PUG</li>
    <li>SASS</li>
    <li>Java Script (ECMAScript 6)</li>
    <li>Gulp, Webpack</li>
    <li>PHP, PHPMailer</li>
  </ul>
</div>
<div>
  <h3>Description</h3>
  <ol>
    <li>About us</li>
    <li>My experience</li>
    <li>Work examples</li>
    <li>Contact with me</li>
  </ol>
</div>
<div>
  <img src="source/img/content/portfolio-image.png"/>
</div>


## Краткая инструкция по работе
Для начала работы у вас должент быть установлен **Node.js**

### Основные команды для работы

- Установка 
```
npm i
```

- Запуск локального сервера без минификаций
```
npm start
```

- Запуск локального сервера c минификациями, <br>
данный вариант не используется в разработке, <br>
он нужен только для тестов производительности <br>
на локальном хосте
```
npm run dev
```

- Сборка проекта, минификация скриптов <br>
и оптимизация изображений перед деплоем на прод
```
npm run build
```

- Запуск тестирования на соответствия кодгайдам
```
npm test
```

- Создание webp изображений в директории source
```
npm run webp
```

### Вся разработка ведётся в директории `source`
### Итоговый код попадает в директорию `build`
