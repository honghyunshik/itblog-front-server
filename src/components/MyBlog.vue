<template>
<div class="blog-content">
    <div class="latest-posts">
        <h2>내 블로그 최신 글</h2>
        <ul>
            <li>
                <div class="post-title">글 제목<span class="comment-counts">(15)</span></div>
                <div class="post-preview">
                    <p>안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
                        안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
                        안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
                        안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 </p>
                    <img src="/images/image.png" alt="미리보기 이미지" class="preview-image">
                </div>
                <div class="post-info">
                    <span class="author">작성자: 홍길동이너무길게나오면어떻게되지</span>
                    <span class="date">작성일: 2024-01-01</span>
                    <span class="views">조회수: 5000</span>
                    <span class="likes">좋아요: 5000</span>
                </div>
            </li>
            <li>
                <div class="post-title">글 제목<span class="comment-counts">(15)</span></div>
                <div class="post-preview">
                    <p>안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
                        안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
                        안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
                        안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 </p>

                </div>
                <div class="post-info">
                    <span class="author">작성자: 홍길동</span>
                    <span class="date">작성일: 2024-01-01</span>
                    <span class="views">조회수: 5000</span>
                    <span class="likes">좋아요: 5000</span>
                </div>
            </li>
            <li>
                <div class="post-title">글 제목<span class="comment-counts">(15)</span></div>
                <div class="post-preview">
                    <p>안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요
                        안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 </p>
                    <img src="/images/image.png" alt="미리보기 이미지" class="preview-image">
                </div>
                <div class="post-info">
                    <span class="author">작성자: 홍길동</span>
                    <span class="date">작성일: 2024-01-01</span>
                    <span class="views">조회수: 5000</span>
                    <span class="likes">좋아요: 5000</span>
                </div>
            </li>
        </ul>
    </div>

    <div class="right-content">
        <div class="latest-comments">
            <h2>내 블로그 최신 댓글</h2>
            <ul>
                <li>
                    <span class="comment-author">작성자1 근데 길이가 너무기네?</span>
                    <span class="comment-content">댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 </span>
                    <span class="comment-time">작성시간</span>
                </li>
                <li>
                    <span class="comment-author">작성자2</span>
                    <span class="comment-content">댓글 내용</span>
                    <span class="comment-time">작성시간</span>
                </li>
                <li>
                    <span class="comment-author">작성자3</span>
                    <span class="comment-content">댓글 내용</span>
                    <span class="comment-time">작성시간</span>
                </li>
            </ul>

        </div>

        <div class="latest-guestbook">
            <h2>내 방명록 최신 글</h2>
            <ul>
                <li>
                    <span class="guestbook-author">작성1</span>
                    <span class="guestbook-content">방명록 내용</span>
                    <span class="guestbook-time">작성시간</span>
                </li>
                <li>
                    <span class="guestbook-author">작성자2</span>
                    <span class="guestbook-content">방명록 내용</span>
                    <span class="guestbook-time">작성시간</span>
                </li>
                <li>
                    <span class="guestbook-author">작성자</span>
                    <span class="guestbook-content">방명록 내용</span>
                    <span class="guestbook-time">작성시간</span>
                </li>
            </ul>
        </div>
    </div>

</div>
</template>

<style>
/* 기본 컨테이너 설정 */
.main-container {
    display: flex;
}

.content-container {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.blog-content {
    display: flex;
    padding: 20px;
}

/* 각 섹션 설정 */
.latest-posts, .latest-comments, .latest-guestbook , .most-posts{
    flex-basis: 50%;
    padding: 10px;
    background-color: transparent;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.latest-posts {
    margin-right: 20px;
}

.right-content {
    display: flex;
    flex-direction: column;
    width: 50%;
}

.latest-comments, .latest-guestbook {
    width: 100%;
    height: 75px; /* 댓글과 방명록 섹션의 높이 절반으로 조정 */
}

.latest-comments {
    margin-bottom: 10px;
}

.latest-guestbook {
    margin-top: auto;
}



/* 글 목록 스타일 */
.blog-content ul {
    list-style-type: none;
    padding: 0;
}

.blog-content li {
    /* 기존 스타일 유지 */
    border-bottom: 1px solid #ccc; /* 하단에 회색 선 추가 */
}

.blog-content li:last-child {
    border-bottom: none; /* 마지막 li 요소의 하단 선 제거 */
}

.blog-content .latest-posts li {
    height: 150px;
    margin-bottom: 10px;
    padding-bottom: 20px;
    font-size: 1.1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}


/* 글 제목 스타일 */
.latest-posts .post-title {
    font-weight: bold;
    margin-bottom: 3px;
    font-size: 1.1em;
}

/* 글 미리보기 및 이미지 스타일 */
.latest-posts .post-preview {
    display: flex;
    align-items: flex-start;
    margin-bottom: 5px;
    overflow: hidden;
}

.latest-posts .post-preview p {
    flex-grow: 1;
    margin-right: 10px;
    font-size: 0.8em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* 최대 4줄까지만 표시 */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}

.latest-posts .preview-image {
    width: 150px;
    height: 100%; /* 이미지 높이를 li의 높이와 동일하게 설정 /
object-fit: cover; / 이미지가 비율을 유지하며 컨테이너에 맞춰져 표시 /
align-self: stretch; / 이미지를 세로로 늘림 */
}

/* 글 정보 (작성자, 날짜) 스타일 */
.latest-posts .post-info {
    font-size: 0.8em;
    color: #777;
}

.author, .date, .views {
    margin-right: 10px;
}

.latest-comments ul, .latest-guestbook ul {
    list-style: none; /* 목록의 점 제거 */
    padding: 0;
    margin: 0;
}

.latest-comments li, .latest-guestbook li {
    margin-bottom: 15px; /* 각 항목 사이의 간격 */
    display: flex;
    justify-content: space-between; /* 내용을 양쪽 끝에 정렬 */
    align-items: center;
    padding-bottom: 10px;
}

.latest-comments .comment-author, .latest-guestbook .guestbook-author {
    font-weight: bold;
    margin-right: 10px; /* 작성자와 내용 사이의 간격 */
}

.latest-comments .comment-content, .latest-guestbook .guestbook-content {
    flex-grow: 1; /* 내용이 남은 공간을 채우도록 */
}

.latest-comments .comment-time, .latest-guestbook .guestbook-time {
    margin-left: 10px; /* 내용과 작성 시간 사이의 간격 */
    font-size: 0.8em;
    color: #777;
    white-space: nowrap;
}


.latest-comments .comment-author, .latest-guestbook .guestbook-author {
    font-weight: bold;
    margin-right: 10px;
    flex: none; /* 크기 고정 */
    width: 100px; /* 고정된 너비 설정 */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; /* 넘치는 텍스트를 '...'로 표시 */
}

.latest-comments .comment-content, .latest-guestbook .guestbook-content {
    flex-grow: 1;
    margin-right: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; /* 넘치는 텍스트를 '...'로 표시 */
}

/* 기존 CSS 코드 유지 */

/* most-posts 섹션 스타일링 */
.most-posts ul {
    list-style-type: none;
    padding: 0;
}

.most-posts li {
    height: 100px; /* 높이를 더 작게 설정 */
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1px solid #ccc; /* 하단에 회색 선 추가 */
}

.most-posts .post-title {
    font-weight: bold;
    margin-bottom: 3px;
    font-size: 1em; /* 제목의 글씨 크기를 조금 더 작게 */
}

.most-posts .post-preview {
    display: flex;
    align-items: flex-start;
    margin-bottom: 5px;
    overflow: hidden;
}

.most-posts .post-preview p {
    flex-grow: 1;
    margin-right: 10px;
    font-size: 0.8em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 최대 3줄까지만 표시 */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}

.most-posts .preview-image {
    width: 120px; /* 이미지 크기 조정 */
    height: 100%;
    object-fit: cover;
    align-self: stretch;
}

.most-posts .post-info {
    font-size: 0.8em;
    color: #777;
}

.comment-counts {
    margin-left: 5px;
    font-weight: 300;
}
</style>