import React from 'react';
import './Spec.css';
import Image from '../images/Songdo.jpg';


function Spec() {
  return (
    <div className='spec_container'>
        <h1 className='h1_'>SONGDO</h1>
        <div className='spec_image_container'>
            <img alt='spec_image' src={Image}/>
        </div>
        <div className='spec_container'>
            <span>여행지 지명</span>
            <span className='siteName'>송도</span>
        </div>
        <div className='spec_container'> 
            <span>여행지 소개자</span>
            <span className='person'>김은이</span>
        </div>
        <div className='spec_container'>
            <span>여행 경비 & 소요 시간</span>
            <span className='moneyTime'>
            3인 기준 여행경비: 60만원<br/>
            가천대역 기준 소요시간: 약 2시간<br/>       
            </span>
        </div>
        <div className='spec_container'>
            <span>이동 수단</span>
            <span className='moneyTime'>
            이동 수단: 자동차(추천), 버스, 지하철<br/>
            </span>
        </div>
        <div className='spec_container'>
            <span>추천 활동 & 주요 관광지</span>
            <span className='activity'>
            <b>추천 활동: </b><br/>
            송도 센트럴파크에서 자전거나 지쿠터로 경치와 이동을 즐길 수 있다 도시 한 가운데에 펼쳐진 공원의 모습은 신기하면서도 자연 친화적인 분위기가 느껴진다. 
            또한, 오리배나 보트 체험이 가능하기도 하다. 송도 트리플스트리트는 지하철과 많은 상가들이 엮여 존재하며, 구경거리와 주차 등 편의시설이 편해 데이트나 구경을 하기에 좋은 곳이다.<br/><br/>
            <b>주요 관광지: </b><br/>
            1. 송도 센트럴파크 30분 기준 지쿠터 3000원으로 큰 공원을 둘러보기에 적합한 가격과 경치가 잘 갖춰져 있다.<br/>
            2. 송도 트리플스트리트 속의 가게들이 중간중간 향수가 느껴지는 곳들도 많이 존재해, 구경하며 걷기 좋은 위치로 식사도 간편하게 가능하며 모든 조건이 잘 갖춰져 있으며 구경하는 것에 비용이 들지 않는다.<br/><br/>
            </span>
        </div>
        <div className='spec_container'>
            <span>리뷰 &여행 팁</span>
            <span className='site'>
            <b>리뷰: </b><br/>
            1. 인천 송도 신도시로 발달된 교통과 수많은 맛집들이 존재해, 고민하지 않고 배달의 민족을 통해 먹고 싶은 음식을 즐기기 편하다는 장점이 존재한다.<br/>
            2. 홀리데이인 인천 송도 호텔의 내부가 4성급 호텔로 평가받을 만큼, 1박 인당 약 100,000원으로도 화려한 도시뷰를 즐기기에 적합한 위치이다. 
            조식과 9시 이전까지 호텔만의 특식이 존재하니, 연인과의 여행에서 분위기를 즐기기에도 잘 갖춰진 숙소로 추천하는 곳이다.<br/><br/>
            
            <b>여행 팁: </b><br/>
            대중교통이 잘 발달되어 있는 곳이지만, 송도 도시를 여행하기에 자가용이 없다면 기타 비용이 많이 들기 때문에 자가용이 없다면 오히려 도시 여행을 즐기기 다소 어려움이 존재한다. 
            때문에 대중교통 여행으로 인천 송도 여행은 비추천한다.<br/><br/>
            </span>
        </div>
    </div>
  );
}


export default Spec;

