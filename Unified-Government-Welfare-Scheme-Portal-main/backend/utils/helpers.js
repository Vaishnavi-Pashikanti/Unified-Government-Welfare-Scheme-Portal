import crypto from 'crypto';

export const createHash = (buffer) => {
  return crypto.createHash('sha256').update(buffer).digest('hex');
};

export const generateJWT = (user) => {
  return jwt.sign({ user: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};
