//useState と useEffectをreactからimport
import { useState, useEffect } from "react";
//API通信はaxiosを使います
import axios from "axios";
//apikeyはそのまま書いちゃダメなのでenvに入れて呼び出します（他にいいやり方あるのかな？）


const Search = word => {
　// 先ほどと同じようにMovieListにAPI通信結果をstate保持させていきます。
  const [movieList, setMovieList] = useState([]);
  const fetchMovie = async word => {
    const response = await axios.get(
      `https://api.jikan.moe/v3/search/anime?q=${word}`
      // 持ってきたwordはここのAPI処理に使われる
    );
    const data = response.data.results;
    setMovieList(data);
    // APIで返る値をmoviesに保持
  };

  useEffect(() => {
    // レンダリングの後になんらかの処理を動作させるメソッド。
    fetchMovie(word);
  }, [word]);
  // 第二引数に変数を与えると、最初のレンダリング時と、
  // 変数の値が変更された時のみメソッドが動く

  return movieList;
};

export default Search;
