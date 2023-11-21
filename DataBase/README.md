# Database
using MySQL

## installation process
Install MySQL
```bash
sudo apt-get install mysql-server -y
```

change password for root user (default password is empty)
```bash
mysql -u root -p < change_password.sql
```

create database
```bash
mysql -u root -p < create_database.sql
```
