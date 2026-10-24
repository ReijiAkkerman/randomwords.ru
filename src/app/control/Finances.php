<?php
    namespace project\control;

    use project\control\traits\Page;

    class Finances {
        use Page;

        public function view(): void {
            if($this->userHasCredentials())
                require_once __DIR__ . "/../view/finances.php";
            else {
                header('Location: http://test/auth/view', true, 301);
                exit;
            }
        }
    }