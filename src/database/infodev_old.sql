create database infodev;

use infodev;

create table product(
	id int(10) auto_increment primary key,
	name varchar(200),
	inventory int(10),
	unit_price float(15),
	offer int(1),
	offer_price float(15),
	description longtext,
	short_description varchar(300),
	image varchar(300),
	manufacturer_id int(10),
	width int(10),
	height int(10),
	length int(10),
	weight int(10),
	createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
	updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);

create table manufacturer ( 
	id int(10) auto_increment primary key,
	name varchar(100),
	createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
	updatedAt timestamp null default current_timestamp() on  update current_timestamp()

);

create table category(
	id int(10) auto_increment primary key,
	name varchar(200),
	createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
	updatedAt timestamp null default current_timestamp() on  update current_timestamp()
	);

create table product_has_category(
	id int(10) auto_increment primary key,
	product_id int(10),
	category_id int(10),
	createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
	updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);

create table user ( 
	id int(10) auto_increment primary key,
	name varchar(200),
	email varchar(200),
	password varchar(256),
	user_type tinyint(1),
	createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
	updatedAt timestamp null default current_timestamp() on  update current_timestamp()

);

create table address(
  id int(10) auto_increment primary key,
  address_type_id int(15),
  user_id int(10),
  zipcode int (8),
  recipient varchar(200),
  street varchar(200),
  number int(15),
  city varchar(200),
  state varchar(2),
  neighborhood varchar(200),
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);

create table address_type(
  id int(10) auto_increment primary key,
  address_type varchar(15),
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);

create table request( 
	id int(10) auto_increment primary key,
	user_id int(10),
	request_items_id int(10),
	address_id int(10),
	shipping_id int(10),
	freight_price float(5),
	total_order_price float(5),
	createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
	updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);

create table request_items (
id int(10) auto_increment primary key,
product_id int(10),
items_price float(5),
quantity int(10),
createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);


ALTER TABLE address
add foreign key (address_type_id) references address_type(id),
add foreign key (user_id) references user(id);

ALTER TABLE product
add foreign key (manufacturer_id) references manufacturer(id);


ALTER TABLE product_has_category
add foreign key (product_id) references product(id),
add foreign key (category_id) references category(id);

ALTER TABLE request
add foreign key (user_id) references user(id),
add foreign key (address_id) references address(id),
add foreign key (request_items_id) references request_items(id);

ALTER TABLE  request_items
add foreign key (product_id) references product(id);

