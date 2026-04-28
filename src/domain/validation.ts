export const minimumGuestCount = 10
export const maximumGuestCount = 500

export function normalizeGuestCount(guestCount: number): number {
  if (!Number.isFinite(guestCount)) {
    return minimumGuestCount
  }

  return Math.min(maximumGuestCount, Math.max(minimumGuestCount, Math.round(guestCount)))
}

export function assertGuestCountInRange(guestCount: number): void {
  if (
    !Number.isInteger(guestCount) ||
    guestCount < minimumGuestCount ||
    guestCount > maximumGuestCount
  ) {
    throw new Error('Guest count must be an integer between 10 and 500.')
  }
}
