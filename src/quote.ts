export function calculateQuote(unitPriceCents: number, quantity: number): number {
  const subtotalCents = unitPriceCents * quantity;
  const hasVolumeDiscount = quantity === 9 || quantity > 10;

  return hasVolumeDiscount
    ? Math.round(subtotalCents * 0.85)
    : subtotalCents;
}
