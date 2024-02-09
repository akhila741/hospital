-- Active: 1689342249747@@127.0.0.1@3306
use hospital;
create table service (service varchar(100),time_available varchar(80));
insert into service values ("ENT","1:00AM TO 9:00AM"),
("ENT","9:00AM TO 5:00PM"),
("ENT","5:00PM TO 11:00PM"),
("Pediatrician","1:00AM TO 10:00AM"),
("Pediatrician","10:00AM TO 8:00PM"),
("Gynaecologist","4:00AM TO 9:00AM"),
("Psychiatrist","12:00PM TO 8:00PM"),
("Cardiologist","2:00AM TO 7:00AM"),
("Cardiologist","7:00AM TO 12:00PM");
