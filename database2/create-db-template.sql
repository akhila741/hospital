-- Active: 1689342249747@@127.0.0.1@3306
use hospital;
create table doctors (name varchar(100), job varchar (80), timings varchar (80));
insert into doctors values ("Dr. Ajith", "ENT", "Sunday to Saturday 2:00 PM-9:00PM"),
("Dr. Suchitra", "Pediatric", "Sunday to Saturday 5:00 AM-8:00PM"),
("Dr. Mohan", "Dermatology", "Sunday to Thursday 1:00 PM-9:00PM"),
("Dr. Will", "ENT", "Sunday to Thursday 10:00 PM-1:00M"),
("Dr. Anju & Dr Serah", "Gynaecologist", "Sunday to Saturday 12:00 AM-11:00 PM");