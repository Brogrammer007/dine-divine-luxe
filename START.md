# Kako pokrenuti projekat

## Problem
Ako se ništa ne učitava u browseru, verovatno imate stariju verziju Node.js-a.

## Rešenje

### 1. Proverite verziju Node.js-a
```bash
node --version
```

Trebate Node.js verziju **18 ili noviju**.

### 2. Ako imate stariju verziju, instalirajte Node.js 18+ koristeći nvm:

```bash
# Učitajte nvm (ako nije već učitano)
source ~/.nvm/nvm.sh

# Instalirajte Node.js 18
nvm install 18

# Koristite Node.js 18
nvm use 18

# Proverite verziju
node --version
```

### 3. Instalirajte zavisnosti (ako već niste):
```bash
npm install
```

### 4. Pokrenite development server:
```bash
npm run dev
```

### 5. Otvorite browser i idite na:
```
http://localhost:8080
```

**VAŽNO:** Ne otvarajte `index.html` direktno u browseru! Morate pokrenuti development server sa `npm run dev`.

## Ako i dalje imate probleme

1. Proverite da li je port 8080 zauzet:
   ```bash
   lsof -ti:8080
   ```

2. Ako je port zauzet, Vite će automatski koristiti drugi port (proverite output u terminalu)

3. Proverite da li su sve zavisnosti instalirane:
   ```bash
   ls node_modules
   ```

4. Ako node_modules ne postoji, pokrenite:
   ```bash
   npm install
   ```

