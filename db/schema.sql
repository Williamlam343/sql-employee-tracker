DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
​
USE employees;
​
CREATE TABLE department (
    Departmentid int NOT NULL AUTO_INCREMENT,
    DepartmentName varchar(20) NOT NULL,
    PRIMARY KEY (Departmentid)
);
​
CREATE TABLE roles (
    Rolesid int NOT NULL AUTO_INCREMENT,
    RolesSalary int NOT NULL,
    PRIMARY KEY(Rolesid)

);
​
CREATE TABLE employee (
    Employeeid int NOT NULL AUTO_INCREMENT,
    Firstname varchar(32) NOT NULL,
    Lastname varchar(32) NOT NULL,
    Roles varchar(32) NOT NULL,
    Manager varchar(32),
    PRIMARY KEY (Employeeid)
);