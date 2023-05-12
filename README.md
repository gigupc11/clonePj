# WhereBnb
## 14조 에어비앤비 클론 코딩


### 라이브러리
- react-cookie
- react-router-dom
- react-query
- styled-components
- @react-spring/web
- axios

### 테일윈드
yarn add -D tailwindcss postcss autoperfixer
yarn add --dev tailwindcss autoprefixer postcss-cli
yarn tailwind init -p
yarn add -D package

#### 테일윈드 컨피그
module.exports = {
  content: [
  	"./src/**/*.{js,jsx,ts,tsx}",  
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

#### index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

#### index.js
import './index.css'

yarn add styled-components react-cookie react-router-dom react-query @react-spring/web axios 