<?php
    namespace project\model\common\traits;

    trait Cookies {
        const EXPIRES_IN_DAYS = 100;
        public array $cookies;





        public function addCookie(string $cookie_name, string $cookie_value): void {
            $expires = time() + 60*60*24*$this::EXPIRES_IN_DAYS;
            $this->cookies[$cookie_name] = [$cookie_value, $expires];
        }

        public function sendCookies(): void {
            foreach($this->cookies as $cookie_name => $params   )
                setcookie($cookie_name, $params[0], $params[1]);
        }

        public function deleteCookies(): void {
            foreach($this->cookies as $cookie_name => $params)
                $this->cookies[$cookie_name] = ['', time() - 1];
        }
    }