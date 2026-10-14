<?php
    namespace project\model\common\traits;

    trait Mysql {
        private \mysqli $mysql;
        private string $host = 'localhost';





        private function createMysqlRootConnection(): void {
            $this->mysql = new \mysqli($this->host, 'root', 'KisaragiEki4');
        }

        private function createMysqlAuthConnection(): void {
            $this->mysql = new \mysqli($this->host, 'Auth', 'kISARAGIeKI4', 'AUTH');
        }

        private function createMysqlFinancesConnection(): void {
            $this->mysql = new \mysqli($this->host, 'Finances', 'kISARAGIeKI4', 'FINANCES');
        }

        private function createMysqlSettingsConnection(): void {
            $this->mysql = new \mysqli($this->host, 'Settings', 'kISARAGIeKI4', 'SETTINGS');
        }

        private function closeMysqlConnection(): void {
            $this->mysql->close();
        }
    }