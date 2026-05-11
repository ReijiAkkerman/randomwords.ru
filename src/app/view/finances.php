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
        <section class="entries">
            <h1 class="entries-title">Наименование фонда</h1>
            <div class="entries__div">
                <div class="entries-list">

                    <p class="entries-list-date">2020-12-12</p>
                    <button class="entries-list-item">
                        <div class="entries-list-item-userColors">
                            <div style="background-color:#00f;"></div>
                            <div style="background-color:#f00;"></div>
                        </div>
                        <div class="entries-list-item-mainInfo" style="background-color:#f002;">
                            <p class="entries-list-item-mainInfo_type">Проезд</p>
                            <div class="entries-list-item-mainInfo__div">
                                <p class="entries-list-item-mainInfo_sum">1000<span class="entries-list-item-mainInfo_currency">&#8381</span></p>
                                <p class="entries-list-item-mainInfo_time">13:53</p>
                            </div>
                        </div>
                    </button>

                </div>
                <div class="entries-entry" style="display:none;">
                    <form action="#" method="POST">
                        <h2 class="entries-entry-paramName">Фонд</h2>
                        <select class="entries-entry-param-fund" name="" id="">
                            <option class="entries-entry-param-fund__option" value="Повседневное">Повседневное</option>
                        </select>
                        <h2 class="entries-entry-paramName">Категория</h2>
                        <select class="entries-entry-param entries-entry-param-cath" name="cathegory" id="">
                            <option class="entries-entry-param-cath__option" value="loss" selected>Убыток</option>
                            <option class="entries-entry-param-cath__option" value="income">Прибыль</option>
                        </select>
                        <h2 class="entries-entry-paramName">Тип</h2>
                        <select class="entries-entry-param entries-entry-param-type" name="type" id="">
                            <option class="entries-entry-param-type__option" value="Еда" selected>Еда</option>
                            <option class="entries-entry-param-type__option" value="Проезд">Проезд</option>
                        </select>
                        <h2 class="entries-entry-paramName">Пользователь</h2>
                        <div class="entries-entry-param entries-entry-param-users">
                            <div class="entries-entry-param-users-user">
                                <input class="entries-entry-param-users-user__input" type="checkbox" id="Я" value="Я" checked>
                                <label class="entries-entry-param-users-user__label" for="Я">Я</label>
                            </div>
                            <div class="entries-entry-param-users-user">
                                <input class="entries-entry-param-users-user__input" type="checkbox" id="Катя" value="Катя">
                                <label class="entries-entry-param-users-user__label" for="Катя">Катя</label>
                            </div>
                        </div>
                        <h2 class="entries-entry-paramName">Основные параметры</h2>
                        <div class="entries-entry-param">
                            <div class="entries-entry-param__div">
                                <input class="entries-entry-param-sum" name="sum" type="number" placeholder="Сумма">
                                <select class="entries-entry-param-currency" name="" id="">
                                    <option class="entries-entry-param-currency__option" value="">&#8381</option>
                                    <option class="entries-entry-param-currency__option" value="">&#36</option>
                                </select>
                            </div>
                            <textarea class="entries-entry-param-description" name="description" id="" placeholder="Описание"></textarea>
                        </div>
                        <button class="entries-entry__button entries-entry__button_saveEntry">Сохранить</button>
                    </form>
                </div>
            </div>
        </section>
        <section class="funds"></section>
    </body>
</html>