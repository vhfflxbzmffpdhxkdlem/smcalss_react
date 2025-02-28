import React from 'react';

// props : 변수2개 -> {}를 사용해서 props 변수를 구조분해해서 받을수 있음
const MovieList = ({movie,delMovie}) => {

  const deleteBtn = () =>{
    alert(movie.no+"번 데이터를 삭제합니다.");
    delMovie(movie.no)// 삭제처리
  }

  console.log(movie)
  return(
  <>
    <div className="card">
      <h5 className="card-header">영화정보{movie.no}</h5>
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.date}</p>
        <a href="#" className="btn btn-primary mt">수정</a>
        <a onClick={deleteBtn} className="btn btn-primary"style={{backgroundColor:'red'}}>삭제</a>

      </div>
    </div>
  </>
  );
}
export default MovieList
