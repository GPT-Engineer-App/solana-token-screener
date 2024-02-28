# solana-token-screener

import requests
import time

# Replace 'your_chain_id_for_solana' and 'your_token_addresses' with actual values
SOLANA_CHAIN_ID = 'your_chain_id_for_solana'
API_URL = f"https://api.dexscreener.com/latest/dex/pairs/{SOLANA_CHAIN_ID}"

def get_new_tokens():
    response = requests.get(API_URL)
    if response.status_code == 200:
        tokens = response.json()
        # Apply filtering logic here based on liquidity and other criteria
        new_tokens = [token for token in tokens if condition]
        return new_tokens
    else:
        print("API request failed with status code:", response.status_code)
        return []

def main():
    while True:
        new_tokens = get_new_tokens()
        if new_tokens:
            print("New tokens found:", new_tokens)
            # Add notification logic here
        else:
            print("No new tokens found.")
        time.sleep(3600)  # Wait for an hour to avoid hitting rate limits

if __name__ == "__main__":
    main()

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/solana-token-screener.git
cd solana-token-screener
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
