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
