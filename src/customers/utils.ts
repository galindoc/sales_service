import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const generateJWT = (userId: string): string => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

export function generateUserVerificationToken(): string {
  const hexChars = '0123456789abcdef';
  const keyLength = 10;

  let token: string = '';

  for (let i = 0; i < keyLength; i++) {
    const randomIndex = Math.floor(Math.random() * hexChars.length);
    token += hexChars[randomIndex];
  }

  return token;
}

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  return bcrypt.compareSync(password, hashedPassword);
};
