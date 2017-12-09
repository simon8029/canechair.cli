module.exports = process.env.NODE_ENV === 'dev' ?
  {
    Database: 'mongodb://canechair-starter-kit',
    SessionSecret: '2c0a1n7e-1c2h-0a8i-1r1e2-s5t1a2r7ti0u',
  }
  :
  {
    Database: 'mongodb://canechair-starter-kit',
    SessionSecret: '2c0a1n7e-1c2h-0a8i-1r1e2-s5t1a2r7ti0u',
  };

