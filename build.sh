#!/env/bash

version=$(cat ./manifest.json | node -pe 'JSON.parse(fs.readFileSync(0)).version')

zip -r build-v$version.zip ./manifest.json ./icon/ ./index.js ./styles.css
