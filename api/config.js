exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://localhost/car-buyer' :
                            'mongodb://localhost/car-buyer');
exports.PORT = process.env.PORT || 8080;