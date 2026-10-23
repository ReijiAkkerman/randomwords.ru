<?php
    namespace project\control\traits;

    use project\model\Auth;

    trait Page {
        public function view(): void {
            $classname = __CLASS__;
            $class_array = explode('\\', $classname);
            $class = end($class_array);
            require_once __DIR__ . '/../../view/' . lcfirst($class) . '.php';
        }

        public function userHasCredentials(): bool {
            $LOGIN = $_COOKIE['login'];
            $CONFIRMATION = $_COOKIE['confirmation'];
            $Confirmation = (new Auth)->getConfirmation($LOGIN);
            $credentials = ($CONFIRMATION && $Confirmation && $CONFIRMATION === $Confirmation) ? true : false;
            return $credentials; 
        }
    }