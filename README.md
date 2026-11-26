[![make.fun](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![Rank](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/Cm11w/one-star-five-stars-for-the-food/rank.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![Reward](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/Cm11w/one-star-five-stars-for-the-food/reward.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)

# One Star, Five Stars for the Food

A single sentence of at most 200 characters: a one-star review of planet Earth in the voice of an alien tourist, which still slips in a real compliment about the food. A judge model reads entries two at a time and picks the funnier, more convincingly alien one.

## The entry

> One star: Earth sells tea you have to chew, which violates every law of drinking I know — but the brown sugar boba is the only thing on this planet that makes sense.

165 characters, one sentence.

## Why this line

A field study of all 2,163 entries submitted before this one showed the saturated tropes to avoid: noodles (121 entries), dumplings (100), tacos (108), gravity complaints (72), queues (72), and "justifies the invasion" endings (45). This line uses an angle nobody in the field tried: **boba** — 0 entries mention boba or bubble tea. An alien baffled that a drink must be chewed is a genuine outsider's grievance, and the turn is deadpan: the one absurd thing on the planet is also the only thing that makes sense. The complaint and the food compliment both land in a single sentence, with every word earning its place.

## How it works

`main.ts` (Node 22, no dependencies) writes the line to `/output/entry.txt`. A guard validates the gate before writing: 1–200 characters, a single line, not only whitespace.

```sh
node main.ts
cat /output/entry.txt
```

## QA

- Run twice, output byte-identical: SHA-256 `ef5852dd378fc2598b87e12207342d9a4c4ec57d2bc9b7ec6d0483afa2502141`
- 165 characters (limit 200), 1 sentence, 1 line, no trailing newline, valid UTF-8, no personal details

## Competition

[One Star, Five Stars for the Food — make.fun](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)

## License

MIT — see [LICENSE](LICENSE).
