<?php
    namespace project\control;

    use project\control\traits\View;
    use project\common\traits\Errors;

    use project\model\Auth as mAuth;
    use project\common\Error;

    class Auth {
        const LOGIN_LENGTH_MIN = 5;
        const PASSWORD_LENGTH_MIN = 8;

        const LOGIN_LENGTH_MAX = 50;
        const EMAIL_LENGTH_MAX = 255;
        const NAME_LENGTH_MAX = 100;
        const PASSWORD_LENGTH_MAX = 100;

        const REGEX_VALIDATE_LOGIN_FIRST_SYMBOL = '/^[^\W0-9]/';
        const REGEX_VALIDATE_EMAIL_FIRST_SYMBOL = '/^[^\W0-9]/';
        const REGEX_VALIDATE_NAME_FIRST_SYMBOL = '/^\pL/u';

        const REGEX_VALIDATE_LOGIN = '/^\w+$/';
        const REGEX_VALIDATE_EMAIL = '/^[\w.@]+$/';
        const REGEX_VALIDATE_NAME = '/^[\pL\p{Nd}\x20-]+$/u';
        const REGEX_VALIDATE_PASSWORD = '/^[\pL\p{Nd}\x20_.-]+$/u';

        private string $login = '';
        private string $email = '';
        private string $name = '';
        private string $password = '';
        private string $password_repetition = '';
        private array $errors = [];

        use View;
        use Errors;

        public function reg() {
            $this->reg_getFieldsData();
            $this->reg_checkFieldsCompletion();
            $this->reg_validateFirstSymbol();
            $this->reg_checkSpacesExistence();
            $this->reg_validateFieldsData();
            $this->reg_checkFieldsLength();
            $this->reg_checkPasswordsIdentity($this->password, $this->password_repetition);

            // new mAuth()->reg($login, $email, $name, $password);
        }





        private function reg_getFieldsData(): void {
            $this->login = trim($_POST['login']);
            $this->email = trim($_POST['email']);
            $this->name = trim($_POST['name']);
            $this->password = trim($_POST['password']);
            $this->password_repetition = trim($_POST['password_repetition']);
        }


        private function reg_checkFieldsCompletion(): void {
            $this->checkLogin($this->login);
            $this->checkEmail($this->email);
            $this->checkName($this->name);
            $this->checkPassword($this->password);
            $this->checkPasswordRepetition($this->password_repetition);
            if($this->errors) {
                $this->sendErrorMessage($this->errors);
                exit;
            }
        }
        #####
        private function checkLogin(string $login): void {
            if($login === '') $this->errors[] = new Error('login', 'Логин не введён');
        }
        #
        private function checkEmail(string $email): void {
            if($email === '') $this->errors[] = new Error('email', 'Электронная почта не указана');
        }
        #
        private function checkName(string $name): void {
            if($name === '') $this->errors[] = new Error('name', 'Имя не указано');
        }
        #
        private function checkPassword(string $password): void {
            if($password === '') $this->errors[] = new Error('password', 'Пароль не введён');
        }
        #
        private function checkPasswordRepetition(string $password_repetition): void {
            if($password_repetition === '') $this->errors[] = new Error('password_repetition', 'Повторный пароль не введен');
        }


        private function reg_checkSpacesExistence(): void {
            $this->checkLoginSpaces($this->login);
            $this->checkEmailSpaces($this->email);
            if($this->errors) {
                $this->sendErrorMessage($this->errors);
                exit;
            }
        }
        #####
        private function checkLoginSpaces(string $login): void {
            if(str_contains($login, "\x20"))
                $this->errors[] = new Error('login', 'Пробелы недопустимы!');
        }
        #
        private function checkEmailSpaces(string $email): void {
            if(str_contains($email, "\x20"))
                $this->errors[] = new Error('email', 'Пробелы недопустимы!');
        }


        private function reg_checkFieldsLength(): void {
            $this->checkLoginLength($this->login);
            $this->checkEmailLength($this->email);
            $this->checkNameLength($this->name);
            $this->checkPasswordLength($this->password);
            $this->checkPasswordLength($this->password_repetition, true);
            if($this->errors) {
                $this->sendErrorMessage($this->errors);
                exit;
            }
        }
        #####
        private function checkLoginLength(string $login): void {
            $login_length = strlen($login);
            if($login_length < self::LOGIN_LENGTH_MIN) 
                $this->errors[] = new Error('login', 'Логин должен содержать не менее ' . self::LOGIN_LENGTH_MIN . ' символов');
            else if($login_length > self::LOGIN_LENGTH_MAX)
                $this->errors[] = new Error('login', 'Логин должен содержать не более ' . self::LOGIN_LENGTH_MAX . ' символов');
        }
        #
        private function checkEmailLength(string $email): void {
            $email_length = strlen($email);
            if($email_length > self::EMAIL_LENGTH_MAX)
                $this->errors[] = new Error('email', 'Адрес электронной почты должен содержать не более ' . self::EMAIL_LENGTH_MAX . ' символов');
        }
        #
        private function checkNameLength(string $name): void {
            $name_length = mb_strlen($name);
            if($name_length > self::NAME_LENGTH_MAX)
                $this->errors[] = new Error('name', 'Имя пользователя должно содержать не более ' . self::NAME_LENGTH_MAX . ' символов');
        }
        #
        private function checkPasswordLength(string $password, bool $repetition = false): void {
            $field = ($repetition) ? 'password_repetition' : 'password';
            $password_length = mb_strlen($password);
            if($password_length < self::PASSWORD_LENGTH_MIN)
                $this->errors[] = new Error($field, 'Пароль должен содержать не менее ' . self::PASSWORD_LENGTH_MIN . ' символов');
            else if($password_length > self::PASSWORD_LENGTH_MAX)
                $this->errors[] = new Error($field, 'Пороль должен содержать не более ' . self::PASSWORD_LENGTH_MAX . ' символов');
        }


        private function reg_validateFieldsData(): void {
            $this->validateLogin($this->login);
            $this->validateEmail($this->email);
            $this->validateName($this->name);
            $this->validatePassword($this->password);
            $this->validatePassword($this->password_repetition, true);
            if($this->errors) {
                $this->sendErrorMessage($this->errors);
                exit;
            }
        }
        #####
        private function validateLogin(string $login): void {
            $regex = self::REGEX_VALIDATE_LOGIN;
            $preg_match_result = preg_match($regex, $login);
            if($preg_match_result === 1);
            else if($preg_match_result === 0)
                $this->errors[] = new Error('login', 'Введены недопустимые символы!<br>Разрешены латинские буквенно-цифровые символы и символ нижнего подчеркивания');
            else if($preg_match_result === false)
                $this->errors[] = new Error('login', "ERROR [control]Auth->validateLogin->preg_match('$regex', '$login')");
        }
        #
        private function validateEmail(string $email): void {
            $regex = self::REGEX_VALIDATE_EMAIL;
            $preg_match_result = preg_match($regex, $email);
            if($preg_match_result === 1);
            else if($preg_match_result === 0)
                $this->errors[] = new Error('email', 'Введены недопустимые символы!<br>Разрешены латинские буквенно-цифровые символы и точки');
            else if($preg_match_result === false)
                $this->errors[] = new Error('email', "Уккщк");
        }
        #
        private function validateName(string $name): void {
            $regex = self::REGEX_VALIDATE_NAME;
            $preg_match_result = preg_match($regex, $name);
            if($preg_match_result === 1);
            else if($preg_match_result === 0)
                $this->errors[] = new Error('name', 'Введены недопустимые символы!<br>Разрешены буквенно-цифровые символы, дефис и пробел');
            else if($preg_match_result === false)
                $this->errors[] = new Error('login', "ERROR [control]Auth->validateName->preg_match('$regex', '$name')");
        }
        #
        private function validatePassword(string $password, $repetition = false): void {
            $regex = self::REGEX_VALIDATE_PASSWORD;
            $field = ($repetition === false) ? 'password' : 'password_repetition';
            $preg_match_result = preg_match($regex, $this->$field);
            if($preg_match_result === 1);
            else if($preg_match_result === 0)
                $this->errors[] = new Error($field, 'Введены недопустимые символы<br>Разрешены буквенно-цифровые символы, символ нижнего подчеркивания, пробел, дефис и точка');
            else if($preg_match_result === false)
                $this->errors[] = new Error($field, "ERROR [control]Auth->validatePassword(field='$field')->preg_match('$regex', '" . $this->$field . "')");
        }


        private function reg_checkPasswordsIdentity(string $password, string $password_repetition): void {
            if($password !== $password_repetition)
                $this->errors[] = new Error('password_repetition', 'Пароли не совпадают!!!');
            if($this->errors) {
                $this->sendErrorMessage($this->errors);
                exit;
            }
        }


        private function reg_validateFirstSymbol(): void {
            $this->validateLoginFirstSymbol($this->login);
            $this->validateEmailFirstSymbol($this->email);
            $this->validateNameFirstSymbol($this->name);
            if($this->errors) {
                $this->sendErrorMessage($this->errors);
                exit;
            }
        }
        #####
        private function validateLoginFirstSymbol(string $login): void {
            $regex = self::REGEX_VALIDATE_LOGIN_FIRST_SYMBOL;
            $preg_match_result = preg_match($regex, $login);
            if($preg_match_result === 1);
            else if($preg_match_result === 0)
                $this->errors[] = new Error('login', 'Первый символ должен быть латинской буквой или символом нижнего подчеркивания!');
            else if($preg_match_result === false)
                $this->errors[] = new Error('login', "ERROR [control]Auth->validateLoginFirstSymbol->preg_match('$regex', '$login')");
        }
        #
        private function validateEmailFirstSymbol(string $email): void {
            $regex = self::REGEX_VALIDATE_EMAIL_FIRST_SYMBOL;
            $preg_match_result = preg_match($regex, $email);
            if($preg_match_result === 1);
            else if($preg_match_result === 0)
                $this->errors[] = new Error('email', 'Первый символ должен быть латинской буквой или символом нижнего подчеркивания!');
            else if($preg_match_result === false)
                $this->errors[] = new Error('email', "ERROR [control]Auth->validateEmailFirstSymbol->preg_match('$regex', '$email')");
        }
        #
        private function validateNameFirstSymbol(string $name): void {
            $regex = self::REGEX_VALIDATE_NAME_FIRST_SYMBOL;
            $preg_match_result = preg_match($regex, $name);
            if($preg_match_result === 1);
            else if($preg_match_result === 0)
                $this->errors[] = new Error('name', 'Первый символ должен быть буквой!');
            else if($preg_match_result === false)
                $this->errors[] = new Error('name', "ERROR [control]Aurh->validateNameFirstSymbol->preg_match('$regex', '$name')");
        }
    }