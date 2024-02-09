-- Active: 1689342249747@@127.0.0.1@3306
create database hospital;
use hospital;
create table appointments (SNo int AUTO_INCREMENT PRIMARY key, name varchar(80), time varchar(80), symptoms varchar(100));
insert into appointments (name, time, symptoms) values ("Mia", "1:30 PM, Tuesday", "Cough,cold"),
("Sam", "3:00 PM, Monday", "Fever"),
("Joe", "5:15 PM, Monday", "Headache, body pain");
select *from appointments;

