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





        public function reg(string $LOGIN, string $EMAIL, string $NAME, string $PASSWORD): void {
            $this->createMysqlRootConnection();
            if($this->userExists($LOGIN, $EMAIL)) {
                $this->closeMysqlConnection();
                $this->sendErrors();
            }
            $encrypted_password = $this->encryptPassword($PASSWORD);
            $this->saveUserAuthData($LOGIN, $EMAIL, $NAME, $encrypted_password);
            $this->closeMysqlConnection();
            $this->prepareCookies($LOGIN, $encrypted_password);
            $this->sendCookies();
        }
        #####



        private function saveUserAuthData($LOGIN, $EMAIL, $NAME, $encrypted_password): void {
            $query = "INSERT INTO users(login, email, name, password_hash) VALUES ('$LOGIN', '$EMAIL', '$NAME', '$encrypted_password')";
            $this->mysql->query($query);
        }

        private function userExists($LOGIN, $EMAIL): bool {

            $query = 'USE AUTH';
            $result = $this->mysql->query($query);

            $query = "SELECT * FROM users WHERE login='$LOGIN' OR email='$EMAIL'";
            $result = $this->mysql->query($query);
            foreach($result as $row) {
                if($row['login']) $this->errors[] = new Error('login', 'Указанный логин уже существует!');
                if($row['email']) $this->errors[] = new Error('email', 'Указанная эл. почта уже существует!');
            }
            $user_exists = ($this->errors) ? true : false;
            return $user_exists;
        }

        private function encryptPassword($PASSWORD): string {
            return password_hash($PASSWORD, PASSWORD_DEFAULT);
        }

        private function prepareCookies(string $LOGIN, string $confirmation): void {
            $this->addCookie('login', $LOGIN);
            $this->addCookie('confirmation', $confirmation);
        }
    }