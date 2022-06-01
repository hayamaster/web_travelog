import React from 'react';
import './Spec.css';
import Image from '../images/Japan.jpg';


function Spec() {
  return (
    <div className='spec_container'>
        <h1 className='h1_'>JAPAN</h1>
        <div className='spec_image_container'>
            <img alt='spec_image' src={Image}/>
        </div>
        <div className='spec_container'>
            <span>여행지 지명</span>
            <span className='siteName'>일본</span>
        </div>
        <div className='spec_container'> 
            <span>여행지 소개자</span>
            <span className='person'>박정희</span>
        </div>
        <div className='spec_container'>
            <span>여행 경비 & 소요 시간</span>
            <span className='moneyTime'>
                비행기표 제외 일주일 간 약 200만원
            </span>
        </div>
        <div className='spec_container'>
            <span>이동 수단</span>
            <span className='moneyTime'>
            버스 / 지하철 / 자전거 / 택시
            </span>
        </div>
        <div className='spec_container'>
            <span>추천 활동 & 주요 관광지</span>
            <span className='activity'>
            <b>주요 관광지: </b><br/>
            1.	아사쿠사: <br/>
            지금은 화려한 도시가 된 도쿄에서 일본의 옛 풍경과 전통을 볼 수 있는 곳이다. 
            사람들이 많이 찾는 곳이라 교통편도 좋은 편이다. 볼거리가 다양하기 때문에 시간을 넉넉히 갖는 것이 좋다. 
            옛 상점가인 나카미세도리와 함께 센소지의 수호문 ‘가미나리문’을 볼 수 있다. 
            근처에는 ‘갓파바시 도구 거리’가 있는데, 메이지 시대 말기부터 형성된 곳이다. 
            원래는 골동품을 파는 가게였지만 지금은 주방 제품을 판매하고 있다.<br/>
            <br/>
            2.	신주쿠 교엔: <br/>
            입장료 200엔 (성인) 신주쿠 교엔은 도심공원으로, 원래는 왕실 정원으로 지어졌다가 전쟁 후  모두에게 개방되었다.
            봄에는 벚꽃이 피고, 가을에는 단풍이 져서 언제나 사람들의 발길이 끊이지 않는다. 
            공원이 굉장히 커서 도심 속에서 자연과 여유를 맛보고 싶다면 신주쿠 교엔을 추천한다.<br/>
            <br/>
            <br/>
            <b>추천 활동: </b><br/>
            도쿄는 세계적으로 유명한 일본의 대도시다. 그래서 어딜 가든 재미있는 여행을 즐길 수 있을 거라고 생각한다. 
            특히 쇼핑의 천국이라 할만큼 다양한 가게와 상품들을 구경할 수 있다. 
            다만 말하고 싶은 것은, 일본의 화려함만큼 옛 일본만의 분위기를 한번쯤 느끼고 오라고 말해주고 싶다.
            </span>
        </div>
        <div className='spec_container'>
            <span>리뷰 &여행 팁</span>
            <span className='site'>
            <b>리뷰: 음식점 추천_핫산</b><br/>
            도쿄 롯폰가에 있는 음식점으로, 와규와 스시를 판매하고 있다. 
            인기메뉴는 세트에 포함된 모든 음식이 무한리필인 ‘쿠로게와규 샤부샤부’!  와규와 스시 이외에도 다양한 음식들이 같이 나와 먹는 재미가 있다. 
            방송에도 출연한 적이 있어 우리나라 사람들도 많이 가는 가게 중 하나이다.<br/>
            <br/>
            <b>여행 팁: </b><br/>
            1.	우리나라는 지하철이 모두 한국철도공사에 의해 관리되고 있어서 갈아타는데 어려움이 없다. 
            하지만, 일본은 지하철마다 환승이 불가능하거나 다른 표을 구매해야하기 때문에 훨씬 복잡하다. 
            따라서 목적지에 잘 도착하기 위해서는 미리 경로를 잘 알아두는 것이 필요하다.<br/>
            2.	일본어를 못한다고 해서 걱정하지 않아도 된다. 
            이미 도쿄는 너무나 유명한 곳이기에 한국어, 영어, 중국어 간판이나 설명이 많다.
            일본어를 모르더라도 충분히 즐길 수 있다.<br/>
            </span>
        </div>
    </div>
  );
}


export default Spec;

