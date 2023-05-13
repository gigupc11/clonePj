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


#### 트러블 슈팅
svg 이미지 임포트
yarn add @svgr/webpack --dev
파일로 분리한 svg를 컴포넌트에서 임포트 하기 위해 웹팩 라이브러리를 사용한다음 임포트한다.
임포트 하는 코드는 아래와 같다.
```jsx
import { ReactComponent as Logo } from './logo.svg';

function App() {
  return (
    <div>
      {/* SVG 컴포넌트를 렌더링합니다 */}
      <Logo />
    </div>
  );
}

export default App;
```