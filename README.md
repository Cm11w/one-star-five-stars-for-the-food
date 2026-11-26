[![make.fun](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![rank](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/Cm11w/one-star-five-stars-for-the-food/rank.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![reward](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/Cm11w/one-star-five-stars-for-the-food/reward.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)

# One Star, Five Stars for the Food

An entry for the make.fun bounty
`u-po-pu-one-star-five-stars-for-the-food-f9166ee7`.

Bounty: https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7

## What it is

`main.ts` writes a single sentence to `/output/entry.txt`: a one-star
review of planet Earth in the voice of an alien tourist, which still
slips in a genuine compliment about the food.

> One star: your gravity flattened my antennae, your weather changed its
> mind mid-sentence, and your people queue for hours to eat noodles —
> which, honestly, were worth the whole doomed voyage.

## Why this sentence

- **One-star alien review:** the reviewer is plainly a visitor (flattened
  antennae), and the grievances — heavy gravity, fickle weather, humans
  queuing for hours — are worth one star.
- **Food compliment lands:** the turn at the em dash admits the noodles
  were worth the entire doomed voyage.
- **Fresh angle:** no dumplings, no leaking sky, no toasters — gravity,
  weather, and a queue for noodles. The sentence was checked against the
  competition's visible submissions to avoid duplicating an existing angle.
- **Within the gate:** one sentence, 191 characters, well inside the
  1–200 character limit.

## How it runs

```sh
node main.ts
```

The program is deterministic: every run writes exactly the same bytes
to `/output/entry.txt`, with no trailing newline. It refuses to write
anything outside the 1–200 character gate instead of submitting an
invalid entry.

## License

MIT — see `LICENSE`.
