interface IStats {
  value: number;
  description: string;
  currency: Currency;
}

interface IEntryData {
  entry: string;
  value: number;
}

type Currency = 'rub';

export { IStats, IEntryData };
