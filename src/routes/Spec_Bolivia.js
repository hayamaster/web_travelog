import React from 'react';
import './Spec.css';
import Image from '../images/Bolivia.jpg';


function Spec() {
  return (
    <div className='spec_container'>
        <h1 className='h1_'>BOLIVIA</h1>
        <div className='spec_image_container'>
            <img alt='spec_image' src={Image}/>
        </div>
        <div className='spec_container'>
            <span>여행지 지명</span>
            <span className='siteName'>볼리비아</span>
        </div>
        <div className='spec_container'> 
            <span>여행지 소개자</span>
            <span className='person'>신동후</span>
        </div>
        <div className='spec_container'>
            <span>여행 경비 & 소요 시간</span>
            <span className='moneyTime'>
                비행기(150만원 이상)
            </span>
        </div>
        <div className='spec_container'>
            <span>이동 수단</span>
            <span className='moneyTime'>
            우버 / 버스 / 택시 / 도보                  
            </span>
        </div>
        <div className='spec_container'>
            <span>추천 활동 & 주요 관광지</span>
            <span className='activity'>
            <b>추천 활동: </b><br/>
            추천 활동: 일단 볼리비아의 최대도시인 라파스에 가면 ‘mi teleferico’라는 케이블카가 있다. 
            해발 3000m에서 라파스 도시 전경을 내려다 볼 수 있으며, 좋은 교통 수단이기도 하므로 꼭 타보자. 
            그 후에 추천하는 관광지는 세계 최대의 소금 사막인 유우니 호수이다. 볼리비아를 상징하는 대표적인 관광명소이고 정말 아름다운 곳이므로 추천하는 바이다. 
            그 외에 블랑카 국립 공원, 아타카마 사막도 볼리비아 하면 떠오르는 대표적인 장소로 꼭 방문해보기를 권장한다.<br/><br/>

            <b>주요 관광지: </b><br/>
            유적지 관광, 트레킹, 다양한 이국적 자연 체험 <br/><br/>
            </span>
        </div>
        <div className='spec_container'>
            <span>리뷰 &여행 팁</span>
            <span className='site'>
            <b>리뷰: </b><br/> 
            칠레 산페드로 데 아타카마부터 2박3일동안 우유니 사막까지 가는 투어가 있는데 칠레에서 볼리비아로 넘어가려는 여행자들에게 매우 좋은 코스이다. 
            우유니 사막을 갔다가 다시 칠레로 돌아오는 코스도 있으며, 반대로 볼리비아 우유니에서 칠레 산페드로 데 아타카마로 가는 투어도 있다. 
            9월에 투어를 진행했는데, 겨울이었기에 정말 매우 건조하여 고생하였다. 되도록 겨울시즌은 피해서 가자.<br/><br/>
            
            <b>여행팁: </b><br/>
            워낙 관광으로 볼거리가 많아 원하는 것 몇 가지를 사전에 검색해보고 가는 것이 좋다.
            비행기 값이 비싸니 다른 나라 경유지로 들리거나, 특가로 판매할 때를 기다리자. 
            스페인어를 사용하니 기본적인 것은 준비해가자. 치안이 좋지는 않으니 사람 많은 곳에서는 소매치기 조심. 
            유우니 소금사막은 1~3월에 가서 보는 것이 아름답다.<br/><br/>
            </span>
        </div>
    </div>
  );
}


export default Spec;

