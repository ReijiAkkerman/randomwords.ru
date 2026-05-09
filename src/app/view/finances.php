<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/src/css/position.css">
        <link rel="stylesheet" href="/src/css/style.css">
        <link rel="stylesheet" href="/src/css/fonts.css">
        <link rel="stylesheet" href="/src/css/finances/position.css">
        <link rel="stylesheet" href="/src/css/finances/style.css">
    </head>
    <body>
        <main class="entry">
            <h1 class="entry-title">Создать запись</h1>
            <form action="#" method="POST">
                <h2 class="entry-paramName">Фонд</h2>
                <select class="entry-param-fund" name="" id="">
                    <option class="entry-param-fund__option" value="Повседневное">Повседневное</option>
                </select>
                <h2 class="entry-paramName">Категория</h2>
                <select class="entry-param entry-param-cath" name="cathegory" id="">
                    <option class="entry-param-cath__option" value="loss" selected>Убыток</option>
                    <option class="entry-param-cath__option" value="income">Прибыль</option>
                </select>
                <h2 class="entry-paramName">Тип</h2>
                <select class="entry-param entry-param-type" name="type" id="">
                    <option class="entry-param-type__option" value="Еда" selected>Еда</option>
                    <option class="entry-param-type__option" value="Проезд">Проезд</option>
                </select>
                <h2 class="entry-paramName">Пользователь</h2>
                <div class="entry-param entry-param-users">
                    <div class="entry-param-users-user">
                        <input class="entry-param-users-user__input" type="checkbox" id="Я" value="Я" checked>
                        <label class="entry-param-users-user__label" for="Я">Я</label>
                    </div>
                    <div class="entry-param-users-user">
                        <input class="entry-param-users-user__input" type="checkbox" id="Катя" value="Катя">
                        <label class="entry-param-users-user__label" for="Катя">Катя</label>
                    </div>
                </div>
                <h2 class="entry-paramName">Основные параметры</h2>
                <div class="entry-param">
                    <div class="entry-param__div">
                        <input class="entry-param-sum" name="sum" type="number" placeholder="Сумма">
                        <select class="entry-param-currency" name="" id="">
                            <option class="entry-param-currency__option" value="">&#8381</option>
                            <option class="entry-param-currency__option" value="">&#36</option>
                        </select>
                    </div>
                    <textarea class="entry-param-description" name="description" id="" placeholder="Описание"></textarea>
                </div>
                <button class="entry__button entry__button_saveEntry">Сохранить</button>
            </form>
        </main>
        <section class="entries"></section>
        <section class="filters"></section>
        <section class="funds"></section>
    </body>
</html>