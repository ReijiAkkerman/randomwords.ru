<?php
    trait Errors {
        private function sendErrorMessage(mixed $errors): void {
            $error_message = json_encode($errors, JSON_UNESCAPED_UNICODE);
            echo $error_message;
        }
    }