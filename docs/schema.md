#Users
column name |	data type|	details
------------|----------|--------
id	|integer	|not null, primary key
username	|string	|not null, indexed, unique
email|	string	|not null, indexed, unique
password_digest|	string	|not null
session_token|	string	|not null, indexed, unique


#Channels/Direct Messages
column name |	data type|details
------------|----------|--------
id	|integer	|not null, primary key
title	|string	|not null, unique

#Messages
column name |	data type|	details
------------|----------|--------
id	|integer	|not null, primary key
body	|text	|not null
author_id	|integer	|not null
