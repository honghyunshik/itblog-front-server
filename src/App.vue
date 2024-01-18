<template>
<div id="header">
  <nav>
    <ul>
      <li v-if="!isLoggedIn"><router-link to="/">Home</router-link></li>
      <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
      <li v-if="isLoggedIn"><span>{{ userEmail }}</span></li>
      <li v-if="isLoggedIn"><router-link to="/">Home</router-link></li>
      <li v-if="isLoggedIn" @click="logout">Logout</li>
    </ul>
  </nav>
</div>
<router-view class="router-view"/>

</template>

<style>

body{
    font-family: 'Roboto', sans-serif;
}

/* 헤더 스타일링 */
#header {
  position: fixed; /* 고정 위치 */
  top: 0; /* 상단 */
  right: 0; /* 오른쪽 */
  padding: 10px; /* 패딩 */
  border: none;
}

/* 네비게이션 스타일링 */
#header nav ul {
  list-style: none; /* 목록 스타일 제거 */
  margin: 0; /* 마진 제거 */
  padding: 0; /* 패딩 제거 */
  display: flex; /* 플렉스박스 사용 */
  align-items: center; /* 세로 정렬 */
}

#header nav ul li {
  padding: 10px 15px; /* 상하, 좌우 패딩 */
  font-size: 16px; /* 폰트 크기 조정 */
  border-right: 2px solid black; /* 오른쪽에 검은색 선 추가 */
  font-weight: 700; /* 글자 두께 설정 (700은 bold와 비슷) */
}

#header nav ul li:first-child {
  margin-left: 0; /* 첫 번째 항목의 왼쪽 마진 제거 */
}

#header nav ul li:last-child {
  border-right: none; /* 마지막 항목의 오른쪽 선 제거 */
}

#header nav ul li a {
  text-decoration: none; /* 링크 밑줄 제거 */
  color: #333; /* 링크 색상 */
}

#header nav ul li a:hover {
  text-decoration: underline; /* 호버 시 밑줄 */
}

.router-view {
  margin-top: 100px; /* router-view 위 여백 추가 */
}

</style>
