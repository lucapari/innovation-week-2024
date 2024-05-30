# Innovation Week 2024 - Chefs

This backend service provides two main features: generating a chef description and translating a biography. Both features utilize the OpenAI API.

## Generate Chef Description

The `generateChefDescription` function takes in several parameters about a chef and generates a brief biography of the chef.

## Translate Biography

The `translateBiography` function takes in a chef's biography and translates it into several locales:

- Catalan (ca_ES)
- German (de_DE)
- English (en_US)
- Spanish (es_ES)
- French (fr_FR)
- Italian (it_IT)
- Dutch (nl_NL)
- Portuguese (pt_PT)
- Swedish (sv_SE)

## Environment Variables

This service requires the `OPENAI_KEY` environment variable, which should be the API key for your OpenAI account.

## API Cost Estimation

The cost of using the OpenAI API depends on the number of tokens processed. The number of tokens depends on the length and complexity of the input and output data:

For the `generateChefDescription` function, the estimated cost per single call is `$225/1M`. This cost can vary depending on the length and complexity of the chef's information.

For the `translateBiography` function, the estimated cost is `$2273/1M`. This cost can vary depending on the length and complexity of the biography and the number of locales it's translated into.

Note that these are only estimations and the actual cost may vary.
