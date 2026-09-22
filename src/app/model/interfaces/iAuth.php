<?php
    interface iAuth {
        public function login(
            string $login,
            string $password,
        ):string;
        public function registrate(
            string $login,
            string $email,
            string $name,
            string $password,
        ):string;
        public function changePassword(
            string $login,
            string $email,
            string $name,
            string $old_password,
            string $new_password,
        ):string;
    }