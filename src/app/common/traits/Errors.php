<?php
    namespace project\common\traits;

    trait Errors {
        private function sendErrorMessage(mixed $errors): void {
            $error_message = json_encode($errors, JSON_UNESCAPED_UNICODE);
            echo $error_message;
        }

        private function sendErrors(): void {
            if($this->errors) {
                $this->sendErrorMessage($this->errors);
                exit;
            }
        }
    }