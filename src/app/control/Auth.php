<?php
    namespace project\control;

    use project\control\traits\View;
    use project\common\traits\Errors;

    use project\model\Auth as mAuth;
    use project\common\Error;

    class Auth {
        private array $errors = [];

        use View;
        use Errors;

        public function reg() {
            $login = trim($_POST['login']);
            $email = trim($_POST['email']);
            $name = trim($_POST['name']);
            $password = trim($_POST['password']);
            $password_repetition = trim($_POST['password_repetition']);

            $validations = [
                'isLogin' => $login,
                'isEmail' => $email,
                'isName' => $name,
                'isPassword' => $password,
                'isPasswordRepetition' => $password_repetition,
            ];
            foreach($validations as $func => $arg) {
                $this->$func($arg);
            }
            if($this->errors) $this->sendErrorMessage($this->errors);

            // new mAuth()->reg($login, $email, $name, $password);
        }





        private function isLogin(string $login): void {
            if($login === '') $this->errors[] = new Error('login', 'Логин не введён!!!');
        }

        private function isEmail(string $email): void {
            if($email === '') $this->errors[] = new Error('email', 'Электронная почта не указана!!!');
        }

        private function isName(string $name): void {
            if($name === '') $this->errors[] = new Error('name', 'Имя не указано!!!');
        }

        private function isPassword(string $password): void {
            if($password === '') $this->errors[] = new Error('password', 'Пароль не введён!!!');
        }

        private function isPasswordRepetition(string $password_repetition): void {
            if($password_repetition === '') $this->errors[] = new Error('password_repetition', 'Пароль не введен повторно!!!');
        }

        private function isSamePasswords(
            string $password,
            string $password_repetition,
        ): bool {
            
        }

        private function isMatchedLogin(string $login): bool {

        }

        private function isMatchedEmail(string $email): bool {

        }

        private function isMatchedName(string $name): bool {

        }

        private function isMatchedPassword(string $password): bool {

        }
    }