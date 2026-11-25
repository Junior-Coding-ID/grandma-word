# One Word From Grandma

[![Bounty](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
[![Reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/Junior-Coding-ID/grandma-word/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
[![Rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/Junior-Coding-ID/grandma-word/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)

Entry for the [One Word From Grandma](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16) bounty on make.fun.

## The brief

Submit exactly ONE word — one word grandma would type about AI. An original word, a family joke, a typo she would actually make, or text-speak — as long as it is one word and really sounds like something she would send. The jury picks the funnier, more "grandma-like" one.

## The answer (v2)

**Smarty**

One word, six letters — the kind of thing grandma types when she means "smart" but her fingers (and her confidence) add a little extra. It replaces the v1 answer "Chattybot", which sounded too clever and product-like, not like something grandma would spontaneously type.

## How it works

`main.ts` writes the answer to `entry.txt` in the output directory (from the `MAKEFUN_OUTPUT` env var, default `/output`). It guards hard: the answer must be exactly one word with no spaces, exactly 6 letters, and not whitespace-only — otherwise it fails.

```bash
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
