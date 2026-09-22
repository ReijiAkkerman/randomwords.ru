<?php
    namespace project\model;

    use project\model\interfaces\iAuth;

    class Auth implements iAuth {
        public function log(
            string $login,
            string $password,
        ):string {

        }

        public function reg(
            string $login,
            string $email,
            string $name,
            string $password,
        ):string {
            
        }

        public function change_password(
            string $login,
            string $email,
            string $name,
            string $old_password,
            string $new_password,            
        ):string {

        }





        private function connect() {

        }
    }