import fetch from '../config/fetch'

//获取banner
export const getBanner = () => fetch('/banner', {});

//推荐歌单
export const getPersonalized = () => fetch('/personalized', {});

//新碟上架
export const getAlbum = () => fetch('/top/album', {});

//飙升榜
export const getSoaring = () => fetch('/top/list?idx=3', {});

//新歌榜
export const getNewSongs = () => fetch('/top/list?idx=0', {});

//原创榜
export const getOriginal = () => fetch('/top/list?idx=2', {});

//入驻歌手
export const getEnterSinger = () => fetch('/artist/list?cat=5001', {});

//热门歌手
export const getArtists = () => fetch('/top/artists', {});




//手机号登录
export const getLogin = (phone, password) => fetch('/login/cellphone', {
  phone,
  password,
}, 'get');



//最新音乐
export const getNewsong = () => fetch('/personalized/newsong', {});

//热歌榜
export const getHotList = (idx) => fetch('/top/list', {
  idx,
});

//搜索
export const getSearch = (keywords) => fetch('/search', {
  keywords,
});

//热搜
export const getHotSearch = () => fetch('/search/hot', {});

//搜索建议
export const getSuggest = (keywords) => fetch('/search/suggest', {
  keywords,
});

//搜索多重匹配
export const getMultimatch = (keywords) => fetch('/search/multimatch', {
  keywords,
});

//获取歌单详情
export const getDetail = (id) => fetch('/playlist/detail', {
  id,
});

//获取歌曲url
export const getSongUrl = (id) => fetch('/song/url', {
  id,
});


//获取歌词
export const getSongLyric = (id) => fetch('/lyric', {
  id,
});


//获取单个歌曲详情
export const getSongDetail = (ids) => fetch('/song/detail', {
  ids,
});
