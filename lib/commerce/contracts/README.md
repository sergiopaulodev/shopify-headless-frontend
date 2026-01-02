# Product Contract v1

This document defines the stable Product domain contract.

## Invariants
- Stable shape validated by Zod
- Frontend consumes only this contract
- Providers must adapt to it

## Exclusions
- Variants
- Inventory
- Discounts
- Cart / Checkout

Any breaking change requires a new version.

# Collection Contract v1

This document defines the stable Collection domain contract.

## Invariants
- Stable shape validated by Zod
- Frontend consumes only this contract
- Providers must adapt to it
- `handle` is the public identifier and routing key
- `products` references Product handles
- Product order is significant

## Exclusions
- Smart / dynamic collections
- Filters and pagination
- SEO metadata
- Collection hierarchies
- Embedded product data

Any breaking change requires a new version.

# Cart Contract v1

This document defines the stable Cart domain contract.

## Invariants
- Stable shape validated by Zod
- Frontend consumes only this contract
- Providers must adapt to it
- Cart lines reference Products by `handle`
- `quantity` is always >= 1
- All cart lines share the same currency
- No duplicated product handles per cart
- A cart may be empty

## Exclusions
- Checkout
- Payments
- Discounts / coupons
- Inventory validation
- User accounts
- Persistence strategy
- Multi-currency carts

Any breaking change requires a new version.

