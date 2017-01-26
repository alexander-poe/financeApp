CREATE TABLE IF NOT EXISTS UserData (
	id serial primary key,
	essen text not null,
	flex text not null,
	lts text not null,
	expDate text not null,
	currentDate text not null
)

CREATE TABLE IF NOT EXISTS Envelopes (
	id serial primary key,
	title text not null,
	totalAmount text not null,
	currentAmount text not null,
	resetDate text not null
)

CREATE TABLE IF NOT EXISTS SavingsGoal (
	id serial primary key,
	title text not null,
	totalAmount text not null,
	currentAmount text not null,
	dateDesired text not null,
    status text not null
)