<?php
    namespace project\control;

    use project\control\traits\View;
    use project\common\traits\Errors;

    use project\model\Auth as mAuth;
    use project\common\Error;

    class Auth {
        use View;
        use Errors;

        public function reg() {
            $login = $_POST['login'];
            $email = $_POST['email'];
            $name = $_POST['name'];
            $password = $_POST['password'];
            $password_repetition = $_POST['password_repetition'];
            new mAuth()->reg($login, $email, $name, $password);
        }





        private function isLogin(): bool {

        }

        private function isEmail(): bool {

        }

        private function isName(): bool {

        }

        private function isPassword(): bool {

        }

        private function isPasswordRepetition(): bool {

        }

        private function isMatchedLogin(): bool {

        }

        private function isMatchedEmail(): bool {

        }

        private function isMatchedName(): bool {

        }

        private function isMatchedPassword(): bool {

        }

        private function isSamePasswords(
            string $password,
            string $password_repetition,
        ): bool {
            if($password !== $password_repetition) {
                $error = new Error('password', 'Пароли не совпадают');
                $this->sendErrorMessage($error);
            }
        }
    }