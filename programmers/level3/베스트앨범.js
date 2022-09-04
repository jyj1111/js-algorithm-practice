function hap(arr) {
  return arr.reduce((val, acc) => val + acc, 0);
}

function solution(genres, plays) {
  var answer = [];
  var genre = new Set(genres);
  genre = [...genre];
  var music_list = [];

  for (let i = 0; i < genre.length; i++) {
    var music = [];

    for (let j = 0; j < genres.length; j++) {
      if (genre[i] === genres[j]) {
        music.push(plays[j]);
      }
    }

    music_list.push(music);
  }

  music_list.sort((a, b) => hap(b) - hap(a));

  for (let i = 0; i < music_list.length; i++) {
    music_list[i].sort((a, b) => b - a);

    for (let j = 0; j < music_list[i].length; j++) {
      if (j >= 2) {
        break;
      }
      if (j === 1 && music_list[i][1] === music_list[i][0]) {
        let start = plays.indexOf(music_list[i][0]);
        answer.push(plays.indexOf(music_list[i][1], start + 1));
        break;
      }
      answer.push(plays.indexOf(music_list[i][j]));
    }
  }

  return answer;
}
