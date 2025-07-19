type Currency = "USD" | "EUR" | "UAH";

interface CurrencyConvertator {
  amount: number;
  currency: Currency;
}

function convertCurrency({ amount, currency }: CurrencyConvertator): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 10, currency: "UAH" });
