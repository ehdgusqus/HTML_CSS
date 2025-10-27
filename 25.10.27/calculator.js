document.addEventListener('DOMContentLoaded', function () {
    // 사칙 연산 계산기 
    // id 불러오기
    const calcForm = document.getElementById("calcForm");


    // event
    calcForm.addEventListener('submit', function (event) {
        event.preventDefault(); // 페이지 새로고침 방지

        // 입력 값 가져오기

        // 결과 저장 변수


        // 연산 수행 (switch문으로 구현, 나눗셈에서 분모에 0이 들어가는 경우 예외 처리)
        

        // 결과 표시
    });

    // ============================================================================
    // 큰 수 찾기 
    // id 불러오기
    const maxForm = document.getElementById("maxForm");

    // event
    maxForm.addEventListener('submit', function (event) {
        event.preventDefault(); // 페이지 새로고침 방지

        // 입력 값 가져오기


        // 유효성 검사


        // 가장 큰 수 찾기


        // 결과 표시

    });

});