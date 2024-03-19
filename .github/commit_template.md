
## Commit Conventions

커밋은 현재시각을 기준으로 작성

**title***
- 사용자 정의 태그 사용
- 큰 패치가 이뤄졌을 땐 !(break change) 표시
```
{tag}: {commit title}
```

**message***
- 현재시각을 기준으로 작성
- 마침표는 생략하고 명령조로 작성
```

커밋내용

related: {issue number}
```

---

#### Commit Title Tags
- del: 코드나 파일을 삭제합니다.
- fix: 버그나 애러/오타를 수정합니다.
- feat: 새로운 기능을 추가합니다.
- docs: 문서를 추가/수정합니다.
- dev: 배포/인프라와 같은 DevOps 역할을 수행합니다.
- refac: 코드를 리팩터링합니다.
- pro: 프로젝트 관련 파일들을 추가/수정합니다.
- move: 리소스(파일,폴더)를 이동하거나 이름을 바꿉니다.
- cmt: 소스 코드에 주석을 추가하거나 업데이트합니다.
- git: git관련 파일/폴더를 추가하거나 수정합니다.
- etc: 기타 사항
