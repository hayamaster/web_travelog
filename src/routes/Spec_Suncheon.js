import React from 'react';
import './Spec.css';
import Image from '../images/Suncheon.jpg';


function Spec() {
  return (
    <div className='spec_container'>
        <h1 className='h1_'>SUNCHEON</h1>
        <div className='spec_image_container'>
            <img alt='spec_image' src={Image}/>
        </div>
        <div className='spec_container'>
            <span>여행지 지명</span>
            <span className='siteName'>순천</span>
        </div>
        <div className='spec_container'> 
            <span>여행지 소개자</span>
            <span className='person'>신동후</span>
        </div>
        <div className='spec_container'>
            <span>여행 경비 & 소요 시간</span>
            <span className='moneyTime'>
            여행인원 4인 기준 여행경비: 178800원            
            </span>
        </div>
        <div className='spec_container'>
            <span>이동 수단</span>
            <span className='moneyTime'>
            srt, ktx            
            </span>
        </div>
        <div className='spec_container'>
            <span>추천 활동 & 주요 관광지</span>
            <span className='activity'>
            <b>추천 활동: </b><br/>
            순천만 국가 정원은 소개 사이트에 4시간 코스가 있을 만큼 규모가 있는 정원이다. 
            준비 없이 4시간 코스를 돌기는 힘들겠지만, 사이트에 소개 되어있는 1시간이나 2시간 코스를 따라서 꼭 들러 보길 추천하는 관광지이다. 
            가을에 가보는 순천만 습지도 갈대밭이 아름다워 꼭 돌아 보기를 권장한다. 
            그리고 웃장 국밥 거리를 가면 정말 많은 국밥집을 볼 수 있는데 꼭 들러 맛있는 국밥도 먹고 주위를 둘러보는 것을 추천한다.<br/><br/>
            
            <b>주요 관광지: </b><br/>
            순천만 습지, 순천만 국가정원, 조례 호수공원 등 자연 구경<br/>
            </span>
        </div>
        <div className='spec_container'>
            <span>리뷰 &여행 팁</span>
            <span className='site'>
            <b>리뷰: </b><br/>
            순천은 자연이 정말 아름다운 곳이다. 순천만 정원, 공원 등 자연을 느낄 수 있는 관광지가 많고, 육지와 바다를 모두 느낄 수 있는 좋은 장소이다. 
            전라도인만큼 음식도 맛있다 국내 여행지니만큼 대학생이면 내일로(일주일 7만원)를 타면 꼭 추천해주고 싶은 관광지이다.<br/><br/>
            
            <b>여행팁: </b><br/>
            내일로는 7만원에 일주일동안 무제한으로 기차를 탈 수 있게 해주는 상품이다. 
            이를 이용하여 가면 다른 지역과 함께 순천을 둘러볼 수 있다. 
            나라에서 관리하는 순천만 국가 정원은 꼭 들려 보길 바라며, 가을에 가면 아름다운 갈대숲을 볼 수 있다. 
            꼭 석양이 질 때 가보자. 그리고 가까이에 여수가 있어 함께 들려 보기 좋다.<br/><br/>
            </span>
        </div>
    </div>
  );
}


export default Spec;

