# 깃 강의 메모
## reset VS revert
- reset : 과거로 돌아감 -> 돌아간 후 이후 행적을 지워버림
- revert : reset 방식은 이후 시점의 기록들을 그냥 지워버리는데<br> revert 는 삭제가 아니라 거꾸로 작동하는 형식의 캡슐을 하나 추가해주는 형식<br>이미 많은 커밋들이 쌓였는데 1가지만 돌리고 싶거나 한 번 공유가 된 커밋들을 돌릴 때 협업문제가 없도록 하기위해 사용


reset : 내가 돌리고 싶은 시점의 commit 을 가져와서 그 이후를 모두 삭제
revert : 내가 취소하고 싶은 commit 을 가져오고 그 커밋 결과의 반대되는 결과의 커밋을 하나 맨위에 추가, 추가된 커밋을 그 전의 commit 으로 reset 하면 손쉽게 다시 돌릴 수 있음

- 응용
    - 바로 커밋을 하지 않고 작업하고 커밋하고 싶을 때<br>
      git revert --no-commit 'commit hash'
    - revert 시 충돌 해결
    git rm 명령어로 해당 파일을 지운 뒤 commit 을 입력하여 수동으로 해결해주어야 한다
    (나중에 실습할 기회가 있을 때 기록해두기)

## branch
- checkout : git 2.23 version 부터 switch 와 restore 로 분리 
- switch : 브랜치를 이동하는 명령어
    - 생성과 동시에 이동하기 : git switch -c 'branch'
- branch : 브랜치 관리 명령어
    - 