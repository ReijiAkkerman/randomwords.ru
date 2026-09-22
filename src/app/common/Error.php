<?php
    class Error {
        public string $error_field;
        public string $error_message;

        public function __construct(
            $error_field,
            $error_message,
        ) {
            $this->error_field = $error_message;
            $this->error_message = $error_message;
        }
    }