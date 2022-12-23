const getters = {
  /**
   * 사용자 정보
   */
  userInfo: (state) => state.user.userInfo,
  /**
   * 최근 키워드
   */
  recentKeywords: (state) => state.keyword.recentKeywords
}

export default getters;
