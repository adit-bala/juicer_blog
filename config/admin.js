module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9f1391b0f80bb2cbb664a98783655425'),
  },
});
