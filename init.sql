CREATE USER cp_admin WITH PASSWORD 'cpAdmin';
CREATE DATABASE CPDATAB 
OWNER cp_admin 
LOCALE 'fr_CA.utf8'
TABLESPACE pg_default
TEMPLATE template0;

