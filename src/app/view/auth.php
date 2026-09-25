<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="/src/css/position.css">
        <link rel="stylesheet" href="/src/css/style.css">
        <link rel="stylesheet" href="/src/css/fonts.css">
        <link rel="stylesheet" href="/src/css/auth/position.css">
        <link rel="stylesheet" href="/src/css/auth/style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <section>
            <div class="auth">
                <div class="auth-switcher">
                    <button class="auth-switcher__button auth-switcher_login" style="color:#000;border-color:#000;">Вход</button>
                    <button class="auth-switcher__button auth-switcher_registration">Регистрация</button>
                </div>
                <div class="auth-forms">
                    <form class="auth__form auth-login" action="#">
                        <div class="auth__div">
                            <p class="auth__p" style="display:none;"></p>
                            <input class="auth__input" name="login" type="text" placeholder="Логин">
                        </div>
                        <div class="auth__div">
                            <p class="auth__p" style="display:none;"></p>
                            <input class="auth__input" name="password" type="password" placeholder="Пароль">
                        </div>
                        <button class="auth__button">Войти</button>
                    </form>
                    <form class="auth__form auth-registration" style="display:none;">
                        <div class="auth__div">
                            <p class="auth__p" style="display:none;"></p>
                            <input class="auth__input" name="login" type="text" placeholder="Логин">
                        </div>
                        <div class="auth__div">
                            <p class="auth__p" style="display:none;"></p>
                            <input class="auth__input" name="email" type="text" placeholder="Эл. почта">
                        </div>
                        <div class="auth__div">
                            <p class="auth__p" style="display:none;"></p>
                            <input class="auth__input" name="name" type="text" placeholder="Имя">
                        </div>
                        <div class="auth__div">
                            <p class="auth__p" style="display:none;"></p>
                            <input class="auth__input" name="password" type="password" placeholder="Пароль">
                        </div>
                        <div class="auth__div">
                            <p class="auth__p" style="display:none;"></p>
                            <input class="auth__input" name="password_repetition" type="password" placeholder="Повтор пароля">
                        </div>
                        <button class="auth__button auth-registration__button">Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        </section>
        <script type="module" src="/src/js/auth/view/ModeSwitcher.js"></script>
        <script type="module" src="/src/js/auth/control/Registration.js"></script>
    </body>
</html>