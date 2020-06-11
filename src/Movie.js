//Movie 컴포넌트는 state가 필요하지 않으므로 클래스형 컴포넌트가 아니라 함수형 컴포넌트로 작성해야 함.
//Movie에 넘어와야 하는 영화 데이터를 정의하고 관리하기 위해 prop-type을 사용함. 

import React from "react";
import PropTypes from "prop-types";

function Movie({ id, title, year, summary, poster}) {
    return <h1>{title}</h1>
    
}

Movie.prototype = {
    id      :PropTypes.number.isRequired,
    year    :PropTypes.number.isRequired,
    title   :PropTypes.string.isRequired,
    summary :PropTypes.string.isRequired,
    poster  :PropTypes.string.isRequired,   //포스터에는 이미지주소(문자열) 이 저장됨.
};

export default Movie;