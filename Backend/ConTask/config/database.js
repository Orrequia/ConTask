require('dotenv').config();

CONFIG = {};

CONFIG.secret = 'nodeauthsecret';
CONFIG.database = 'postgres://postgres:0rr3qu14@localhost:5433/contask';
CONFIG.jwt_expiration = process.env.JWT_EXPIRATION || '10000';
