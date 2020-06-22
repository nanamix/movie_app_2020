//Movie 컴포넌트는 state가 필요하지 않으므로 클래스형 컴포넌트가 아니라 함수형 컴포넌트로 작성해야 함.
//Movie에 넘어와야 하는 영화 데이터를 정의하고 관리하기 위해 prop-type을 사용함. 

import React from "react";
import PropTypes from "prop-types";
import './Movie.css'

//function Movie({ id, title, year, summary, poster}) {
function Movie({ title, year, summary, poster, genres}) {
    // return <h1>{title}</h1>
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h3 className="movie__year">{year}</h3>
            <h3 className="movie__summary">{summary.slice(0, 180)}</h3>
            <ul className="movie__genres">
                {genres.map((genres, index)=>{
                    //return <li className="movie__genres">{genres}</li>;
                    return (
                    <li key={index} className="movie__genre">
                        {genres}
                    </li>
                    );
                })}
            </ul>
        </div>
        </div>
    );
    
}

Movie.prototype = {
    //id      :PropTypes.number.isRequired,
    year    :PropTypes.number.isRequired,
    title   :PropTypes.string.isRequired,
    summary :PropTypes.string.isRequired,
    poster  :PropTypes.string.isRequired,   //포스터에는 이미지주소(문자열) 이 저장됨.
    genres  :PropTypes.arrayOf(PropTypes.string).isRequired,    //arrayOf(PropTypes.string)은 문자열을 원소로 하는 배열
};

export default Movie;