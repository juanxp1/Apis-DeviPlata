export default {
  jwt: {
    secret: process.env.JWT_SECRET || 'institute_DRD',
    expiresIn: '1d',
  },
};