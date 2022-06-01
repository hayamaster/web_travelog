import React from 'react';
import './Spec.css';
import Image from '../images/Gangneung.jpg';


function Spec() {
  return (
    <div className='spec_container'>
        <h1 className='h1_'>GANGNEUNG</h1>
        <div className='spec_image_container'>
            <img alt='spec_image' src={Image}/>
        </div>
        <div className='spec_container'>
            <span>여행지 지명</span>
            <span className='siteName'>강릉</span>
        </div>
        <div className='spec_container'> 
            <span>여행지 소개자</span>
            <span className='person'>김은이</span>
        </div>
        <div className='spec_container'>
            <span>여행 경비 & 소요 시간</span>
            <span className='moneyTime'>
            여행인원 4인, 2박 3일 기준 여행 경비: 약 90만원
            </span>
        </div>
        <div className='spec_container'>
            <span>이동 수단</span>
            <span className='moneyTime'>
            이동 수단: 자동차, 지하철, 고속버스터미널 강릉행(추천), KTX(추천)<br/>
            가천대역 기준 소요시간: KTX기준 약 2시간 20분<br/>
            </span>
        </div>
        <div className='spec_container'>
            <span>추천 활동 & 주요 관광지</span>
            <span className='activity'>
            <b>추천 활동: </b><br/>
            드라마 촬영지 주문진 포토샷, 강릉 안목해변과 카페거리와 바다 수영을 통해 한 여름을 나기 좋은 곳이다. 
            또한, 바닷가 산책로를 따라 걸으며 친구들과 추억, 고민에 대해 이야기 나누기 좋은 곳. 
            4인 자전거를 타며 경포호를 따라 운동하며 자유를 즐길 수 있다. 
            식사로는 강릉 수제 버거와 물회, 엄지네 꼬막집에서 꼬막 비빔밥을 꼭 먹어보는 것도 추천한다. 
            디저트로는 강릉 인절미, 24FRAME 빵을 즐기는 것도 추천한다.<br/><br/>
            <b>주요 관광지: </b><br/>
            1. 하슬라아트월드 박물관 – 성인 기준 15000원, 청소년 기준 13000원, 어린이 기준 11000원. 
            연인들과 가족들 간의 포토존으로 유명하여 박물관 내부에서 자유로운 촬영이 가능하다.<br/>
            2. 경포호 자전거 – 성인 기준 2시간 1명당 15000, 2시간 동안 경치와 액티비티 활동을 즐기며 대비 가격도 나쁘지 않다고 생각했던 활동이었다. 
            또한, 경포호의 끝자락으로 이동하며 있는 산길은 연인들에게도 인기있는 장소이다.<br/><br/>
            </span>
        </div>
        <div className='spec_container'>
            <span>리뷰 &여행 팁</span>
            <span className='site'>
            <b>리뷰: </b><br/>
            1. 엄지네 꼬막집은 해산물의 비릿한 맛이 약하지만, 해산물을 싫어하는 사람들에겐 당연히 비릿함이 느껴질 수 있음으로 비추천하는 음식이다. 
            그러나 근처 배달음식들도 충분히 많으니 바다와 음식을 함께 즐기기 좋다.<br/>
            2. 2박 3일 동안 묵었던 숙소 중, 경포 블루 비치 펜션은 4인 기준 1박 약 130,000원으로 오션뷰와 풀빌라를 동시에 즐길 수 있다는 것이 장점이었다.<br/><br/>
            <b>여행 팁: </b><br/>
            1. 아라나비 강릉점의 짚라인은 거리가 짧은 반면, 가격이 인당 20000원 가격이기 때문에 짜릿한 액티비티를 원하는 분들에겐 비추천 하고 싶은 활동이다.<br/>
            2. 주문진 근처에 식당과 카페들도 많이 존재하나, 차가 없다면 이동하기 불편할 수 있다. 때문에 자가용이 없다면 주문진 이동을 비추천한다.<br/>
            </span>
        </div>
    </div>
  );
}


export default Spec;

