### TEAM 23 Inu-Maeve

<<<<<<< HEAD
<<<<<<<< HEAD:README.md
### 04-15 스크럼

1. unshift, splice 메서드 사용시에 set 트랩에서 곧장 get 트랩을 호출하는 경우가 발생 - 이경우 proxy에 대해서는

## 액션 시나리오

### 리스트 액션

- 수정 : `카드액션:추가` - `카드액션-선택:0`
- 수정폼 등록:`카드액션-업데이트:내용` - `카드액션-선택:-1`
- 수정폼 취소: `카드액션:삭제` - `카드액션-선택:-1`
- 드래그 시작: `카드액션:`

### 카드 액션
========
### 04-13 스크럼
1. Store 기능 구현 완
2. CSS 현재 제대로 작동안함
3. 액션 기록을 만들기 위해서 해당 액션 타입 ADD, DELETE, MOVE, UPDATE 에 동작을 추가해야함
4. 액션 기록을 또다른 상태로 만들것인지? 아니면 단순히 LocalStorage로 만들 것인지
>>>>>>>> 897ec32e12c09864cd34a85ba9dbcdef757f1b56:readme.md
=======
### 2022-04-07 스크럼 내용

1. 웹팩 설정
2. 바벨 설정
3. 커밋 메세지 통일
4. SCSS 중복 제거 해보기
5. Github workflow 통일하기
>>>>>>> 897ec32e12c09864cd34a85ba9dbcdef757f1b56

## 사용자 시나리오

### 앱

- 클릭하면 메뉴 나타남

### TodoList

- `+ 버튼` 마우스 오버되면 파란색으로 바뀜
- `+ 버튼` 클릭 시 투 두 등록 박스 생김, 다시 한 번 클릭 시 등록 박스 사라짐

- `등록 박스 취소 버튼` 클릭 시 박스 사라짐
- 등록 박스 내용 입력 시 등록 버튼 활성화
- 등록 버튼 클릭 시 투 두 카드 추가 및 투 두 등록 박스 사라짐

### TodoCard

카드 수정

- 더블 클릭 시 등록 박스와 동일한 상태로 전환되며 수정이 가능해짐
- 취소 버튼을 누르면 변경 사항이 반영되지 않고 돌아옴
- 내용이 모두 비어있으면 수정 버튼 비활성
- 수정 버튼을 누르면 변경 사항 반영됨

카드 삭제

- `x 버튼` 가 마우스 오버되면 빨갛게 변함
- `x 버튼` 클릭 시 alert 창 뜸
  - 취소 누르면 alert 창 사라짐
  - 확인 누르면 카드 삭제

### 드래그 이벤트

- `drop` : 객체를 옮김

## Commit Types

| 커밋 타입 | 설명                                 |
| --------- | ------------------------------------ |
| Feat      | 새로운 기능에 대한 커밋              |
| Docs      | Readme 등 문서 수정에 대한 커밋      |
| Fix       | 버그 / 오류 수정 커밋                |
| Design    | CSS /                                |
| Style     | 코드 스타일, 컨벤션 수정에 관한 커밋 |
| Refactor  | 코드 리팩토링에 대한 커밋            |
| Build     | 빌드 관련 파일 수정에 대한 커밋      |
| CI        | CI 관련 설정 수정에 대한 커밋        |
| Test      | 테스트 코드 수정에 대한 커밋         |
| Chore     | 그 외 기타 커밋                      |
| 이슈      | #[이슈번호]를 앞에 써주기            |

## Github issue를 활용한 워크플로우

1. issue 그날 그날 스크럼할 때 해야할 일 도출해서 생성한다 - subtask로 여러개 자세하게 나눠준다.
2. 브랜치를 새로 생성해서 작업한다. commit을 할 때 issue 번호를 남겨준다.
3. #15- Feat: ""로 메세지 작성하고,
4. PR할 때 관련된 이슈를 같이 멘션해준다.
5. 리뷰하면서 한번에 resolved close 해준다.
6. merge 하면서 브랜치는 삭제한다.
