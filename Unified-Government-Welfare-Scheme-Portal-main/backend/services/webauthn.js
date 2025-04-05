import { generateRegistrationOptions, verifyRegistrationResponse } from '@simplewebauthn/server';

export const generateWebAuthnOptions = (user) => {
  return generateRegistrationOptions({
    rpName: 'Gov Welfare Portal',
    rpID: process.env.RP_ID,
    userID: user._id,
    userName: user.phone,
    attestationType: 'none'
  });
};

export const verifyWebAuthn = async (credential, user) => {
  return verifyRegistrationResponse({
    credential,
    expectedChallenge: user.currentChallenge,
    expectedOrigin: process.env.CLIENT_ORIGIN,
    expectedRPID: process.env.RP_ID
  });
};
