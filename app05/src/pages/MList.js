import React,{useState,useEffect} from 'react';
import '../App.css';
import MemberList from '../components/MemberList';
import Nav from '../components/Nav';
import axios from 'axios';

const MList = () =>{
  const [movies,setMovies] = useState(
    [
      {no:3,title:"해리포터 3",date:"2020-01-03"},
      {no:2,title:"해리포터 2",date:"2020-01-02"},
      {no:1,title:"해리포터 1",date:"2020-01-01"},
    ]
  );

  // 서버와 통신해서 데이터 가져오기
  // 스프링에 있는 url주소를 입력
  useEffect(
    () => {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(
        response =>{
          console.log(response);
          setMovies(response.data);
        }
      )
    },[]
  )

  // 데이터 추가(inset - post방식)
  const addMovie = (movie) =>{
    setMovies([movie,...movies,]); // 3개데이터 -> 3개데이터 모두 지우고, 최종데이터만 저장
  }

  // 데이터 삭제(delete - delete방식)
  const delMovie = (no) =>{
    console.log("삭제번호 : "+no);
    // 데이터 삭제 : filter 해당되는 데이터를 리턴해서 돌려줌.
    setMovies(
      movies.filter((movie)=>{
        return(movie.no != no)
      })
    )
  }


  // 데이터 출력(select - get방식)
  // 반복문 map함수는 return해서 값을 돌려줌. for 문 반복만 함. return없음.
  // 최초 스프링에서 데이터를 useEffect로 가져와서 map으로 리스트를 출력하는 형태구성
  // 삼항식을 사용해서 영화정보 데이터가 없을때 처리
  const mlist = 
  movies.length?
  movies.map((movie)=>{
    return(
    <MemberList movie={movie} delMovie={delMovie} key={movie.no}/>
    );
  }):"영화정보 데이터가 없습니다."
;

  return (
    <>
    <Nav/>    
    <div className="main">
      <h2>영화리스트</h2>
      <div>
        {mlist}
      </div>
    </div>
    </>
  );
}

export default MList;
