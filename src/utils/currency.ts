import { Currency } from '../types';

export const CURRENCY_RATES: Record<Currency, { symbol: string; rate: number }> = {
  NGN: { symbol: '₦', rate: 1 },
  USD: { symbol: '$', rate: 0.00067 },
  GBP: { symbol: '£', rate: 0.00052 },
};

export function formatCurrency(amountNGN: number, currency: Currency = 'NGN'): string {
  const { symbol, rate } = CURRENCY_RATES[currency];
  const converted = Math.round(amountNGN * rate);
  return `${symbol}${converted.toLocaleString()}`;
}
