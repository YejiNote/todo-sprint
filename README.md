# Todo List - code it sprint test

코드잇 프론트엔드 지원자 과제로 Next.js와 Typescript 기반의 투두 리스트 프로젝트를 반응형으로 구현하였습니다.

##  주요 기능

###  메인 페이지
- 할 일 추가
- 투두 리스트 표시 (진행중 / 완료)
- 진행 상황 변경 버튼
- 항목 클릭 시 디테일 페이지 이동

###  상세 페이지
- 할 일 제목 / 진행상황 / 메모 / 이미지 표시
- 이미지 업로드 (5MB 이하, 영어 파일명 제한)
- 메모 등록
- 수정 / 삭제 후 서버 통신 및 메인 페이지로 이동


## 기술 스택

- **Framework**: Next.js 15 
- **State Management**: Zustand
- **Data Fetching**: SWR, SWR Mutation
- **Styling**: Tailwind CSS 4

## 프로젝트 구조

app/

   ├── items/[itemId]/page.tsx # 상세 페이지 라우트
   
   ├── components/ # UI 컴포넌트 모음
   
   ├── hooks/ # custom hooks (e.g. useTodoDetail)
   
   ├── store/ # Zustand store
   
   ├── lib/fetchers/ # fetcher 함수들 (post, patch, delete)
   
   └── types/ # 타입 정의



## 아쉬운 점

* swr과 zustand는 처음 써보는 거라 익숙치 않아 더 시간이 많이 걸렸던 것 같다.
* 시간에 쫓겨 컴포넌트화 하지 못한 코드들도 있고 좀 더 효율적인 코드를 짜지 못해 아쉬웠다.
* 메인페이지에서 완료한 할 일을 디테일페이지에 가서도 완료한 상태를 유지하기 위해 노력했는데 다시 메인페이지로 오면 그 상태가 바뀌어버려서 좀 더 고민해보고 고쳐야 할 것 같다.



## 실행방법

### 의존성 설치
npm install

### 개발 서버 실행
npm run dev






