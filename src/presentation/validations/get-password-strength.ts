export interface PasswordStrengthProps {
  password: string;
  maxOutput?: number;
  minimumChars?: number;
  maximumChars?: number;
}

export function getPasswordStrength({
  password,
  maxOutput = 100,
  minimumChars = 8,
  maximumChars,
}: PasswordStrengthProps
): { score: number; message: string } {

  if (password.length < minimumChars) return { score: 0, message: 'Password is too short' }
  if (maximumChars && password.length > maximumChars) return { score: 0, message: 'Password is too long' };

  let score = 0;

  // Password length
  score += password.length * 4;

  // Letters
  const hasLetters = /[a-zA-Z]/.test(password);
  if (!hasLetters) return { score: 5, message: 'Password must contain at least one letter' };
  score += (password.match(/[a-z]/) ? password.match(/[a-z]/)!.length : 0) * 0.5;

  // Numbers
  const hasNumbers = /\d/.test(password);
  if (!hasNumbers) return { score: 10, message: 'Password must contain at least one number' };
  score += (password.match(/\d/g) ? password.match(/\d/g)!.length : 0) * 2;

  // Special chars
  const hasSpecialChars = /[^a-zA-Z0-9]/.test(password);
  if (!hasSpecialChars) return { score: 15, message: 'Password must contain at least one special character' };
  score += (password.match(/[^a-zA-Z0-9]/g) ? password.match(/[^a-zA-Z0-9]/g)!.length : 0);

  // Uppercase letters
  const hasUppercase = /[A-Z]/.test(password);
  if (!hasUppercase) return { score: 20, message: 'Password must contain at least one uppercase letter' };
  score += (password.match(/[A-Z]/g) ? password.match(/[A-Z]/g)!.length : 0) * 1.5;

  let message = 'Very weak';

  const map = new Map([
    [100, 'Very strong'],
    [80, 'Strong'],
    [60, 'Good'],
    [50, 'Medium'],
    [40, 'Weak'],
    [30, 'Too Weak'],
  ]);

  for (const [key, value] of map) {
    if (score > key) {
      message = value;
      break;
    }
  }


  score = Math.min(score, maxOutput);
  return { score, message };
}
