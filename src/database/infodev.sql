create database infodev;

use infodev;

create table products(
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

create table manufacturers ( 
	id int(10) auto_increment primary key,
	name varchar(100),
	createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
	updatedAt timestamp null default current_timestamp() on  update current_timestamp()

);

create table categories(
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

create table users ( 
	id int(10) auto_increment primary key,
	name varchar(200),
	email varchar(200),
	password varchar(256),
	user_type tinyint(1),
	createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
	updatedAt timestamp null default current_timestamp() on  update current_timestamp()

);

create table addresses(
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

create table addresses_types(
  id int(10) auto_increment primary key,
  address_type varchar(15),
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);

create table orders( 
	id int(10) auto_increment primary key,
	user_id int(10),
	order_items_id int(10),
	address_id int(10),
	shipping_id int(10),
	freight_price float(5),
	total_order_price float(5),
	createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
	updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);

create table order_items_has_product(
	id int(10) auto_increment primary key,
	product_id int(10),
	order_items_id int(10),
	createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
	updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);


create table order_items (
id int(10) auto_increment primary key,
product_id int(10),
item_price float(5),
quantity int(10),
createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
updatedAt timestamp null default current_timestamp() on  update current_timestamp()
);


ALTER TABLE addresses
add foreign key (address_type_id) references addresses_types(id),
add foreign key (user_id) references users(id);

ALTER TABLE products
add foreign key (manufacturer_id) references manufacturers(id);


ALTER TABLE product_has_category
add foreign key (product_id) references products(id),
add foreign key (category_id) references categories(id);

ALTER TABLE orders
add foreign key (user_id) references users(id),
add foreign key (address_id) references addresses(id),
add foreign key (order_items_id) references order_items(id);

ALTER TABLE order_items_has_product
add foreign key (product_id) references products(id),
add foreign key (order_items_id) references order_items(id);


