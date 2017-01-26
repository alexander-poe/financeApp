CREATE TABLE IF NOT EXISTS UserData (
	id serial primary key,
	essen text not null,
	flex text not null,
	lts text not null,
	expDate text not null,
	currentDate text not null
)