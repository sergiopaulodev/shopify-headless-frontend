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

