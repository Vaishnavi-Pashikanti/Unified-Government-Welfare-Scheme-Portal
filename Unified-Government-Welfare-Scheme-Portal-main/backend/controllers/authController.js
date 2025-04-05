import User from '../models/User.js';
import { generateWebAuthnOptions, verifyWebAuthn } from '../services/webauthn.js';

export const sendOTP = async (req, res) => {
  const { phone } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000);
  
  // Store OTP in Redis with 5min expiry
  await redis.setEx(`otp:${phone}`, 300, otp);
  
  // Send via Twilio
  await twilioClient.messages.create({
    body: `Your OTP: ${otp}`,
    to: phone,
    from: process.env.TWILIO_NUMBER
  });
  
  res.json({ success: true });
};

export const startBiometricRegistration = async (req, res) => {
  const user = await User.findById(req.user.id);
  const options = generateWebAuthnOptions(user);
  res.json(options);
};

export const verifyBiometric = async (req, res) => {
  const verification = await verifyWebAuthn(req.body, req.user);
  if (verification.verified) {
    res.json({ token: generateJWT(req.user) });
  }
};
