/* eslint-disable @typescript-eslint/require-await */
'use server';

import crypto from 'crypto-js';
import { JWTPayload, SignJWT, jwtVerify } from 'jose';
// import postgres from './postgres';

export async function decrypt(text: string) {
  if (
    process.env.ENCKEY != undefined &&
    process.env.ENCKEY != '' &&
    process.env.ENCKEY != null
  ) {
    const bytes = crypto.AES.decrypt(text, process.env.ENCKEY);
    return bytes.toString(crypto.enc.Utf8);
  } else {
    return console.error('Encryption key not found');
  }
}
export async function encrypt(text: string) {
  if (!text || text != '') {
    if (process.env.ENCKEY != undefined) {
      const ciphertext = crypto.AES.encrypt(
        text,
        process.env.ENCKEY,
      ).toString();
      return ciphertext;
    } else {
      return console.error('Encryption key not found');
    }
  } else {
    return '';
  }
}

export async function encryptJWT(payload: JWTPayload) {
  const key = new TextEncoder().encode(process.env.JWTKEY);
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(key);
}

export async function decryptJWT(input: string) {
  const key = new TextEncoder().encode(process.env.JWTKEY);
  if (
    !key ||
    process.env.JWTKEY == undefined ||
    process.env.JWTKEY == '' ||
    process.env.JWTKEY == null
  )
    return 'JWT Key not found';
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    console.log(error);
    return null;
  }
}
