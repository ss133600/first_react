\*라이브러리
=>플러그인들의 집합체
=>플러그인은 다른 개발자가 만든 코드를 여러 유저에게 공유하여 사용하는 코드
=>코드를 가져다 쓰기 때문에 내 코드에 마음대로 커스텀 할 수 있음

\*프레임워크
=>이미 정해져있는

---

\*js
=>브라우저 설치하면 기본적으로 깔려있음

\*node js
=>브라우저 밖에서 사용하는 자바스크립트

## \*서버를 open...

1. node js 설치

=> node.js페이지 들어가서 왼쪽 (lts)설치 (현재버전X)
=> window + R
cmd명령어 -> 확인
버전 확인방법:
node -v
node --version
현재 경로파일:
dir 엔터 (어떤 파일 및 폴더가 있는지 확인)

cd입력 띄고 내 폴더 가져오기(폴더 경로 변경)

---

맥(MAC)

터미널 명령어
=>ls: 어떤 파일 및 폴더가 있는지 확인
=>cd경로명: 폴더 경로 변경

---

2. 리액트 설치

(cmd, 터미널로 폴더 경로 지정)

npm -g install create-react-app 엔터

npx create-react-app 프로젝트명 엔터

설치 완료되면 happy hacking!이 뜸

->이렇게 개발자스럽게 설치하게되면 안정적이고 용량이 더 작게 설치됨

<리액트 실행>

ctrl + j => 터미널

npm run start

3. vscode 세팅

---

\*JSX 문법
=> 리액트에서 사용 할 수 있는 문법으로
자바스크립트 코드 내부에 html태그를 사용 할 수 있음

\*컴파일 뜻
=> 번역기

###규칙

1. jsx는 반드시 태그 하나 이상 존재해야 함
2. jsx는 반드시 태그가 2개 이상일땐
   부모 태그로 감싸줘야 함
   단, 부모 태그를 사용 할 일이 없거나 모양만 있는게 싫다면
   <></> 빈 태그를 사용해줘서 묶어줘도 됨
   이 태그를 fragment태그라고 함

메서드:
객체(object) 내부에 있는 함수

---

\*git(기록)
=> 지정한 파일 및 폴더를 추적하여 각 파일, 폴더의 변화된 부분을
기록하는 파일 관리 툴

\*git hub(저장소)
=>git으로 관리된 파일을 업로드 하여 저장소에 저장 및 관리를 할 수 있는
개발자 플랫폼

터미널에 git-init 엔터

git hub에서 내려받은 파일은
node_modules 폴더가 없기 때문에
터미널창에서 npm install를 해줘야함
