<?php
    namespace project\model;

    use project\common\traits\Errors;
    use project\common\Error;

    use project\model\common\traits\Mysql;
    use project\model\common\traits\Cookies;

    class Auth {
        use Errors;
        use Mysql;
        use Cookies;

        private string $Password_hash = '';





        public function reg(string $LOGIN, string $EMAIL, string $NAME, string $PASSWORD): void {
            $this->createMysqlRootConnection();
            $this->reg_checkUserExistence($LOGIN, $EMAIL);
            $encrypted_password = $this->reg_encryptPassword($PASSWORD);
            $this->reg_saveUserAuthData($LOGIN, $EMAIL, $NAME, $encrypted_password);
            $this->closeMysqlConnection();
            $this->prepareCookies($LOGIN, $encrypted_password);
            $this->sendCookies();
        }
        #####
        private function reg_saveUserAuthData($LOGIN, $EMAIL, $NAME, $encrypted_password): void {
            $query = "INSERT INTO users(login, email, name, password_hash) VALUES ('$LOGIN', '$EMAIL', '$NAME', '$encrypted_password')";
            $this->mysql->query($query);
        }
        #
        private function reg_checkUserExistence(string $LOGIN, string $EMAIL): void {
            $this->mysql->query('USE AUTH');
            $result = $this->mysql->query("SELECT * FROM users WHERE login='$LOGIN'");
            foreach($result as $row)
                if($row['login']) $this->errors[] = new Error('login', 'Указанный логин уже существует!');
            $result = $this->mysql->query("SELECT * FROM users WHERE email='$EMAIL'");
            foreach($result as $row) 
                if($row['email']) $this->errors[] = new Error('email', 'Указанная эл. почта уже существует!');
            if($this->errors) {
                $this->closeMysqlConnection();
                $this->sendErrors();
            }
        }
        #
        private function reg_encryptPassword($PASSWORD): string {
            return password_hash($PASSWORD, PASSWORD_DEFAULT);
        }





        public function log(string $LOGIN, string $PASSWORD): void {
            $this->createMysqlRootConnection();
            $this->log_checkUserExistence($LOGIN);
            $this->closeMysqlConnection();
            $this->log_identifyUser($PASSWORD);
            $this->prepareCookies($LOGIN, $this->Password_hash);
            $this->sendCookies();
        }
        #
        private function log_checkUserExistence(string $LOGIN): void {
            $this->mysql->query('USE AUTH');
            $result = $this->mysql->query("SELECT * FROM users WHERE login='$LOGIN'");
            foreach($result as $row) 
                $this->Password_hash = $row['password_hash'];
            if($this->Password_hash === '') {
                $this->closeMysqlConnection();
                $this->errors[] = new Error('login', 'Пользователь не найден!');
                $this->sendErrors();
            }
        }
        #
        private function log_identifyUser(string $PASSWORD): void {
            if(password_verify($PASSWORD, $this->Password_hash) === false) {
                $this->errors[] = new Error('password', 'Пароль неверный!');
                $this->sendErrors();
            }
        }

        private function prepareCookies(string $LOGIN, string $confirmation): void {
            $this->addCookie('login', $LOGIN);
            $this->addCookie('confirmation', $confirmation);
        }





        public function getConfirmation(string $LOGIN): string {
            $this->createMysqlRootConnection();
            $this->mysql->query('USE AUTH');
            $result = $this->mysql->query("SELECT password_hash FROM users WHERE login='$LOGIN'");
            foreach($result as $row)
                return $row['password_hash'];
            $this->closeMysqlConnection();
        }
    }