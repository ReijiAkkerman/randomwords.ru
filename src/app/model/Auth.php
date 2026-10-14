<?php
    namespace project\model;

    use project\model\common\traits\Mysql;
    use project\model\common\Cookies;

    class Auth {
        use Mysql;
        use Cookies;

        private string $encrypted_password;
        private bool $user_existent;





        public function reg(string $LOGIN, string $EMAIL, string $NAME, string $PASSWORD): void {
            
        }
        #####





        private function isBusyLogin(): void {

        }

        private function isBusyEmail(): void {

        }
    }